import React from 'react'
import firebase from 'firebase'

function SignOutButton() {
    return (
        <button className="signoutBtn" onClick={() => {
            firebase.auth().signOut();
        }}>Sign Out</button>
    )
}

export default SignOutButton
