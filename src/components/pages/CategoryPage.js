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
        },
        {
            id:7,
            name:"Men's Clothing",
        },
        {
            id:8,
            name:'Home',
        },
        {
            id:9,
            name:'Outdoors',
        },
        {
            id:10,
            name:'Food',
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
    const cc = categories.find(category => category.id == catId); // current Category
    


    return (
        <div>
            {
                cc?
                    <>
                        <h2>{cc.name}</h2>
                    
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
                    </>
                :
                    <div><p>This Category Doesn't Exist</p></div>
            }
        </div>    
    )
}

export default CategoryPage
