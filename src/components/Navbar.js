import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import './Navbar.css';

import menuList from './menuData'

import hamburger from "../images/nav/menu.svg"
import saving from "../images/nav/savings.svg"
import search from "../images/nav/search.svg"
import cartimage from "../images/nav/cart.svg"
import favorite from "../images/nav/favorite.svg"
import account from "../images/nav/account.svg"
import highlightOffWhite from "../images/nav/highlightOffWhite.svg"
import person from '../images/others/person.svg'

import SignOutButton from './layout/SignOutButton'

function Navbar() {

    let history = useHistory();

    let auth = useSelector(state => state.auth);

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
                <div className={showMenu ? 'show' : 'hide'}>{menuList.length && (
                    <section>

                        <ul className="menu-items">
                            <div className="top-ham">
                                <img src={saving} alt="img"></img>
                                <img src={highlightOffWhite} onClick={() => setshowMenu(false)
                                } alt="menu" />

                            </div>
                            <li className="site-name">Presto.com</li>
                            {menuList.map(item => (
                                <li key={item.id}><img src={item.img} alt="" /><Link to={item.url}>{item.label}</Link></li>
                            ))}
                            
                            {
                                auth.isLoggedIn?
                                    <li><SignOutButton /></li>
                                :
                                    <li><img src={person} alt="" /><Link to="account">Register/Login</Link></li>
                            }
                        </ul>
                    </section>
                )}</div>

                <div className="display-flex">
                    <div className="website-name"><Link to="/">Presto</Link></div>
                    <img src={saving} alt="img"></img>
                </div>
            </section>

            <section>
                <form action="" className="nav2" onSubmit={(e) => {
                    e.preventDefault();
                    let query = document.getElementById("sq").value
                    history.push(`/search/${query}`)
                }}>
                    <input className="search-bar" type="search" name="search" id="sq" placeholder="Search Presto.com" />
                    <button type="submit"><img id="search-btn" className="mouse-pointer" src={search} alt="" /></button>
                </form>
            </section>

            <section className="nav3">
                <Link to="/account" className="display-flex mouse-pointer account"><img src={account} alt="" /><div>Account</div></Link>
                <Link to="/orders" className="display-flex mouse-pointer fav"><img src={favorite} alt="" /><div>Orders</div></Link>
                <Link to="/cart" className="mouse-pointer display-flex">
                    <img src={cartimage} alt="" />
                    <div id="noOfProducts">{qty}</div>
                </Link>
            </section>
        </nav>
    )
}

export default Navbar
