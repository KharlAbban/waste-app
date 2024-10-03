import React from 'react';

const CustomText = ({ text, onClick, color, fontSize, fontWeight }) => {
  return (
    <span
      onClick={onClick}
      style={{
        color: color,
        fontSize: `${fontSize}px`,
        fontWeight: fontWeight,
        cursor: 'pointer' // Mimics GestureDetector for clicking
      }}
    >
      {text}
    </span>
  );
};

export default CustomText;
