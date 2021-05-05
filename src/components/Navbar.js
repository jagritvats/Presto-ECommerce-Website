import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import './Navbar.css';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Navbar() {

    const cart = useSelector(state => state.cart);

    let qty = 0;

    cart.forEach(cartItem => {
        qty += cartItem.quantity;
    });
    return (
        <div className="nav">
            
            <Link to="/">Home</Link>

            <Link to="/cart">
                <span>{qty}</span>
                <ShoppingCartIcon/>
            </Link>

        </div>
    )
}

export default Navbar
