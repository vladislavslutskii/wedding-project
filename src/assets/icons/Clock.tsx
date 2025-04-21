import React from "react";
//   @ts-ignore
export const Clock = ({ width, height }: any) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform="rotate(0)"
      width={width}
      height={height}
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <rect width="24" height="24" fill="transparent"></rect>{" "}
        <circle
          cx="12"
          cy="12"
          r="9"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></circle>{" "}
        <path
          d="M12 6V12L16.5 16.5"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>{" "}
      </g>
    </svg>
  );
};
