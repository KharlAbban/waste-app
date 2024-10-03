import React from 'react';

const SdgButton = ({ btnName, onClick, color }) => {
  return (
    <div
      onClick={onClick}
      style={{
        width: '30%', // Equivalent to MediaQuery width percentage
        height: '50px',
        backgroundColor: 'white',
        borderRadius: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
      }}
    >
      <span
        style={{
          color: '#1A237E',
          fontSize: '18px',
          fontWeight: 600,
          wordSpacing: '1px',
          letterSpacing: '0.5px'
        }}
      >
        {btnName}
      </span>
    </div>
  );
};

export default SdgButton;
