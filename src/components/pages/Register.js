import React from "react";
// import loginImg from "../../images/account/login.svg";
import registerImg from "../../images/account/register.svg";

const Register = ({setLogin}) => {
  return (
    <div className="base-container">
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={registerImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
        <button type="button" className="btn">Register</button>
        <button type="button" className="btn" onClick={()=>{setLogin(true)}}>Sign In</button>
          
        </div>
      </div>
  )
}

export default Register