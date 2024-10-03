import React from 'react';

const ImagedButtons = ({ imgName, onTap, text }) => {
  return (
    <div
      onClick={onTap}
      style={{
        display: 'flex',
        alignItems: 'center',
        borderRadius: '5px',
        backgroundColor: 'white',
        padding: '3px',
        cursor: 'pointer',
        width: '12%',
       
      }}
    >
      <img
        src={imgName}//put image here
        alt="icon"
        style={{
          width: '32px',
          height: '32px',
          marginRight: '5px',
        }}
      />
      <span
        style={{
          fontWeight: '600',
          fontSize: '18px',
        }}
      >
        {text}
      </span>
    </div>
  );
};

export default ImagedButtons;
