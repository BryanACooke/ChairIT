import './App.css';
import landingBackground from './assets/landingBackgroundImage.png';
import logo from './assets/hhLogo.png';

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
      <h1 className="innerButtonFont">Get started</h1>
      </div>
      
      <div className="getStartedButton">
      <h1 className="innerButtonFont">Learn More</h1>

      </div>
      
    </div>



    </div>

    <img className="backgroundImage" src={landingBackground} alt="landing background image" />


    </div>












    </div>
  );
}

export default App;
