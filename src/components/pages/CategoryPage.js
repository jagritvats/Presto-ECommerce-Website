import React from 'react'
import {useParams,Link} from 'react-router-dom'

function CategoryPage() {

    let param = useParams();
    let category = param.category;
    return (
        <div>
            Category
            <Link to="/">Home</Link>
        </div>
    )
}

export default CategoryPage
