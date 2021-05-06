import React from 'react';
import {useSelector} from 'react-redux'
import CartItem from '../layout/CartItem';
// import CircularProgress from '@material-ui/core/CircularProgress';

import './Cart.css'

function Cart() {

    const cart = useSelector(state=> state.cart);

    let qty = 0;

    cart.forEach(cartItem => {
        qty += cartItem.quantity;
    });

    return (
        <div className="cartContainer">
            <div className="cart">
                <h1> <span className="hbold">Your cart: {qty}</span>  <span>items</span></h1>
                <div className="">

                {cart.length?
                    cart.map((prod)=>(
                        <CartItem product={prod} key={prod.prodId}/>
                    ))
                :
                    <div><p>No Items in Cart</p></div>
                }
                </div>

            </div>
            {/* <CircularProgress/> */}
        </div>
    )
}

export default Cart
