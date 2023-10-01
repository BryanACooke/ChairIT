import './App.css';
import landingBackground from './assets/landingBackgroundImage.png';
import logo from './assets/hhLogo.png';
import frontPageImage from './assets/imageFrontPage.png';
import {Link} from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <div className="centralTextContainer">
        </div>      
        
    <div className="mainContainer">
    

    <div className="centerContainer">

      <div className="centerTextHolder">
        <h1 className="mainText"> Chair I.T is a furniture quality  checker for your donations.  </h1>

      </div>

    <div className="buttonContainer">
      <div className="getStartedButton">
      <Link to="/DonationInformation"><h1 className="innerButtonFont">Donate</h1></Link>
      </div>
      
      <div className="getStartedButton">
     <Link to="/VolunteerRate"> <h1 className="innerButtonFont">E-Volunteer</h1></Link>

      </div>

      
    </div>
    <div className="addImage">
        <img className="frontPageImage" src={frontPageImage} alt="logo" />
      </div>


    </div>

    <img className="backgroundImage" src={landingBackground} alt="landing background image" />


    </div>












    </div>
  );
}

export default App;
