'use client'

import {motion, AnimatePresence} from "motion/react"
import { useState } from "react";


export const SwitchAnimatedComponent = () => {
  const [showContent, setShowContent] = useState(false);

  // Variantes para las animaciones
  const fadeVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <button onClick={()=>setShowContent(prev=>!prev)}>CLIKC</button>
      <AnimatePresence>
        {/* Título que se desvanece */}
        {!showContent && (
          <motion.div
            key="title"
            variants={fadeVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 1 }}
            style={{ fontSize: "2rem", textAlign: "center" }}
            onAnimationComplete={() => setTimeout(() => setShowContent(true), 1000)}
          >
            Bienvenido
          </motion.div>
        )}

        {/* Contenido que aparece después */}
        {showContent && (
          <motion.div
            key="content"
            variants={fadeVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 1 }}
            style={{ fontSize: "1.5rem", textAlign: "center" }}
          >
            <p>Este es el contenido que aparece después.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SwitchAnimatedComponent;






