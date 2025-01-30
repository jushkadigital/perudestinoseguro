'use client'
import React, { useState } from 'react';
// import './Counter.css';
import { AnimatePresence, LayoutGroup, motion } from "framer-motion"
import { ImagePopUp } from "./imagePopUp";


interface Props<T> {
  data: T[]; // Un array de cualquier tipo de datos
  renderItemDesktop: React.ComponentType<{ item: T }>; // Componente dinámico para renderizar cada item
  gridColumns: number
}


export const GalleryCarrousel = <T,>({
  data,
  renderItemDesktop: ItemComponent,
  gridColumns
}: Props<T>) => {

  // const [count, setCount] = useState(initialCount);
  const [LayoutId, setLayoutId] = useState<number | null>(null)

  const [popUp, setPopUp] = useState(false)

  const poper = (id: number, inside = false) => {
    if (popUp == false) {
      setLayoutId(id)
      setPopUp(prev => !prev)
    } else {
      if (inside) {
        setLayoutId(id)
      } else {
        setPopUp(prev => !prev)
        setLayoutId(null)
      }
    }
  }


  // console.log("GAA")
  // console.log(data)
  // const newChildren = React.Children.forEach(data , child => console.log(child.props.value))
  // console.log(newChildren)


  return (
    <div className=" h-full w-full flex flex-row justify-center mt-6">

      <LayoutGroup>
        
          <div className={`grid grid-cols-${gridColumns} gap-y-3 gap-x-10 w-full`}>
            {data.map((ele, idx) => (<motion.div  key={idx} className={`relative  rounded-2xl  max-h-max shrink-0 overflow-hidden`} onClick={() => poper(idx)} >
              
              <ItemComponent item={ele}/>
            </motion.div>))}
          </div>
        
        <div className="popUp">
          <AnimatePresence>
            {popUp && <ImagePopUp poper={poper} LayoutId={LayoutId} miniTabsSrc={data} lengthArr={data.length}  />}
          </AnimatePresence>
        </div>
      </LayoutGroup>

    </div>
  );
}
