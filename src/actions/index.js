
export const addCart = (product) => {
    return {
        type:"ADD_TO_CART",
        payload:{product}
    }
}

export const doLogin = (auth) => {
    return {
        type:"LOGIN",
        payload:{
            auth:auth
        }
    }
}

export const doLogout = () => {
    return {
        type:"LOGOUT"
    }
}

export const removeCart = (id) => {
    return{
        type:'REMOVE_FROM_CART',
        payload:{
            id
        }
    }
}

export const reduceByOne = (product) => {
    return{
        type:'REDUCE_BY_ONE',
        payload:{
            product
        }
    }
}

export const loadAuth = () => {
    return{
        type:'LOADING_AUTH'
    }
}

export const loadedAuth = () => {
    return{
        type:'LOADED_AUTH'
    }
}
// remove all from cart
export const removeAll = () => {
    return {
        type:"REMOVE_ALL"
    }
}

export const resetOrders = () =>{
    return {
        type : "RESET"
    }
}


//orders
export const updateOrders = (orders) => {
    return{
        type:'UPDATE_ORDERS',
        payload:{orders}
    }
}

export const loadOrders = () => {
    return{
        type:'LOADING_ORDERS'
    }
}

export const loadedOrders = () => {
    return{
        type:'LOADED_ORDERS'
    }
}