import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OrangeLine = ({ strokeWidth = 6, triggerRef = null, scrollLength = 3000, scrub = 1.5 }) => {
  const pathRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const length = path.getTotalLength();
    // set initial dash
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
    path.style.visibility = "visible";

    // determine trigger element
    const triggerEl = (triggerRef && triggerRef.current) || wrapperRef.current || path;

    const endSetting = typeof scrollLength === "number" && !isNaN(scrollLength)
      ? "+=" + scrollLength
      : "bottom center";

    const st = ScrollTrigger.create({
      trigger: triggerEl,
      start: "top center",
      end: endSetting,
      scrub: scrub,
    });

    const tween = gsap.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: st,
    });

    return () => {
      try {
        tween.kill();
        st.kill();
      } catch (e) {}
    };
  }, [triggerRef]);

  return (
    <Box
      ref={wrapperRef}
      sx={{ width: "50%", height: "100%", display: "flex", alignItems: "flex-start" }}
    >
      <svg
        width="326"
        height="384"
        viewBox="0 0 326 384"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: "visible" }}
      >
        <path
          ref={pathRef}
          d="M320.5 38.3274L320.5 6.32743L173.171 50.0763L173.171 319.327L5.00001 377.328L5.00001 339.328"
          stroke="#F28737"
          strokeWidth={strokeWidth}
          style={{ visibility: "hidden" }}
        />
      </svg>
    </Box>
  );
};

export default OrangeLine;
