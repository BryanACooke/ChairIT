
import { Navigate, useNavigate } from 'react-router-dom';
import logo from './assets/hhLogo.png';
import SignInPage from './signupPage';
import { Link } from 'react-router-dom';


function NavBar() {

  let navigate = useNavigate();


    return (
<div className="navBar">
  
<div className="navBarHolder">
  <div className="navBarTextLogoContainer">
  <Link to ="/"> <div className="navBarLogoText">
    <div className="navBarLogo">
    <img src={logo} alt="logo" />
    </div>
      <h1 className="blueFont chairTitlePosition poppinsFont">Chair </h1>
      <h1 className="greenFont poppinsFont"> I.T.</h1>
    </div>
    </Link>
  </div> 

  <div className="rightNavbar">
    <div className="navBarLinks">
      <h2 className="greenFont"> HOW IT WORKS? </h2>
      <h2 className="greenFont"> WHO USES US? </h2>
    <div className="navBarButtons">
       <Link to ="/SignInPage"> <h2 className="greenFont"> LOG IN </h2> </Link>
        <div className="outSignUpButton">
          <h2 className="signupButtonText"> SIGN UP </h2>
        </div>
        
        </div>
    </div>
    </div>


</div>

</div>
    );
}

export default NavBar;