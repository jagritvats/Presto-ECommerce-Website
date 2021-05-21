
const initCart = sessionStorage.getItem('localCart') 
                       ? JSON.parse(sessionStorage.getItem('localCart'))
                       : []

const cartReducer = (state = initCart, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            //check if already in cart

            for (var i = 0; i < state.length; i++) {
                if (state[i].prodId == action.payload.product.prodId) {
                    // then we need to just increment the quantity
                    return state.slice(0, i)
                        .concat({
                            ...state[i],
                            quantity: state[i].quantity + 1
                        })
                        .concat(state.slice(i + 1))
                }
            }
            return [...state, { ...action.payload.product, quantity: 1 }]

        case 'REMOVE_FROM_CART':
            return [...state.filter(prod => prod.prodId != action.payload.id)]

        case 'REDUCE_BY_ONE':
            for (var i = 0; i < state.length; i++) {
                if (state[i].prodId == action.payload.product.prodId) {
                    return state.slice(0, i)
                        .concat({
                            ...state[i],
                            quantity: state[i].quantity - 1
                        })
                        .concat(state.slice(i + 1))
                }
            }
        
        case "REMOVE_ALL":
            return []
        default:
            return state
    }
}


export default cartReducer;

