import React from 'react'
import './CartItem.css'

import {useDispatch} from 'react-redux'

import {removeCart} from '../../actions';

import Stars from './Stars';

function CartItem({product}) {

    const dispatch = useDispatch();

    return (
        <div className="product">
            <img src={product.img} alt=""/>
            <h3>{product.name}</h3>

            <p className="reviewCont">
                <span className="stars"> <Stars num={product.stars}/>  </span>
                
                <span className="numReviews">{product.numReviews}</span> <span>||{product.quantity}</span>
            </p>
            <p className="priceTag">$ {parseInt(product.price).toFixed(2)}</p>
            <button href="" className="btn" onClick={()=>{
                dispatch(removeCart(product.prodId))
            }}>Remove from cart</button>
        </div>
    )
}

export default CartItem
