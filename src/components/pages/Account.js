import React, { useState , useEffect} from "react";
import "./Account.css";
import Login from "./Login"
import Register from "./Register"
import "./loginRegister.css"

import { useSelector, useDispatch } from 'react-redux'

import {doLogin, doLogout, lgout} from '../../actions'

const Account = () => {
    const [login, setLogin] = useState(true)

    let dispatch = useDispatch();

    let [authObj,setauthObj] = useState(null);

    useEffect(()=>{
        auth.onAuthStateChanged(user =>{
            setauthObj(user)
            console.log(user)
            if(user){
                dispatch(doLogin)
            }else{
                console.log("ww")
                dispatch(doLogout)
            }
        })
    },[])

    return (
        <div id="accountPage">
            {
                authObj?
                    <div className="profile">
                        <p>{authObj.displayName}</p>
                        <p>{authObj.email}</p>
                        <button onClick={()=>{
                            // auth.signOut().then(()=>{
                            //     console.log("done")
                            // }).catch((error)=>{
                            //     console.log(error)
                            // })

                            dispatch(lgout())
                            
                            // dispatch(doLogout)
                            }}>Signout</button>
                    </div>
                :
               <div id="log_Res_Detail">
                {login ? <Login setLogin={setLogin} /> : <Register setLogin={setLogin} />}
            </div> 
            }
            

        </div>
    )
}



export default Account
