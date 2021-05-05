import React,{useState,useEffect} from 'react'
import Product from './layout/Product';
import './Products.css';

import {useSelector} from 'react-redux'

// import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';

// SwiperCore.use([Navigation, Pagination, A11y]);

// import 'swiper/swiper.scss';
// import 'swiper/components/navigation/navigation.scss';
// import 'swiper/components/pagination/pagination.scss';

//icons
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Products() {

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

    return (
        <div className="products">
            <h2>Featured Products</h2>

            {/* <Swiper
                spaceBetween={0}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        products.map((product)=>(
                            <SwiperSlide key={id++}><Product product={product}/></SwiperSlide> 
                        ))
                    }
            </Swiper> */}

            <div className="outerContainer">
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
        </div>
    )
}

export default Products
