import React,{useEffect} from 'react';
import {useSelector} from 'react-redux'
import CartItem from '../layout/CartItem';

import {Link} from 'react-router-dom';
// import CircularProgress from '@material-ui/core/CircularProgress';

import './Cart.css'

function Cart() {

    const cart = useSelector(state=> state.cart);

    let qty = 0;
    let totalPrice = 0;


    useEffect(()=>{

        cart.forEach(cartItem => {
            qty += cartItem.quantity;
            totalPrice += cartItem.price
        });
    },[cart])

    return (
        <div className="cartContainer">
            <div className="cart">
                <h1> <span className="hbold">Your cart: {qty}</span>  <span>items</span></h1>

                <div className="cart__nested">
                    <div className="cartItems">

                    {cart.length?
                        cart.map((prod)=>(
                            <CartItem product={prod} key={prod.prodId}/>
                        ))
                    :
                        <div><p>No Items in Cart</p></div>
                    }
                    </div>

                    <div className="cartSummary">
                    <table>
                        <tr>
                            <td>Subtotal</td>
                            <td>$ {totalPrice}</td>
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
                            <td className="boldPrice">$ {totalPrice}</td>
                        </tr>
                    </table>

                    <Link to="/checkout" className="btn btn-checkout">
                        Check out
                    </Link>

                    <p><span className="purple">Congrats</span> - you get <span className="purple">free delivery</span>!</p>


                </div>

                </div>

                </div>


            {/* <CircularProgress/> */}
        </div>
    )
}

export default Cart
