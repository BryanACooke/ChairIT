import './signUpPage.css';



function DonationInformation(){

    
    return(
        <div className="backgroundColor signUpPageHome">
            <h1 className="personalInfoTitle">Donation Info</h1>

<div className="formInputDiv">
            <form className="formInput">
  <input className="inputFormName"  placeholder="Item Name" type="text" name="name" />
  <input className="inputFormName"  placeholder="Item Category" type="text" name="lastName" />
 <input className="inputFormName"  placeholder="Condition" type="text" name="enterEmail" />
  <input className="inputFormName"  placeholder="Time of use" type="text" name="enterPhoneNumber" />
  <input className="continueButton continueButtonMoreStyle" type="submit" value="Continue" />
</form>

</div>
        </div>
    );



}

export default DonationInformation;