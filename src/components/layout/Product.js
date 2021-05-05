import React from 'react'
import './Product.css'
import Stars from './Stars'
import {Link} from 'react-router-dom'
import {addCart} from '../../actions'

import {useDispatch} from 'react-redux'

function Product({product}) {

    const dispatch = useDispatch()

    return (
        <div className="product">
            <Link to={"product/" + product.prodId}>
                <img src={product.img} alt=""/>
                <h3>{product.name}</h3>
            </Link>
            
            
            <p className="reviewCont">
                <span className="stars"> <Stars num={product.stars}/>  </span>
                   
                <span className="numReviews">{product.numReviews}</span>
            </p>
            <p className="priceTag">$ {parseInt(product.price).toFixed(2)}</p>
            <button href="" className="btn" onClick={()=>{
                dispatch(addCart(product))
            }}>Add to cart</button>
        </div>
    )
}

export default Product
