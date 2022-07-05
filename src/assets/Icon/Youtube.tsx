import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 163.3 114.3"
      xmlSpace="preserve"
      {...props}
    >
      <path d="M159.9 17.8c-1.9-7-7.4-12.6-14.4-14.4C132.7 0 81.6 0 81.6 0s-51 0-63.8 3.4c-7 1.9-12.6 7.4-14.4 14.4C0 30.6 0 57.2 0 57.2s0 26.6 3.4 39.3c1.9 7 7.4 12.6 14.4 14.4 12.7 3.4 63.8 3.4 63.8 3.4s51.1 0 63.8-3.4c7-1.9 12.6-7.4 14.4-14.4 3.4-12.7 3.4-39.3 3.4-39.3s.1-26.6-3.3-39.4zM65.3 81.6V32.7l42.4 24.4-42.4 24.5z" />
    </svg>
  );
}

export default SvgComponent;
