import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SdgLoginScreen.css'; // Assuming you use external CSS or inline styles
import CustomButton from './CustomButton'; // Import your button component
import CustomTextField from './CustomTextField'; // Import your text field component
import CustomTextButton from './CustomTextButton'; // Import your text button component
import SdgSignUpScreen from './SdgSignUpScreen'; // Assuming you have a signup screen component

const SdgLoginScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="login-page">
//Put image here
      <div className="background-image">
        <img src="assets/new.png" alt="background" className="bg-img" />
      </div>
      
      <div className="overlay">
        <div className="logo-section">
          <img src="assets/logo2.svg" alt="logo" className="logo-img" />
          <h1 className="logo-text">SUSTAINABLE<br />CITY</h1>
        </div>
        
        <div className="login-container">
          <div className="avatar-section">
            <div className="circle-avatar">
              <i className="person-icon">👤</i> {/* Replace with icon library */}
            </div>
          </div>
          
          <h1 className="login-title">LOG IN</h1>
          
          <CustomTextField 
            hinttext="Email" 
            prefixicon={<i className="icon-person">👤</i>} // Replace with icon library
            obscureText={false} 
          />
          
          <CustomTextField 
            hinttext="Password" 
            prefixicon={<i className="icon-lock">🔒</i>} // Replace with icon library
            obscureText={true} 
          />
          
          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>

          <CustomButton 
            btnname="LOG IN" 
            onTap={() => {}} 
            colour="#1A237E"
          />
          
          <div className="signup-section">
            <p>Don't have Account? 
              <CustomTextButton 
                text="Create Now" 
                ontap={() => navigate('/signup')} // Route to the sign-up page
                colour="#fff"
                fontsize={16}
                fontweight="600"
              />
            </p>
          </div>

          <div className="footer">
            <p>DataSphere</p>
            <p>Koforidua Technical University</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SdgLoginScreen;
