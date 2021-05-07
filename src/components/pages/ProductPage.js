import React,{useState,useEffect} from 'react';
import {Link, useParams,useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux'

import Stars from '../layout/Stars'

import {addCart} from '../../actions'

import {useDispatch} from 'react-redux'

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
        console.log(prod)
    },[id])
    
    
    return (
        <div>
            Product Page
            {id}

            {
            product?
                <div className="product">
                    <img src={product.img} alt=""/>
                    <h3>{product.name}</h3>
                
                
                <p className="reviewCont">
                    <span className="stars"> <Stars num={product.stars}/>  </span>
                       
                    <span className="numReviews">{product.numReviews}</span>
                </p>
                <p className="priceTag">$ {parseInt(product.price).toFixed(2)}</p>
                <Link href="" className="btn" onClick={()=>{
                    dispatch(addCart(product))
                    history.push("/cart") 
                }}>Add to cart</Link>

                
            </div>
            :
                <div><p>Sorry, this product doesn't exist, go back too home page pls</p> <Link to="/">Home</Link> </div>
            }
        </div>
    )
}

export default ProductPage
