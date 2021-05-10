import React from "react";
import firebase from 'firebase'
import registerImg from "../../images/account/register.svg";

const Register = ({ setLogin }) => {

  const register = (e) =>{
    e.preventDefault();
    var email = document.getElementById("remail").value;
    var password = document.getElementById("rpassword").value;
    var username = document.getElementById("rusername").value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {

        var user = userCredential.user;
        console.log(user)

        var user = firebase.auth().currentUser;
        user.updateProfile({
          displayName: username
        }).then(function() {
          console.log("updated")
          alert("Registered!")
        }).catch(function(error) {
          alert("Error in Username")
        });
  
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage)
      });


  }

  return (
    <form className="base-container">

      <div className="header">Register</div>

      <div className="content">
        <div className="image">
          <img src={registerImg} />
        </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="username" id="rusername"/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" placeholder="email" id="remail"/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="password" id="rpassword"/>
          </div>
        </div>
      </div>
      
      <div className="footer">
        <button type="submit" className="btn2 btn" onClick={(e)=>{register(e)}}>Register</button>
        <button type="button" className="btn2 btn switchBtn" onClick={() => { setLogin(true) }}>Sign In</button>
      </div>

    </form>
  )
}

export default Register
