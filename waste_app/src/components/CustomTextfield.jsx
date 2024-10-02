import React from 'react';

const CustomTextField = ({ hinttext, obscureText, prefixicon }) => {
  return (
    <div style={{ padding: '10px 20px' }}>
      <div
        style={{
          width: '20%',
          height: '40px',
          backgroundColor: 'white',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {prefixicon}
        <input
          type={obscureText ? 'password' : 'text'}
          placeholder={hinttext}
          style={{
            flex: 1,
            height: '100%',
            border: 'none',
            borderRadius: '10px',
            padding: '0 10px',
            outline: 'none',
            border: '1px solid white',
          }}
          onFocus={(e) => (e.target.style.border = '1px solid #66BB6A')} // Corresponding to focused border
          onBlur={(e) => (e.target.style.border = '1px solid white')} // Resetting the border
        />
      </div>
    </div>
  );
};

export default CustomTextField;
