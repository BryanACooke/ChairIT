import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavBar from './navbar.js';
import SignInPage from './signupPage';
import DonationInformation from './donationInfo';
import { addItemImages } from 'react-router-dom';
import AddItemImage from './addItemImages';
import DonateOrSubmit from './donateOrSubmit';
import VolunteerRate from './volunteerRate';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<Router>
    

    {/* Rendering the header component. */}
      <NavBar />
     {/* Rendering the different pages of the app. */}
     <Routes>
      <Route exact path="/" element={<App/>} />
     <Route path="/SignInPage" element={<SignInPage/>} /> 
     <Route path="/DonationInformation" element={<DonationInformation/>} />
      <Route path="/AddItemImage" element={<AddItemImage/>} />
      <Route path="/DonateOrSubmit" element={<DonateOrSubmit/>} />
      <Route path="/VolunteerRate" element={<VolunteerRate/>} />
      </Routes>
      
    
    </Router>,
      document.getElementById('root')
    );
    
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
