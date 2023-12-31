import React from 'react'
import './index.css'
import LoginButton from "../buttons/loginButton";
import RegisterButton from "../buttons/registerButton";
const Crown = () =>{
    //if user logged: remove login/register -> add userButton
    return (
        <div className="crown">
            <div className="crown_logo">
                <div style={{width:"200px",height:"32px", backgroundColor:"lightgreen"}}/>
            </div>
            <div className="crown_account">
                <LoginButton/>
                <RegisterButton/>
            </div>
        </div>
    )
}

export default Crown