import React from 'react';

//images
import gamesImg from '../images/categories/video_games.jpg'
import elecImg from '../images/categories/electronics.jpg'
import wclothesImg from '../images/categories/women_clothing.jpg'
import patioImg from '../images/categories/patio_garden.jpg'
import furnitureImg from '../images/categories/furniture.jpg'
import autoImg from '../images/categories/auto_tires.jpeg'

import CategoryItem from './layout/CategoryItem';

function Categories() {

    const categories = [
        {
            id:1,
            img:elecImg,
            name:'Electronics',
        },
        {
            id:2,
            img:gamesImg,
            name:'Video games',
        },
        {
            id:3,
            img:furnitureImg,
            name:"Furniture",
        },
        {
            id:4,
            img:patioImg,
            name:'Patio & garden',
        },
        {
            id:5,
            img:wclothesImg,
            name:"Women's Clothing",
        },
        {
            id:6,
            img:autoImg,
            name:'Auto & Tires',
        }
    ];

    let id=1;

    return (
        <div className="categories" style={{position:"relative"}}>
            <h2>Shop By Categories</h2> {/*Show More */}

            <a className="more">Show More +</a>

            <div className="container">
                {
                    categories.map((category)=>(
                        <CategoryItem category={category} key={id++}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Categories
