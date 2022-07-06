import * as React from "react"

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320" {...props}>
      <defs>
        <style>{".cls-1{fill:#4cc764}"}</style>
      </defs>
      <g id="LINE_LOGO" data-name="LINE LOGO">
        <circle className="cls-1" cx={160} cy={160} r={160} />
        <path
          d="M266.7 150.68c0-47.79-47.91-86.68-106.81-86.68S53.08 102.89 53.08 150.68c0 42.85 38 78.74 89.33 85.52 3.48.75 8.21 2.29 9.41 5.27 1.07 2.7.7 6.93.34 9.65 0 0-1.25 7.54-1.52 9.15-.47 2.7-2.15 10.56 9.25 5.76s61.51-36.22 83.92-62c15.48-17.03 22.89-34.22 22.89-53.35z"
          fill="#fff"
        />
        <path
          className="cls-1"
          d="M231.17 178.28a2 2 0 002-2v-7.57a2 2 0 00-2-2h-20.39v-7.87h20.39a2 2 0 002-2v-7.58a2 2 0 00-2-2h-20.39v-7.87h20.39a2 2 0 002-2v-7.58a2 2 0 00-2-2h-30a2 2 0 00-2 2v46.39a2 2 0 002 2h30zM120.17 178.28a2 2 0 002-2v-7.57a2 2 0 00-2-2h-20.4v-37a2 2 0 00-2-2h-7.61a2 2 0 00-2 2v46.49a2 2 0 002 2h30z"
        />
        <rect
          className="cls-1"
          x={128.62}
          y={127.58}
          width={11.65}
          height={50.69}
          rx={2.04}
        />
        <path
          className="cls-1"
          d="M189.8 127.58h-7.57a2 2 0 00-2 2v27.69l-21.33-28.8a1.2 1.2 0 00-.17-.21l-.12-.12-.11-.09h-.06l-.1-.08h-.07l-.11-.06h-8.48a2 2 0 00-2 2v46.62a2 2 0 002 2h7.58a2 2 0 002-2v-27.97l21.35 28.84a2 2 0 00.53.51l.13.08h.06l.1.05h.31a2.35 2.35 0 00.54.07h7.53a2 2 0 002-2v-46.49a2 2 0 00-2.01-2.04z"
        />
      </g>
    </svg>
  )
}

export default SvgComponent