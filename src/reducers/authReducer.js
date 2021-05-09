const initAuth = {
    isLoggedIn:false,
}

const authReducer = (state=initAuth,action)=>{
    switch(action.type){
        case "LOGIN":
            return {
                isLoggedIn:true
            }
        case "LOGOUT":
            return {
                isLoggedIn:false
            }
        default:
            return state
    }
}



export default authReducer ;

