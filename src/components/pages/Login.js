import React from "react";
import firebase from 'firebase'
import loginImg from "../../images/account/login.svg";

import {useDispatch} from 'react-redux'
import {loadAuth, loadedAuth} from '../../actions'


export const Login = ({ setLogin }) => {

  const dispatch = useDispatch();

  const login = (e) => {
    e.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    console.log(email)
    dispatch(loadAuth())
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      //logged in
    })
    .catch((error) => {

      var errorMessage = error.message;
      alert("Enter Correct Details")
      dispatch(loadedAuth())
    });
  }

  return (
    <form className="base-container">

      <div className="header">Login</div>
      <div className="content">

        <div className="image">
          <img src={loginImg} />
        </div>

        <div className="form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="email" id="email"/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="password" id="password"/>
          </div>
        </div>
      
      </div>

      <div className="footer">
        <button type="button" className="btn2 btn" onClick={(e)=>{login(e)}}>Login</button>
        <button type="button" className="btn2 btn switchBtn" onClick={() => { setLogin(false) }}>Create Account</button>
      </div>
    </form>
  )
}




export default Login


