import * as React from 'react';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" {...props}>
      <circle cx={200} cy={200} r={200} fill="#1d9bf0" data-name="Dark Blue" />
      <path
        d="M163.41 305.49c88.68 0 137.18-73.47 137.18-137.18q0-3.12-.14-6.23a98.24 98.24 0 0024.05-25 96.64 96.64 0 01-27.69 7.59A48.37 48.37 0 00318 118a96.63 96.63 0 01-30.61 11.7 48.24 48.24 0 00-82.16 44 136.86 136.86 0 01-99.38-50.37 48.25 48.25 0 0014.92 64.36 47.77 47.77 0 01-21.84-6v.62a48.24 48.24 0 0038.69 47.26 48.09 48.09 0 01-21.78.83 48.29 48.29 0 0045 33.49A96.74 96.74 0 01101 284.5a99.21 99.21 0 01-11.5-.66 136.53 136.53 0 0073.91 21.65"
        fill="#fff"
        data-name="Logo \u2014 FIXED"
      />
    </svg>
  );
}

export default SvgComponent;
