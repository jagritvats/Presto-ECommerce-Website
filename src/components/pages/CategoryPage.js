import React,{useState,useEffect} from 'react'
import {useParams,Link} from 'react-router-dom'

import {useSelector} from 'react-redux'

import Product from '../layout/Product'
import './CategoryPage.css'

function CategoryPage() {

    let param = useParams();

    const categories = [
        {
            id:1,
            name:'Electronics',
        },
        {
            id:2,
            name:'Video games',
        },
        {
            id:3,
            name:"Furniture",
        },
        {
            id:4,
            name:'Patio & garden',
        },
        {
            id:5,
            name:"Women's clothing",
        },
        {
            id:6,
            name:'Auto & Tires',
        }
    ];

    let [catProds,setCatProds] = useState([]);

    let products = useSelector(state=>state.products)

    let catId = param.category;

    useEffect(()=>{
        let catProdsArr = [];
        products.forEach(element => {
            if (element.categoryId == catId){
                catProdsArr.push(element)
            }
        });

        setCatProds([...catProdsArr])

    },[])

    let id=0;

    return (
        <div>
            <h2>{categories.find(category => category.id == catId).name}</h2>
            
            <div className="categoryProducts productsCont">
                {
                    catProds.length?
                    catProds.map((product)=>(
                        <Product key={id++} product={product}/>
                    ))
                    :
                    <div>
                        <p>Sorry, We don't have any products of this category yet</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default CategoryPage
