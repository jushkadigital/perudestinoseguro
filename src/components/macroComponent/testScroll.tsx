'use client'
import { useScroll,motion, useMotionValueEvent } from "motion/react"
import React, { ReactNode, useRef } from "react"
import styles from "./snapScroll.module.css"
import { cn } from "@/lib/utils"

const SnapParent = React.forwardRef<any>(({ ...props }, ref) => (
  <div ref={ref} {...props} className={styles.snap_parent_y_mandatory}>
    {props.children}
  </div>
));

interface Props {
  children: React.ReactNode
}

export const TestScrollContainer = ({children}:Props)=>{
    const containerRef = useRef(null)
    const targetRef = useRef(null)

    const {scrollY,scrollYProgress} = useScroll({
        container:containerRef,
    })

    useMotionValueEvent(scrollYProgress,"change",(v)=>{
        console.log(v)
    })

    useMotionValueEvent(scrollY,"change",(v)=>{
        console.log(v)
    })
    
    console.log("AAA")
    return (
        <SnapParent
        ref={containerRef}
        style={{
          position: "absolute",
        }}

        >
        {children}

        </SnapParent>
            )

}