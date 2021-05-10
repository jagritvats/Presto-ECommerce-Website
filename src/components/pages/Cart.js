import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import CartItem from '../layout/CartItem';

import { Link, useHistory } from 'react-router-dom';

import './Cart.css'

function Cart() {

    const cart = useSelector(state => state.cart);
    const authSt = useSelector(state => state.auth)
    let auth=authSt.isLoggedIn;

    let history = useHistory();

    let qty = 0;
    let totalPrice = 0;

    cart.forEach(cartItem => {
        qty += cartItem.quantity;
        totalPrice += (cartItem.price * cartItem.quantity)
    });

    useEffect(() => {

    }, [cart])

    return (
        <div className="cartContainer">
            <div className="cart">
                <h1> <span className="hbold">Your cart: {qty}</span>  <span>items</span></h1>

                <div className="cart__nested">
                    <div className="cartItems">

                        {cart.length ?
                            cart.map((prod) => (
                                <CartItem product={prod} key={prod.prodId} />
                            ))
                            :
                            <div><p>No Items in Cart</p></div>
                        }
                    </div>
                    
                    {
                        qty>0?
                            <div className="cartSummary">
                        <table>
                            <tbody>
                                <tr>
                                    <td>Subtotal ( {qty} items)</td>
                                    <td>$ {totalPrice.toFixed(2)}</td>
                                </tr>

                                <tr>
                                    <td>Delivery</td>
                                    <td>Free</td>
                                </tr>

                                <tr>
                                    <td>Taxes and fees</td>
                                    <td>--</td>
                                </tr>

                                <tr className="cartTotal">
                                    <td>Est. total</td>
                                    <td className="boldPrice">$ {totalPrice.toFixed(2)}</td>
                                </tr>

                            </tbody>
                        </table>

                        <button onClick={() => { 
                            if(auth){
                                history.push("/checkout") 
                            }else{
                                alert("Login First!, redirecting to login page in 1 seconds")
                                setTimeout(()=>{
                                    history.push('/account')
                                },1000)
                            }
                            
                        }} className="btn btn-checkout">
                            Check out
                    </button>

                        <p><span className="purple">Congrats</span> - you get <span className="purple">free delivery</span>!</p>


                    </div>
                        :
                            <div className="emptyCartSidebox">
                                <p></p>
                            </div>
                    }
                    
                </div>

            </div>


            {/* <CircularProgress/> */}
        </div>
    )
}

export default Cart
