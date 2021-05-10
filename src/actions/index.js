export const addCart = (product) => {
    return {
        type:"ADD_TO_CART",
        payload:{product}
    }
}

export const doLogin = () => {
    return {
        type:"LOGIN"
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

export const increaseByOne = (product) => {
    return{
        type:'INCREASE_BY_ONE',
        payload:{
            product
        }
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