// if using authetication, when we bring cart then we have to update products cart prop
const cartReducer = (state=[],action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
            //check if already in cart

            for(var i=0;i<state.length;i++){
                if(state[i].prodId == action.payload.product.prodId){
                    // then we need to just increment the quantity
                    console.log("this")
                    return state.slice(0,i)
                           .concat({
                               ...state[i],
                               quantity:state[i].quantity+1
                           })
                           .concat(state.slice(i+1))
                }
            }

            console.log("that")
            return [...state,{...action.payload.product,quantity:1}]
        case 'REMOVE_FROM_CART':
            console.log("removing")
            console.log(state)
            return [...state.filter(prod=>prod.prodId!=action.payload.id)]


        default:
            return state
    }
}


export default cartReducer ;

