import React from "react";

const OrangeLine = ({ strokeWidth = 6 }) => {
  return (
    <svg
      viewBox="0 0 300 300"
      preserveAspectRatio="none"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "50%",
        height: "100%",
        zIndex: 9999,
        pointerEvents: "none",
      }}
    >
      <polyline
        points="0,290 0,300 150,250 150,50 300,0 300,10"
        fill="none"
        stroke="#f77f00"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        <animate
          attributeName="stroke-dasharray"
          from="0,1000"
          to="1000,0"
          dur="1.5s"
          fill="freeze"
        />
      </polyline>
    </svg>
  );
};

export default OrangeLine;
