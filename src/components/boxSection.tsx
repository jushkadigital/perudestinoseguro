'use client'

import { motion } from "framer-motion";
import { useInView } from "motion/react"
import { useRef } from "react";

import styles  from "./boxSection.module.css"
import { cn, deviceOutput } from "@/lib/utils";
import { useMobile } from "@/hooks/useMobile";

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
once?: boolean,
animation?: string,
children: React.ReactNode
}

  const vari:{[key:string]:any} = {
  "scale": CHILD_VARIANTS_SCALE,
  "left": CHILD_VARIANTS_LEFT,
  "right": CHILD_VARIANTS_RIGHT
  }



export const BoxSection = ({
  className,
  full = false,
  half = false,
  once = false,
  animation = "scale",
  children
}:Props) => {
  const isMobile = useMobile()
  const ref = useRef(null)
  const inView = useInView(ref,{once: once, amount: "some",margin: "0px 0px -100px 0px"
})
  console.log(inView)

  
  
  return (
    <div
      ref={ref}
      style={{
        height: full ? deviceOutput(100,1.5,"vh",isMobile) : half ? deviceOutput(50,1.5,"vh",isMobile) : 120,
      }}
      
      className={cn(styles.snap_child_center,`${ full ? "100vh" : "50vh" } `,className)}
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
