import React,{useState,useEffect} from 'react'
import {useParams,Link} from 'react-router-dom'

import {useSelector} from 'react-redux'

import Product from '../layout/Product'
import './CategoryPage.css'

function CategoryPage() {

    let param = useParams();

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

    },[catProds])

    let id=0;

    return (
        <div>
            Category
            
            <div className="categoryProducts">
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
