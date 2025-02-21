'use client'
import { ReactNode } from "react"

interface Props {
  children: ReactNode
}
export default function Subtitle({children}:Props){
  return   <h2 className="subtitle w-fit lg:text-5xl text-3xl my-7 
        my-10 p-3 text-center font-black text-gray-800 mb-5 lg:mb-10"> 
    {children}
    </h2> 
}


