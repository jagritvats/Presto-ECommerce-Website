import React from 'react'
import Offers from './Offers'
import './Homepage.css';
import Categories from './Categories';
import Products from './Products';
import Slider from './Slider'

function Homepage() {
    return (
        <div className="home">

            <Slider />

            <Offers />

            <Categories />

            <Products />
        </div>
    )
}

export default Homepage
