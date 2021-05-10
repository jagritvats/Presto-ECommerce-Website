import React from 'react'

import {useEffect} from 'react';

import { useDispatch} from 'react-redux'
import { doLogin, loadedAuth } from '../../actions'

function AuthChangeDetect() {
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
