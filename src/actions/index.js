export const addCart = (product) => {
    return {
        type:"ADD_TO_CART",
        payload:{product}
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