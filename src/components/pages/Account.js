import React, { useState, useEffect } from "react";
import "./Account.css";
import Login from "./Login"
import Register from "./Register"
import "./loginRegister.css"

import { useDispatch, useSelector } from 'react-redux'


import SignOutButton from "../layout/SignOutButton";

const Account = () => {
    const [login, setLogin] = useState(true)

    let authObj = useSelector(state=>state.auth.auth)

    return (
        <div id="accountPage">
            {
                authObj ?
                    <div className="profile">
                        <table className="details">
                            <h3>Profile Details</h3>
                            <tbody>
                                <tr>
                                    <td>Name:</td>
                                    <td>{authObj.displayName}</td>
                                </tr>

                                <tr>
                                    <td>Email:</td>
                                    <td>{authObj.email}</td>
                                </tr>
                            </tbody>
                        </table>

                        <SignOutButton />
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
