import React from 'react'
import './CartItem.css'

import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'

import {reduceByOne} from '../../actions';

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
                {
                    product.quantity>1?
                        <button onClick={()=>{
                            dispatch(reduceByOne(product))
                        }}> - </button>
                    :
                    ""
                }
                
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
