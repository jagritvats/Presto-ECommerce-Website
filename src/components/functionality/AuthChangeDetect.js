import React from 'react'
import firebase from 'firebase'
import {useEffect} from 'react';

import { useDispatch} from 'react-redux'
import { doLogin,doLogout, loadedAuth, loadedOrders, loadOrders, updateOrders,resetOrders } from '../../actions'

function AuthChangeDetect() {

    // initializing firebase
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

    // all auth and firebase change listeners
    useEffect(() => {

        // on login/logout
        firebase.auth().onAuthStateChanged(user => {

            if (user) {
                dispatch(doLogin(user))
                // get orders from firebase
                dispatch(loadOrders())

                // on login getting initial data from firebase and updating the orders list
                firebase.firestore().collection('orders').doc(user.uid).get().then(doc=> {
                    if(doc.data()){
                        
                        dispatch(updateOrders(doc.data()))
                        dispatch(loadedOrders())
                    }else{
                        dispatch(loadedOrders())
                    }
                });

                firebase.firestore().collection('orders').doc(user.uid).onSnapshot(snapshot=>{

                    if(firebase.auth().currentUser){
                        
                        if(snapshot.data()){
                            dispatch(updateOrders(snapshot.data()))
                        }
                    }
                    
                })
                
            }
            else{
                // on logout
                dispatch(doLogout());
                dispatch(resetOrders())
            }
            //auth status loaded
            dispatch(loadedAuth())
        })

        
        
    }, [])
    
    return (
        <> 
        </>
    )
}

export default AuthChangeDetect
