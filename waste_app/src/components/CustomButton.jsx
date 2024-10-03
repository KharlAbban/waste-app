// import React from 'react';

// const CustomButton = ({ btnname, onTap }) => {
//   return (
//     <div
//       onClick={onTap}
//       style={{
//         width: '50%',
//         height: '50px',
//         borderRadius: '20px',
//         backgroundColor: '#66BB6A', // Corresponding to Colors.greenAccent.shade400
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         cursor: 'pointer',
//         boxShadow: '3px 3px 10px rgba(173, 216, 230, 1)', // Corresponding to Shadow
//       }}
//     >
//       <span
//         style={{
//           color: 'white',
//           fontSize: '16px',
//           fontWeight: 'bold',
//           letterSpacing: '0.5px',
//           wordSpacing: '1px',
//         }}
//       >
//         {btnname}
//       </span>
//     </div>
//   );
// };

// export default CustomButton;





import React from 'react';
import './CustomButton.css';

const CustomButton = ({ btnName, onTap }) => {
  return (
    <div className="custom-button" onClick={onTap}>
      <span className="button-text">{btnName}</span>
    </div>
  );
};

export default CustomButton;
