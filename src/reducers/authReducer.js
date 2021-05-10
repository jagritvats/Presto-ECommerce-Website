const initAuth = {
    isLoggedIn:false,
}

const authReducer = (state=initAuth,action)=>{
    switch(action.type){
        case "LOGIN":
            return {
                auth:action.payload.auth,
                isLoggedIn:true
            }
        case "LOGOUT":
            return {
                auth:null,
                isLoggedIn:false
            }
        default:
            return state
    }
}



export default authReducer ;

