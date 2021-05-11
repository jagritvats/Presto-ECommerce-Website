import React,{useState,useEffect} from 'react'
import Product from './layout/Product';

import {useParams} from 'react-router-dom';

import {useSelector} from 'react-redux';

function Search() {

    
    let param = useParams();
    let str = param.query;
    let items = useSelector(state=>state.products.filter(product => product.name.toLowerCase().search(str.toLowerCase())>=0 ))

    let id = 1;

    return (
        <div>
            <div className="results productsCont" style={{
                display:'flex',
                justifyContent:'center',
                padding:'0em 1em'
            }}>

                {
                    items.length>0
                    ?
                    items.map((product)=>(
                        <Product product={product} key={id++} style = {{width:'25%'}}/>
                    ))
                    :
                    <div>
                        <p>Sorry, no such products exist</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default Search
