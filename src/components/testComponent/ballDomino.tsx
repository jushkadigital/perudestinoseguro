'use client'
import React, { useEffect, useRef } from "react"
import "./ballDominomodule.css"
import {AnimationPlaybackControls,useAnimate,useScroll,useMotionValueEvent} from "motion/react"
import { cn } from "@/lib/utils"

const SnapParent = React.forwardRef<any>(({ ...props }, ref) => (
  <div ref={ref} {...props} className="snap_parent_y_mandatory">
    {props.children}
  </div>
));

export const BallDomino = ()=>{

    const animControls = useRef<AnimationPlaybackControls>(null);

    const [scope, animate] = useAnimate()   
    const containerRef = useRef(null)
    const {scrollY,scrollYProgress} = useScroll(
      {container: containerRef }
    )
    
    useMotionValueEvent(scrollY,"change",(v)=>{
        console.log(v)
       // animControls.current!.time = v * animControls.current!.duration
    })
    /*useEffect(()=>{
        animControls.current=  animate([
            [".ball", { left: 52 }, { ease: "easeOut", duration: 0.4 }],
            [".ball", { left: 70 }, { ease: "easeOut", duration: 1.2, at: 0.401 }],
            [".domino-1", { rotate: 24 }, { duration: 0.4, ease: "easeIn", at: 0.4 }],
      
            [".domino-1", { rotate: 45 }, { duration: 0.4, ease: "easeIn", at: 0.8 }],
            [
              ".domino-2",
              { rotate: 24 },
              { duration: 0.4, ease: "easeIn", at: 0.801 }
            ],
      
            [".domino-3", { rotate: 24 }, { duration: 0.4, ease: "easeIn", at: 1.2 }],
            [
              ".domino-2",
              { rotate: 45 },
              { duration: 0.4, ease: "easeIn", at: 1.201 }
            ],
            [
              ".domino-1",
              { rotate: 58 },
              { duration: 0.4, ease: "easeIn", at: 1.201 }
            ],
      
            [".domino-4", { rotate: 90 }, { duration: 0.4, ease: "easeIn", at: 1.6 }],
            [
              ".domino-3",
              { rotate: 69 },
              { duration: 0.4, ease: "easeIn", at: 1.601 }
            ],
            [
              ".domino-2",
              { rotate: 67 },
              { duration: 0.4, ease: "easeIn", at: 1.601 }
            ],
            [
              ".domino-1",
              { rotate: 67 },
              { duration: 0.4, ease: "easeIn", at: 1.601 }
            ]
          ])
    },[])

    */
    return(
    <SnapParent
      ref={containerRef}
        style={{
          position: "absolute",
        }}
    >
        {/*<div ref={scope} className="canvas">
          <div className="ball"></div>
          <div className="domino domino-1"></div>
          <div className="domino domino-2"></div>
          <div className="domino domino-3"></div>
          <div className="domino domino-4"></div>
        </div>*/}
    </SnapParent>     
    )
}