const initAuth = {
    isLoggedIn:false,
}

const authReducer = (state=initAuth,action)=>{
    switch(action.type){
        case "LOGIN":
            return {
                ...state,
                isLoggedIn:true
            }
        default:
            return state
    }
}


export default authReducer ;

