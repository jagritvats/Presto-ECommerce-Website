import React from 'react'
import './CartItem.css'

import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'

import {removeCart} from '../../actions';

function CartItem({product}) {

    const dispatch = useDispatch();

    return (
        <div className="cartItem">
            <Link to={"product/" + product.prodId} className="cartItemImg">
                <img src={product.img} alt=""/>
            </Link>
            
            <Link to={"product/" + product.prodId} className="cartItemTitle">    
                <h3>{product.name}</h3>
            </Link>
            

            <p className="quantity">
                <span>Qty: {product.quantity}</span>
                <select name="quantity">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </p>



            <p className="rightSide"> 
                <span>
                    {product.maxPrice? 
                    <span className="maxPrice">$ {product.maxPrice.toFixed(2)}&nbsp;</span>
                    :
                    ""
                    }
                    <span> $ {product.price.toFixed(2)}</span>

                </span>
                {
                    product.quantity>1?
                        <span className="boldPrice"> $ {((product.price)*product.quantity).toFixed(2) }</span>
                        :
                        ""
                }
                
                <a href="" className="remove" onClick={(e)=>{
                    e.preventDefault();
                    dispatch(removeCart(product.prodId))
                }}>Remove</a>
            </p>
            
            
        </div>
    )
}

export default CartItem
