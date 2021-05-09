import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux'

import Stars from '../layout/Stars'

import { addCart } from '../../actions'
import { useDispatch } from 'react-redux'

import './ProductPage.css'

// import icons
import ShippingIcon from '../../images/others/shipping.svg'
import HomeIcon from '../../images/others/home.svg'

function ProductPage() {
    let products = useSelector(state => state.products);

    let params = useParams();
    let id = params.id;

    let [imgIndex, setImageIndex] = useState(0);

    let history = useHistory();
    const dispatch = useDispatch()

    let [product, setProduct] = useState();

    useEffect(() => {
        // setting products when the id changes
        let prod = products.find(ob => ob.prodId == id);
        setProduct(prod)
    }, [id])

    // for delivery date
    var date = new Date();
    date.setDate(date.getDate() + 2);// date will be two days ahead

    let key = 0;//for keys in list rendering

    return (
        <div>
            {
                product ?
                    <div className="productPage">

                        <Link to={"/category/" + product.categoryId}>{product.category}</Link>

                        <div className="topDetails">
                            <div className="prodImgs">
                                <div className="allImgs">
                                    {
                                        product.imgs.map((image) => (
                                            <img data-id={key} key={key++} src={image} className={"sideImg" + (key == imgIndex ? " selectedSmallImg" : "")} onClick={(e) => {
                                                setImageIndex(e.target.getAttribute("data-id"))
                                            }}></img>
                                        ))
                                    }
                                </div>
                                <img src={product.imgs[imgIndex]} alt="" />
                            </div>

                            <div className="mainDetails">
                                <h3>{product.name}</h3>

                                <p className="modelName">Model: {product.model}</p>

                                <p className="reviewCont">
                                    <span className="stars"> <Stars num={product.stars} /> <span> ({product.stars}) </span> </span>

                                    <a href="#reviews" className="numReviews">{product.numReviews} Ratings</a>
                                </p>

                                <p className="priceTag">

                                    <span className="currentPrice">$ {product.price.toFixed(2)} &nbsp;</span>
                                    {
                                        product.maxPrice ?
                                            <span className="maxPrice">$ {product.maxPrice.toFixed(2)}</span>
                                            :
                                            ""
                                    }

                                </p>

                                <div className="qtyCont">
                                    <span>Qty:</span>
                                    <select>
                                        <option>1</option>
                                    </select>

                                    <button className="btn cart-btn" onClick={() => {
                                        dispatch(addCart(product))
                                        history.push("/cart")
                                    }}>Add to cart</button>
                                </div>

                                <div className="deliveryBox">
                                    <h4> <img src={HomeIcon} alt="" /> Free Delivery</h4>
                                    <p className="arrivesBy">Arrives by {date.toDateString()}</p>
                                    <p> <img src={ShippingIcon} alt="" /> Pickup Not Available</p>
                                </div>

                                <div className="soldBy">
                                    <p>Sold &amp; shipped by <Link href="/">Presto</Link></p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2>About This Item</h2>

                            <p>
                                {
                                    product.description
                                }
                            </p>
                        </div>

                        <div className="specifications">
                            <h2>Specifications</h2>

                            <table>
                                <tbody>
                                    {
                                        product.specifications.map((trow) => (
                                            <tr>
                                                {
                                                    trow.map((tdata) => (
                                                        <td>{tdata}</td>
                                                    ))
                                                }
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>

                        <div className="reviewContainer" id="#reviews">
                            <h2>Customer reviews &amp; ratings</h2>
                            <div className="reviewBox">
                                <p>
                                    {product.stars}
                                    <span className="stars"> <Stars num={product.stars} /></span>
                                </p>
                                <p>{product.numReviews} ratings</p>
                            </div>

                            <div className="reviews">
                                {
                                    product.reviews.map((review) => (
                                        <div className="review">
                                            <span className="stars"><Stars num={review.stars} /></span>
                                            <h4>{review.title}</h4>
                                            <p className="highligted">{review.date.toLocaleString('default', { dateStyle: "medium" })}</p>
                                            <p>{review.description}</p>
                                            <p className="highligted">{review.author}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                    </div>
                    :
                    <div><p>Sorry, this product doesn't exist, go back too home page pls</p> <Link to="/">Home</Link> </div>
            }
        </div>
    )
}

export default ProductPage
