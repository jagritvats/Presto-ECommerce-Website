import firebase from 'firebase'

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

export const lgout = () => {
    return dispatch => {
  
      firebase.auth()
        .signOut()
        .then(res => {
          dispatch(doLogout());
        })
        .catch(err => {
          console.log(err);
        });
    };
};