import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 35 11"
      xmlSpace="preserve"
      {...props}
    >
      <path
        d="M34.8.8c-.4-.7-1.3-1-2-.7L17.5 7.8 2.2.2C1.5-.2.6.1.2.9c-.4.7-.1 1.6.7 2l16 8c.1 0 .1 0 .2.1h.1c.1 0 .2.1.4.1.1 0 .2 0 .4-.1h.1c.1 0 .1 0 .2-.1l16-8c.6-.4.9-1.3.5-2.1z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgComponent;
