const initorders = {orders:[],isLoaded:false}

const orderReducer = (state=initorders,action)=>{
    switch(action.type){
        case "UPDATE_ORDERS":
            return {...state, orders:[...action.payload.orders.orders]}
        case "LOAD_ORDERS":
            return {...state,isLoaded:false}
        case "LOADED_ORDERS":
            return {...state,isLoaded:true}
        case "RESET":
            return {...state,orders:[],isLoaded:false}
        default:
            return state
    }
}


export default orderReducer ;