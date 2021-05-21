import React from 'react'
import Product from './layout/Product';
import './Products.css';

import {useSelector} from 'react-redux'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


function Products(props) {

    let products = useSelector(state=>state.products)

    let id=1;

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1240 },
            items: 4
        },
        middesk: {
            breakpoint: { max: 1240, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 720 },
            items: 3
        },
        smaller:{
            breakpoint: { max: 720, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
        };

    return (
        <div className="products">
            <h2>Featured Products</h2>

            <Carousel
                draggable={true}
                responsive={responsive}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={100}
                containerClass="carousel-container"
                deviceType={props.deviceType}
                itemClass="carousel-item-padding-40-px"
            >
                    {
                        products.map((product)=>(
                            <Product key={id++} product={product}/>
                        ))
                    }
            </Carousel>

        </div>
    )
}

export default Products
