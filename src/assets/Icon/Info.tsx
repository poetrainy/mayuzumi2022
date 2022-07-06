import * as React from 'react';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 128 256"
      xmlSpace="preserve"
      {...props}
    >
      <circle cx={64} cy={32} r={32} />
      <path d="M104 256H24c-13.2 0-24-10.7-24-24s10.8-24 24-24h16v-64h-8c-13.2 0-24-10.8-24-24s10.8-24 24-24h32c13.2 0 24 10.8 24 24v88h16c13.2 0 24 10.8 24 24s-10.7 24-24 24z" />
    </svg>
  );
}

export default SvgComponent;
