import React,{useState} from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import './Navbar.css';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import menuList from './menuData'


import hamburger from "../images/nav/menu.svg"
import saving from "../images/nav/savings.svg"
import search from "../images/nav/search.svg"
import cartimage from "../images/nav/cart.svg"
import favorite from "../images/nav/favorite.svg"
import account from "../images/nav/account.svg"
import highlightOffWhite from "../images/nav/highlightOffWhite.svg"



function Navbar() {

    const cart = useSelector(state => state.cart);
    const [showMenu, setshowMenu] = useState(false)
    let qty = 0;

    cart.forEach(cartItem => {
        qty += cartItem.quantity;
    });
    return (
        <nav className="navigation">

            <section className="nav1">
                <img src={hamburger} onClick={() => setshowMenu(true)
                } alt="menu" />
                <div  className={showMenu?'show':'hide'}>{menuList.length && (
                    <section>
                    
                    <ul className="menu-items">
                    <div className="top-ham">
                        <img src={saving} alt="img"></img>
                        <img src={highlightOffWhite} onClick={() => setshowMenu(false)
                } alt="menu" />

                    </div>
                    <li className="site-name">Walmart.com</li>
                        {menuList.map(item => (
                            <li key={item.id}><img src={item.img} alt=""/><a href={item.url}>{item.label}</a></li>
                        ))}
                    </ul>
                    </section>
                )}</div>

                <div className="display-flex">
                    <div className="website-name"><Link to="">WallMart</Link></div>
                    <img src={saving} alt="img"></img>
                </div>
            </section>

            <section>
                <form action="" className="nav2">
                    <input className="search-bar" type="search" name="" id="" placeholder="Search Walmart.com" />
                    <img id="search-btn" className="mouse-pointer" src={search} alt="" />
                </form>
            </section>

            <section className="nav3">
                <a className="display-flex mouse-pointer account"><img src={account} alt="" /><div>Account</div></a>
                <a className="display-flex mouse-pointer fav"><img src={favorite} alt="" /><div>My Items</div></a>
                <Link to="/cart" className="mouse-pointer display-flex">
                    <img src={cartimage} alt="" />
                    <div id="noOfProducts">{qty}</div>
                </Link>
            </section>
        </nav>
    )
}

export default Navbar
