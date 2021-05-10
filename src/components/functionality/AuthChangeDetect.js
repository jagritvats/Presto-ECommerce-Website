import React from 'react'
import firebase from 'firebase'
import {useEffect} from 'react';

import { useDispatch} from 'react-redux'
import { doLogin, loadedAuth } from '../../actions'

function AuthChangeDetect() {

    useEffect(()=>{

        var firebaseConfig = {
          apiKey: "AIzaSyBqP8VkaO2hGReJvc6JGZnHcvzAIIycDd0",
          authDomain: "ecommerce-188e7.firebaseapp.com",
          projectId: "ecommerce-188e7",
          storageBucket: "ecommerce-188e7.appspot.com",
          messagingSenderId: "835226016419",
          appId: "1:835226016419:web:47a1adfee156ef588afd16",
          measurementId: "G-JCB25GTGET"
        };
        firebase.initializeApp(firebaseConfig);
        firebase.analytics();
    },[])

    const dispatch = useDispatch();

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            console.log(user)
            if (user) {
                
                dispatch(doLogin(user))
                
            }
            dispatch(loadedAuth())
        })
    }, [])
    
    return (
        <> 
        </>
    )
}

export default AuthChangeDetect
