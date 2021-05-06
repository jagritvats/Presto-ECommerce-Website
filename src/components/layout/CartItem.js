import React from 'react'
import './CartItem.css'

import {useDispatch} from 'react-redux'

import {removeCart} from '../../actions';

function CartItem({product}) {

    const dispatch = useDispatch();

    return (
        <div className="cartItem">
            <img src={product.img} alt=""/>
            <h3>{product.name}</h3>

            <p className="reviewCont">
                <span>Qty: {product.quantity}</span>
            </p>



            <p className="rightSide"> 
                {product.maxPrice? 
                <span className="maxPrice">$ {parseInt(product.maxPrice).toFixed(2)} </span>
                :
                ""
                }
                <span> $ {parseInt(product.price).toFixed(2)}</span>
                {
                    product.quantity>1?
                        <span className="boldPrice"> $ {parseInt(product.price).toFixed(2)*product.quantity}</span>
                        :
                        ""
                }
                
                <a href="" onClick={(e)=>{
                    e.preventDefault();
                    dispatch(removeCart(product.prodId))
                }}>Remove</a>
            </p>

            
        </div>
    )
}

export default CartItem
