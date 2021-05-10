import React from 'react'
import {useDispatch} from 'react-redux'
import {lgout} from '../../actions'

function SignOutButton() {
    let dispatch = useDispatch();
    return (
        <button className="signoutBtn" onClick={() => {
            dispatch(lgout())
        }}>Sign Out</button>
    )
}

export default SignOutButton
