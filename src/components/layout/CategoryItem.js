import React from 'react'
import './CategoryItem.css'
import { useHistory } from "react-router-dom";

function CategoryItem({category}) {
    let history = useHistory();
    return (
        <div className="categoryItem" onClick={()=>{
            history.push(`/category/${category.id}`)

        }}>
            <img src={category.img} alt=""/>
            <p>{category.name}</p>
        </div>
    )
}

export default CategoryItem
