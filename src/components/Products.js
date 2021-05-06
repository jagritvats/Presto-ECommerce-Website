import React,{useState,useEffect} from 'react'
import Product from './layout/Product';
import './Products.css';

import {useSelector} from 'react-redux'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



function Products(props) {

    let products = useSelector(state=>state.products)

    let id=1;

    let [scroll,setScroll] = useState(0);

    useEffect(()=>{
        let x = $(".product").width();
        if(scroll>=x*(products.length-4)){
            $("#nxt").addClass("disabled");
        }
        if(scroll<=0){
            $("#prev").addClass("disabled");
        }
    },[scroll])

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1240 },
            items: 4,
            // slidesToSlide: 3 // optional, default to 1.
        },
        middesk: {
            breakpoint: { max: 1240, min: 1024 },
            items: 3,
            // slidesToSlide: 2 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 720 },
            items: 3,
            // slidesToSlide: 2 // optional, default to 1.
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


            {/* Idea, in simple carousel have dics with 4 products and like 1st has 1-4 second has 2-5 and so on... ineffecient but worth trying out */}

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


            {/* <div className="outerContainer">
                <button className="nav-btn" id="prev" onClick={()=>{
                    let x = $(".product").width();
                    if(scroll>0){
                        $(".innerContainer").animate({
                            left:`+=${x+32}`
                        },"fast","swing")
                        setScroll((prev)=>(prev-x));
                        $("#nxt").removeClass("disabled");
                    }
                }}>&nbsp;<ArrowBackIosIcon/></button>


                <div className="innerContainer">
                {
                        products.map((product)=>(
                            <Product key={id++} product={product}/>
                        ))
                    }
                </div>


                <button className="nav-btn" id="nxt" onClick={()=>{
                    let x = $(".product").width();
                    // below 4 is number of products on one page
                    if(scroll<(x*(products.length-4))){
                        $(".innerContainer").animate({
                            left:`-=${x+32}`
                        },"fast","swing")

                        setScroll(prev=>(prev+x));
                        $("#prev").removeClass("disabled");
                    }
                    
                }}>
                    <ArrowForwardIosIcon />
                </button>
            </div>
         */}
        </div>
    )
}

export default Products
