import React from 'react';

const CustomTextButton = ({ text, onTap, color, fontSize, fontWeight }) => {
  return (
    <span onClick={onTap} style={{ color, fontSize, fontWeight, cursor: 'pointer' }}>
      {text}
    </span>
  );
};

export default CustomTextButton;
