const initAuth = {
    isLoggedIn:false,
    authLoaded:false
}

const authReducer = (state=initAuth,action)=>{
    switch(action.type){
        case "LOGIN":
            return {
                ...state,
                auth:action.payload.auth,
                isLoggedIn:true
            }
        case "LOGOUT":
            return {
                ...state,
                auth:null,
                isLoggedIn:false
            }
        case "LOADING_AUTH":
            return{
                ...state,
                authLoaded:false
            }    
        case "LOADED_AUTH":
            return{
                ...state,
                authLoaded:true
            }
        default:
            return state
    }
}



export default authReducer ;

