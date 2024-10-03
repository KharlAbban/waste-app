import React from 'react';
import './SdgLoginScreen.css';
import { useNavigate } from 'react-router-dom';
import CustomTextButton from './CustomTextButton';  // Ensure these components are correctly imported
import CustomTextfield from './CustomTextfield';
import SdgButton from './SdgButton';

const SdgLoginScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="login-screen">
      <div className="login-image-container">
        <img src="assets/new.png" alt="Background" className="login-image" />
      </div>

      <div className="login-overlay">
        <div className="login-header">
          <img src="assets/logo2.svg" alt="Logo" className="login-logo" />
          <div className="login-title-container">
            <h1 className="login-title">SUSTAINABLE<br />CITY</h1>
          </div>
        </div>

        <div className="login-form">
          <div className="avatar-container">
            <div className="circle-avatar">
              <i className="fas fa-user-circle avatar-icon"></i>
            </div>
          </div>

          <h2 className="login-heading">LOG IN</h2>

          <CustomTextfield
            hinttext="Email"
            prefixicon={<i className="fas fa-user"></i>}
            obscureText={false}
          />
          <CustomTextfield
            hinttext="Password"
            obscureText={true}
            prefixicon={<i className="fas fa-lock"></i>}
          />

          <div className="forgot-password">
            <p>Forgot Password</p>
          </div>

          <SdgButton btnname="LOG IN" onTap={() => {}} colour="#1A237E" />

          <div className="signup-link">
            <p>Don't have Account?</p>
            <CustomTextButton
              text="Create Now"
              ontap={() => navigate('/signup')}
              colour="white"
              fontsize={16}
              fontweight="600"
            />
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
