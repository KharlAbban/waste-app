import React from 'react';

const CustomTextBox = ({ hintText, obscureText }) => {
  return (
    <div style={{ padding: '10px 20px' }}>
      <div
        style={{
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
            border: '1px solid white',
            borderRadius: '10px',
            padding: '0 10px',
            fontSize: '14px',
          }}
          onFocus={(e) => {
            e.target.style.border = '1px solid #00e676'; // Focus border color
          }}
          onBlur={(e) => {
            e.target.style.border = '1px solid white'; // Revert border on blur
          }}
        />
      </div>
    </div>
  );
};

export default CustomTextBox;
