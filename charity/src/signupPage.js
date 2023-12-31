import './signUpPage.css';
import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom"
import {Link} from 'react-router-dom'

function SignInPage(){
    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const Login = () => {
        const data = {Email,password}
        console.log(data)
        fetch("/login", {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((ress) => 
        ress.json().then((returned) => {
          console.log(returned);
          console.log(returned.Status);
          if (returned.Status == true){
            navigate("/");
          }
        })
        );
    }

    return(
        <div className="backgroundColor signUpPageHome">
            <h1 className="personalInfoTitle">Personal Info</h1>

        <div className="formInputDiv">
<form className="formInput" >

    <input className="inputFormName" onChange={e => setEmail(e.target.value)} placeholder="Enter Email" type="text" name="enterEmail" />
    <input className="inputFormName"  onChange={e => setPassword(e.target.value)} placeholder="Enter Password" type="password" name="enterPassword" />
    <input className="continueButton continueButtonMoreStyle" type="button" value="Continue" onClick={Login}/>
</form>

</div>
        </div>
    );

}

export default SignInPage;
