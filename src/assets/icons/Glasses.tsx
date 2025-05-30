import React from "react";

// Типизация для пропсов
interface GlassesProps {
  width?: string | number;
  height?: string | number;
  className?: string;
  style?: React.CSSProperties;
}

export const Glasses: React.FC<GlassesProps> = ({
  width,
  height,
  className,
  style,
}) => {
  return (
    <svg
      width={width}
      height={height}
      fill="#000000"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      className={className} // Применяется переданный className
      style={style} // Применяется переданный объект стилей
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g>
          <path d="M119.899,114.585l-43.896,94.133c-7.877,16.892-8.704,35.84-2.33,53.354c5.495,15.097,15.782,27.559,29.334,35.759 l-33.739,72.355L0,385.48l115.538,53.876L83.23,377.427l34.024-72.964c7.225,2.441,14.718,3.67,22.233,3.67 c8.072,0,16.169-1.414,23.981-4.258c17.567-6.394,31.595-19.247,39.496-36.191l43.803-93.939L119.899,114.585z M48.658,390.83 l21.378-4.72l10.126,19.41L48.658,390.83z M188.722,261.041c-12.649,27.124-45.008,38.899-72.14,26.248l-0.194-0.09 c-13.083-6.104-23.008-16.937-27.947-30.503c-4.939-13.57-4.298-28.25,1.805-41.337l37.253-79.891l98.384,45.877L188.722,261.041z "></path>
        </g>
        <g>
          <path d="M168.632,245.524c-4.022,8.627-11.164,15.171-20.109,18.427c-8.943,3.255-18.621,2.833-27.248-1.189l-0.137-0.064 l-6.643,14.242l0.137,0.065c6.904,3.219,14.275,4.838,21.672,4.838c5.922,0,11.863-1.038,17.594-3.124 c12.89-4.692,23.181-14.122,28.978-26.553L168.632,245.524z"></path>
        </g>
        <g>
          <rect x="106.842" y="201.393" width="92.195" height="15.715"></rect>
        </g>
        <g>
          <path d="M390.863,262.698l-0.137,0.064c-17.808,8.304-39.052,0.572-47.359-17.237l-14.242,6.642 c8.704,18.663,27.267,29.646,46.619,29.646c7.256,0,14.626-1.545,21.624-4.809l0.137-0.064L390.863,262.698z"></path>
        </g>
        <g>
          <path d="M512,385.48l-69.269-15.294l-33.739-72.355c13.552-8.2,23.84-20.663,29.334-35.76c6.375-17.514,5.547-36.462-2.33-53.354 l-43.893-94.134l-126.87,59.16l43.804,93.939c7.901,16.944,21.928,29.797,39.495,36.191c7.813,2.843,15.908,4.258,23.982,4.258 c7.513,0,15.007-1.23,22.232-3.67l34.024,72.965l-32.307,61.929L512,385.48z M395.408,287.294 c-13.139,6.128-27.88,6.77-41.502,1.812c-13.624-4.959-24.502-14.926-30.629-28.065l-37.162-79.696l98.384-45.878l37.254,79.892 c6.103,13.088,6.743,27.768,1.805,41.337c-4.939,13.569-14.865,24.402-27.953,30.505L395.408,287.294z M441.964,386.11 l21.377,4.72l-31.501,14.689L441.964,386.11z"></path>
        </g>
        <g>
          <rect x="313.234" y="201.393" width="91.148" height="15.715"></rect>
        </g>
        <g>
          <rect x="246.707" y="72.644" width="15.715" height="35.621"></rect>
        </g>
        <g>
          <rect
            x="191.604"
            y="95.466"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -21.7627 174.2529)"
            width="15.715"
            height="35.862"
          ></rect>
        </g>
        <g>
          <rect
            x="291.741"
            y="105.535"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 10.5187 252.1794)"
            width="35.851"
            height="15.715"
          ></rect>
        </g>
      </g>
    </svg>
  );
};
