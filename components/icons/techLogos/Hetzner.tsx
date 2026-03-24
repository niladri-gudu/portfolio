import { SVGProps } from "react";

export const Hetzner = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 374 374"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Red Circle Background */}
    <path
      fill="#d50c2d"
      d="M187 0C83.7 0 0 83.7 0 187s83.7 187 187 187 187-83.7 187-187S290.3 0 187 0z"
    />
    {/* White 'H' Symbol */}
    <path
      fill="#ffffff"
      d="M280.6 86.3h-28.1c-6.3 0-9 2.6-9 9.1v71.3H131.4V95.4c0-6.3-2.6-9.1-9-9.1H94.1c-6.4 0-9 2.6-9 9.1v183.4c0 6.4 2.6 9 9 9h28.3c6.3 0 9-2.5 9-9v-72.5h112.1v72.5c0 6.3 2.6 9 9 9h28.1c6.3 0 9-2.6 9-9.1V95.4c-.2-6.2-2.8-9.1-6.1-9.1z"
    />
  </svg>
);