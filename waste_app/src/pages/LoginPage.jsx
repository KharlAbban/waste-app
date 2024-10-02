import React from 'react';
import { GoogleFontLoader } from 'react-google-font-loader';
import { ReactComponent as Logo } from './assets/logo.svg'; // Assuming svg is imported
import CustomButton from './components/CustomButton';
import CustomTextButton from './components/CustomTextButton';
import CustomTextField from './components/CustomTextField';
import './LoginPage.css'; // Add any necessary CSS here

const LoginPage = () => {
  return (
    <div className="login-page">
      {/* Background Image */}
      <div className="background-image">
        <img src="/assets/recycle.png" alt="background" />
      </div>

      {/* Overlay */}
      <div className="overlay">
        {/* Top Row with Logo and Title */}
        <div className="header">
          <Logo width={100} height={100} fill="green" />
          <div className="title">
            <span>WASTE</span>
            <br />
            <span>MANAGEMENT</span>
            <br />
            <span>SYSTEM</span>
          </div>
        </div>
      </div>

      {/* Login Form on the Right */}
      <div className="login-form">
        <div className="form-container">
          {/* Avatar */}
          <div className="avatar">
            <div className="avatar-icon">
              <i className="fas fa-user-circle" style={{ fontSize: 128, color: 'green' }}></i>
            </div>
          </div>

          {/* Login Text */}
          <h1 className="login-title" style={{ fontFamily: 'Poppins, sans-serif' }}>LOG IN</h1>

          {/* Email TextField */}
          <CustomTextField
            hinttext="Email"
            prefixicon={<i className="fas fa-user" style={{ color: 'green' }}></i>}
            obscureText={false}
          />

          {/* Password TextField */}
          <CustomTextField
            hinttext="Password"
            prefixicon={<i className="fas fa-lock" style={{ color: 'green' }}></i>}
            obscureText={true}
          />

          {/* Forgot Password */}
          <div className="forgot-password">
            <a href="/forgot-password" style={{ color: 'white', fontWeight: '600' }}>Forgot Password</a>
          </div>

          {/* Login Button */}
          <CustomButton btnname="LOG IN" onTap={() => console.log('Login clicked')} />

          {/* Create Account */}
          <div className="create-account">
            <span style={{ fontFamily: 'Poppins, sans-serif', color: 'white' }}>Don't have an account? </span>
            <CustomTextButton
              text="Create Now"
              ontap={() => console.log('Create Now clicked')}
              colour="white"
              fontsize={16}
              fontweight={600}
            />
          </div>

          {/* Footer */}
          <div className="footer">
            <p style={{ color: 'white', fontSize: '18px' }}>DataSphere</p>
            <p style={{ color: 'white' }}>Koforidua Technical University</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
