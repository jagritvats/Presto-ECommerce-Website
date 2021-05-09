import React,{useState,useEffect} from 'react';
import {Link, useParams,useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux'

import Stars from '../layout/Stars'

import {addCart} from '../../actions'

import {useDispatch} from 'react-redux'

import './ProductPage.css'

function ProductPage() {
    let products = useSelector(state=>state.products);

    let params = useParams();
    let id = params.id;

    let history = useHistory();
    const dispatch = useDispatch()

    let [product,setProduct] = useState();

    useEffect(()=>{
        let prod = products.find(ob => ob.prodId==id);  
        setProduct(prod)
    },[id])
    
    
    return (
        <div>
            {
            product?
            <div className="productPage">

                <Link to={"/category/" + product.categoryId}>{product.category}</Link>

                <div className="topDetails">

                    <div className="prodImgs">
                        <img src={product.img} alt=""/>
                    </div>

                    <div className="mainDetails">
                        <h3>{product.name}</h3>
                        
                        <p className="modelName">Model: {product.model}</p>
                        
                        <p className="reviewCont">
                            <span className="stars"> <Stars num={product.stars}/> <span> ({product.stars}) </span> </span>
                            
                            <a href="#reviews" className="numReviews">{product.numReviews} Ratings</a>
                        </p>

                        <p className="priceTag">

                            <span>$ {parseInt(product.price).toFixed(2)} &nbsp;</span>
                            {
                                product.maxPrice? 
                                <span className="maxPrice">$ {parseInt(product.maxPrice).toFixed(2)}</span>
                                :
                                ""
                            }
                        
                        </p>
                        
                        <div>
                            <span>Qty:</span> 
                            <select>
                                <option>1</option>
                            </select>

                            <button className="btn cart-btn" onClick={()=>{
                                dispatch(addCart(product))
                                history.push("/cart") 
                            }}>Add to cart</button>
                        </div>

                        <div className="deliveryBox">

                        </div>

                        <div>
                            <p>Sold &amp; shipped by <Link href="/">Ourmart</Link></p>
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
                                product.specifications.map((trow)=>(
                                    <tr>
                                        {
                                            trow.map((tdata)=>(
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
                            <span className="stars"> <Stars num={product.stars}/></span>
                        </p>
                        <p>{product.numReviews} ratings</p>
                    </div>

                    <div className="reviews">
                        {
                            product.reviews.map((review)=>(
                                <div className="review">
                                    <span className="stars"><Stars num={review.stars}/></span>
                                    <h4>{review.title}</h4>
                                    <p className="highligted">{review.date.toLocaleString('default', {dateStyle:"medium" })}</p>
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
