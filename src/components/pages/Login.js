import React from "react";
import loginImg from "../../images/account/login.svg";


export const Login = ({setLogin}) => {
  return (
    <div className="base-container">
      <div className="header">Login</div>
      <div className="content">
        <div className="image">
          <img src={loginImg} />
        </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="password" />
          </div>
        </div>
      </div>
      <div className="footer">
      <button type="button" className="btn">Login</button>
        <button type="button" className="btn" onClick={()=>{setLogin(false)}}>Create Account</button>
        
      </div>
    </div>
  )
}




export default Login


