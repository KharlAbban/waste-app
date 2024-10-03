import React, { useState } from 'react';
import './SdgSignUpScreen.css'; // Assume that you have a separate CSS file for styling
import GoogleLogo from './assets/google.png'; //Replace with your Google logo
import AppleLogo from './assets/apple.png'; //Replace with your Apple logo
import { Dropdown } from 'react-bootstrap';

const SdgSignUpScreen = () => {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedTown, setSelectedTown] = useState('');

  const regions = ['Item1', 'Item2', 'Item3', 'Item4'];
  const towns = ['Item1', 'Item2', 'Item3', 'Item4'];

  return (
    <div className="signup-container">
      <div className="background-img">
        <img src="assets/new.png" alt="background" />
      </div>
      <div className="overlay">
        <div className="logo-section">
          <img src="assets/logo2.svg" className="logo" alt="logo" />
          <div className="logo-text">
            <p>SUSTAINABLE<br />CITY</p>
          </div>
        </div>
        <div className="form-container">
          <div className="form-card">
            <h1 className="form-title">Sign Up</h1>
            <div className="form-row">
              <input type="text" placeholder="Firstname" className="custom-input" />
              <input type="text" placeholder="Lastname" className="custom-input" />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Username" className="custom-input" />
              <input type="text" placeholder="Telephone" className="custom-input" />
            </div>
            <div className="form-row">
              <input type="password" placeholder="Password" className="custom-input" />
              <input type="password" placeholder="Repeat Password" className="custom-input" />
            </div>
            <div className="form-row">
              <Dropdown>
                <Dropdown.Toggle variant="white" className="dropdown-toggle">
                  {selectedRegion || 'Region'}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {regions.map((region, index) => (
                    <Dropdown.Item key={index} onClick={() => setSelectedRegion(region)}>
                      {region}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle variant="white" className="dropdown-toggle">
                  {selectedTown || 'Town'}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {towns.map((town, index) => (
                    <Dropdown.Item key={index} onClick={() => setSelectedTown(town)}>
                      {town}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <button className="custom-button">CREATE ACCOUNT</button>
            <div className="divider-section">
              <hr className="divider" />
              <p className="divider-text">Log In Using</p>
              <hr className="divider" />
            </div>
            <div className="social-buttons">
              <button className="image-button">
                <img src={GoogleLogo} alt="Google" />
                Google
              </button>
              <button className="image-button">
                <img src={AppleLogo} alt="Apple" />
                Apple
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SdgSignUpScreen;
