'use client'

import { motion } from "framer-motion";
import { useInView } from "motion/react"
import { useRef } from "react";

import styles  from "./boxSection.module.css"
import { cn } from "@/lib/utils";

const CHILD_VARIANTS_SCALE = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0.1 }
};
const CHILD_VARIANTS_LEFT = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, x: -500 }
};


interface Props {
className:string,
full?: boolean,
half?: boolean,
once?: boolean,
animation?: string,
children: React.ReactNode
}

  const vari:{[key:string]:any} = {
  "scale": CHILD_VARIANTS_SCALE,
  "left": CHILD_VARIANTS_LEFT
  }

export const BoxSection = ({
  className,
  full = false,
  half = false,
  once = false,
  animation = "scale",
  children
}:Props) => {

  const ref = useRef(null)
  const inView = useInView(ref,{once: once})
  console.log(inView)

  return (
    <div
      ref={ref}
      style={{
        height: full ? "100vh" : half ? "50vh" : 120,
      }}
      className={cn(styles.snap_child_center,className)}
    >
      <motion.div
        // style={{
        //   backgroundColor: "white",
        //   zIndex: 40
        // }}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={vari[animation]}
      >
        
          {children}
      </motion.div>
    </div>
  );
};
