import React from 'react'
import {useSelector} from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress';
import './Orders.css'

import Product from '../layout/Product'

function Orders() {

    let orders = useSelector(state=>state.orders)


    let products = useSelector(state=>state.products)

    let auth = useSelector(state=>state.auth)

    let id = 0;
    let id2 = 0;

    return (
        <div>
           <h2>Orders</h2> 

           {
               auth.isLoggedIn?
                    orders.isLoaded?
                            orders.orders.length>0?
                                <div className="orders">
                                    {
                                        orders.orders.map((order)=>{
                                            console.log(order)
                                            return(
                                                <div key={id++} className="order">
                                                    <p>Total Cost: {order.price}</p>
                                                    <p>Order ID: {order.orderId}</p>
                                                    <p>Number of Items: {order.numItems}</p>

                                                    <div className="productsOrder">
                                                        {
                                                            order.products.map((prod)=>{
                                                                const product = products.find(p => p.prodId == prod.prodId) 
                                                                return (
                                                                    <Product key={id2++} product={product}/>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>  
                                            )
                                            
                                        })
                                    }
                                </div>
                            :
                                <div>No Orders</div>
                        :
                            <CircularProgress/>
                :
                <div><p>Not Logged In</p></div>
           }
        </div>
    )
}

export default Orders
