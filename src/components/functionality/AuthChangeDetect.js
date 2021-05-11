import React from 'react'
import firebase from 'firebase'
import {useEffect} from 'react';

import { useDispatch,useSelector} from 'react-redux'
import { doLogin, loadedAuth, loadedOrders, loadOrders, updateOrders } from '../../actions'

function AuthChangeDetect() {

    var auth = useSelector(state=>state.auth)

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
            if (user) {
                
                dispatch(doLogin(user))
                auth={auth:user,isLoggedIn:true}

                // get orders from firebase
                dispatch(loadOrders)
                firebase.firestore().collection('orders').doc(user.uid).get().then(doc=> {
                    console.log(doc)
                    console.log(doc.data())
                    if(doc.data()){
                        
                        dispatch(updateOrders(doc.data()))
                        dispatch(loadedOrders())
                    }else{
                        console.log("no data online")
                        dispatch(loadedOrders())
                    }
                });

                firebase.firestore().collection('orders').doc(user.uid).onSnapshot(snapshot=>{
                    console.log('snap')
                    console.log(auth)
                    if(auth.isLoggedIn){
                        
                        console.log(snapshot)
                        console.log(snapshot.data())
                        
                        if(snapshot.data()){
                            dispatch(updateOrders(snapshot.data()))
                        }
                    }
                    
                })
                console.log("ll")
                
            }
            else{
                auth={auth:null,isLoggedIn:false}
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
