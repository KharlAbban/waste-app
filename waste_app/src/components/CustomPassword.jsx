import React, { useState } from 'react';

const CustomPassword = ({ hintText }) => {
  const [obscureText, setObscureText] = useState(true);

  const togglePasswordVisibility = () => {
    setObscureText(!obscureText);
  };

  return (
    <div
      style={{
        padding: '10px 20px',
        width: '30%',
        height: '45px',
        backgroundColor: 'white',
        borderRadius: '10px',
      }}
    >
      <input
        type={obscureText ? 'password' : 'text'}
        placeholder={hintText}
        style={{
          width: '100%',
          height: '100%',
          padding: '10px',
          borderRadius: '10px',
          border: '1px solid white',
          outline: 'none',
          fontSize: '14px',
        }}
      />
      <button
        onClick={togglePasswordVisibility}
        style={{
          position: 'absolute',
          right: '20px',
          top: '10px',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        {obscureText ? '👁️' : '🙈'}
      </button>
    </div>
  );
};

export default CustomPassword;
