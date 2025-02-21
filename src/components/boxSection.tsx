'use client'

import { motion } from "framer-motion";
import { useInView } from "motion/react"
import { useRef } from "react";

import styles  from "./boxSection.module.css"
import { cn, deviceOutput } from "@/lib/utils";
import { useMobile } from "@/hooks/useMobile";
import { equal } from "assert";

const CHILD_VARIANTS_SCALE = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1.2 } },
  hidden: { opacity: 0, scale: 0.1 }
};
const CHILD_VARIANTS_LEFT = {
  visible: { opacity: 1, x: 0, transition: { duration: 1.2 } },
  hidden: { opacity: 0, x: -500 }
};

const CHILD_VARIANTS_RIGHT = {
  visible: { opacity: 1, x: 0, transition: { duration: 1.2 } },
  hidden: { opacity: 0, x: 500 }
};

interface Props {
className:string,
full?: boolean,
half?: boolean,
custom?: string,
once?: boolean,
animation?: string,
children: React.ReactNode
special?: boolean
}

  const vari:{[key:string]:any} = {
  "scale": CHILD_VARIANTS_SCALE,
  "left": CHILD_VARIANTS_LEFT,
  "right": CHILD_VARIANTS_RIGHT,
  "undefined": undefined
  }





export const BoxSection = ({
  className,
  full = false,
  half = false,
  once = false,
  custom = "",
  animation = "undefined",
  children
}:Props) => {
  const isMobile = useMobile()
  const ref = useRef(null)
  const inView = useInView(ref,{once: once, amount: "some",margin: "0px 0px -100px 0px"
})
  //console.log(inView)

 const customHeights:{[key:string]:any} = {
  "equal": deviceOutput(100,1,"vh",isMobile)
} 
  
  return (
    <div
      ref={ref}
      style={{
        height: full ? deviceOutput(100,1.5,"vh",isMobile) : half ? deviceOutput(100,0.75,"vh",isMobile) : customHeights[custom],
      }}
      
      className={cn( full ? styles.snap_child_center : styles.snap_child_start ,`${ full ? "100vh" : "50vh" } `,className)}
    >
      <motion.div
        // style={{
        //   backgroundColor: "white",
        //   zIndex: 40
        // }}
        className="h-full"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={vari[animation]}
      >
        
          {children}
      </motion.div>
    </div>
  );
};




export const BoxSectionAnim = ({
  className,
  full = false,
  half = false,
  once = false,
  animation = "undefined",
  children
}:Props) => {
  const isMobile = useMobile()
  const ref = useRef(null)
  const inView = useInView(ref,{once: once, amount: "some",margin: "0px 0px -100px 0px"
})
  //console.log(inView)

  
  
  return (
    <div
      ref={ref}
      style={{
        height: full ? deviceOutput(200,1.5,"vh",isMobile) : half ? deviceOutput(100,0.75,"vh",isMobile) : 120,
      }}
      
      className={cn( full ? styles.snap_child_center : styles.snap_child_start ,`${ full ? "100vh" : "50vh" } `,className)}
    >
      <motion.div
        // style={{
        //   backgroundColor: "white",
        //   zIndex: 40
        // }}
        className="h-full"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={vari[animation]}
      >
        
          {children}
      </motion.div>
    </div>
  );
};
