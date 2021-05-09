import React,{useState} from "react";
import "./Account.css";
import Login from "./Login"
import Register from "./Register"
import "./loginRegister.scss"





const Account = () => {
    const [login,setLogin]=useState(true)
    return (
        <div id="accountPage">
        <div id="log_Res_Detail">
        {login?<Login  setLogin={setLogin}/>:<Register  setLogin={setLogin} />}

        </div>

           
        </div>
    )
}



export default Account
