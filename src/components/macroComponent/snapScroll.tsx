'use client'
import styles from "./snapScroll.module.css"
import { useWindowSize } from "@/hooks/useWindowsSize";
import {useScroll,useTransform,motion,useMotionValueEvent} from "motion/react"
import React, { useRef, useState } from "react";




interface Props {
children: React.ReactNode
}


const SnapParent = React.forwardRef<any>(({ ...props }, ref) => (
  <div ref={ref} {...props} className={styles.snap_parent_y_mandatory}>
    {props.children}
  </div>
));

 const SnapScrolling = ({children}:Props)=>{

  const windowSize = useWindowSize()

  const ref = useRef(null)
  const { scrollY, scrollYProgress } = useScroll()
  const pageRange = [0, 0.15, 0.3, 0.5, 0.7, 1];
  const lengthRange = ["75vh", "45vh", "50vh", "45vh", "50vh", "100vh"];
  const calcHeight = useTransform(scrollYProgress, pageRange, lengthRange)

  const [scrollYValue, setScrollYValue] = useState(0);
  const [scrollYProgressValue, setScrollYProgressValue] = useState(0)
  

  useMotionValueEvent(scrollY,"change",(v)=> setScrollYValue(v))
  useMotionValueEvent(scrollYProgress,"change",(v)=> setScrollYProgressValue(v))

  return (
    <div
    className="relative w-full h-screen"
      
    >
     
      <div
        style={{
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          zIndex: 20,
          pointerEvents: "none",
        }}
      >
      </div>
      <SnapParent
        ref={ref}
        style={{
          position: "absolute",
        }}
      >
        {children}
      </SnapParent>
    </div>
  );
  }


export default SnapScrolling;
