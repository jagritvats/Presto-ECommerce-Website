import React from 'react'

import {useEffect} from 'react';

import { useDispatch} from 'react-redux'
import { doLogin } from '../../actions'

function AuthChangeDetect() {
    const dispatch = useDispatch();
    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            console.log(user)
            if (user) {
                dispatch(doLogin(user))
            }
        })
    }, [])
    return (
        <> 
        </>
    )
}

export default AuthChangeDetect
