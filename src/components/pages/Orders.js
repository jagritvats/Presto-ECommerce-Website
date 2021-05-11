import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress';
import './Orders.css'

import Product from '../layout/Product'
import { removeOrder } from '../../actions';

function Orders() {

    let orders = useSelector(state=>state.orders)

    let dispatch = useDispatch();
    let products = useSelector(state=>state.products)

    let auth = useSelector(state=>state.auth)

    let id = 0;
    let id2 = 0;

    const today = new Date();

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

                                            const dateValues = order.deliveryDate.split("-")

                                            const ddd = new Date(parseInt(dateValues[2]),parseInt(dateValues[1])-1,parseInt(dateValues[0])+1)

                                            return(
                                                <div key={id++} className="order">
                                                    <p>Total Cost: $ {order.price}</p>
                                                    <p>Order ID: {order.orderId}</p>
                                                    <p>Number of Items: {order.numItems}</p>
                                                    <p>Delivery Date: {order.deliveryDate}</p>
                                                    <div className="productsOrder">
                                                        {
                                                            order.products.map((prod)=>{
                                                                const product = products.find(p => p.prodId == prod.prodId) 
                                                                return (
                                                                    <Product key={id2++} product={product} cart={false}/>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                    
                                                    {
                                                        ddd<today?
                                                            <p className="status">Delivered</p>
                                                        :
                                                            <button type="button" className="cancelBtn" onClick={()=>{
                                                                let is = confirm("Are You sure you want to cancel this order?")
                                                                if(is){

                                                                    dispatch(removeOrder(order.orderId))
                                                                }
                                                            }}>Cancel Order</button>
                                                    }
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
