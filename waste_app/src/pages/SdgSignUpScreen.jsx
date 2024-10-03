import React from 'react';
import './SdgSignUpScreen.css'; // Include your CSS file or use inline styles
import googleIcon from 'path/to/google.png';
import connectIcon from 'path/to/connect.png';
import appleIcon from 'path/to/apple.png';
import logo from 'path/to/logo2.svg';
import CustomTextBox from './CustomTextBox'; // Your CustomTextBox Component
import CustomPassword from './CustomPassword'; // Your CustomPassword Component
import SdgButton from './SdgButton'; // Your Custom Button Component
import ImagedButtons from './ImagedButtons'; // Your Image Button Component

const SdgSignUpScreen = () => {
  return (
    <div className="sign-up-screen">
      {/* Background Image */}
      <img className="background-img" src="path/to/new.png" alt="Background" />

      {/* Overlay */}
      <div className="overlay">
        <div className="header">
          <img src={logo} alt="Logo" className="logo" />
          <div className="header-text">
            <h1>SUSTAINABLE<br />CITY</h1>
          </div>
        </div>

        <div className="form-container">
          <div className="form-box">
            <h1 className="form-title">Sign Up</h1>

            {/* Form Inputs */}
            <div className="input-row">
              <CustomTextBox hintText="Firstname" />
              <CustomTextBox hintText="Lastname" />
            </div>
            <div className="input-row">
              <CustomTextBox hintText="Username" />
              <CustomTextBox hintText="Telephone" />
            </div>
            <div className="input-row">
              <CustomPassword hintText="Password" />
              <CustomPassword hintText="Repeat Password" />
            </div>

            {/* Button */}
            <div className="button-container">
              <SdgButton btnName="CREATE ACCOUNT" onClick={() => {}} color="#1A237E" />
            </div>

            {/* Divider and Login Options */}
            <div className="login-divider">
              <hr />
              <span>Log In Using</span>
              <hr />
            </div>

            {/* Social Media Buttons */}
            <div className="social-buttons">
              <ImagedButtons imgName={googleIcon} onClick={() => {}} text="Google" />
              <ImagedButtons imgName={connectIcon} onClick={() => {}} text="Connect" />
              <ImagedButtons imgName={appleIcon} onClick={() => {}} text="Apple" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SdgSignUpScreen;
