import './signUpPage.css';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {DonationInformation} from './donationInfo.js';



function SignInPage(){
    let navigate = useNavigate();

    function submitHandler(){
        navigate('/DonationInformation')
    }


    return(
        <div className="backgroundColor signUpPageHome">
            <h1 className="personalInfoTitle">Personal Info</h1>

<div className="formInputDiv">
            <form className="formInput" onSubmit={submitHandler}>
  <input className="inputFormName"  placeholder="Enter First Name" type="text" name="name" />
  <input className="inputFormName"  placeholder="Enter Last Name" type="text" name="lastName" />
 <input className="inputFormName"  placeholder="Enter Email" type="text" name="enterEmail" />
  <input className="inputFormName"  placeholder="Enter Phone Number" type="text" name="enterPhoneNumber" />
  <input className="continueButton continueButtonMoreStyle" type="submit" value="Continue" />
</form>

</div>
        </div>
    );



}

export default SignInPage;