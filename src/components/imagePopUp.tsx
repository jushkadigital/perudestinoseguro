import { motion } from "framer-motion"
import {ArrowLeftCircleIcon,ArrowRightCircleIcon} from "@heroicons/react/24/solid"
import Image from "next/image"
type Props = {
  miniTabsSrc:string[] | any[]
  poper:(id:number,inside?:boolean)=>void
  LayoutId:number | null
  lengthArr:number
}

export function ImagePopUp ({poper,LayoutId,miniTabsSrc,lengthArr}:Props){

  const SingleComponent = miniTabsSrc[LayoutId || 0]


  const minus = ()=>{
    if (LayoutId! == 0){

    }else{
      poper(LayoutId! -1,true)
    }
  }

  const add = ()=>{
    if (LayoutId!+1 == lengthArr){

    }else{
      poper(LayoutId! + 1,true)
    }
  }


  const ImageFramer = motion(Image)
  return (
  <motion.div className="flex flex-col fixed top-0 left-0 right-0 bottom-0 bg-black/90 justify-between z-50" 
        initial={{ opacity: 0 ,scale:0}}
        animate={{ opacity: 1 ,scale:1}}
        exit={{ opacity: 0 ,scale:0}}
>
      <div  onClick={()=>poper(100)} className="text-gray-400 text-3xl absolute top-3 left-3 cursor-pointer z-[60]">X</div>
      <div className="text-gray-400 text-3xl absolute top-3 right-3 cursor-pointer">{LayoutId! + 1}/{miniTabsSrc.length}</div>
      <div>
      </div>
      <div className="absolute w-full h-full top-0 flex flex-row justify-center">
      <div className="w-10 flex justify-center z-50"><ArrowLeftCircleIcon onClick={()=>minus()} className="text-white cursor-pointer select-none" /></div>
      <div className="w-1/3 mt-10 relative h-[75vh]">
        <ImageFramer layout src={SingleComponent.finalImage} fill className=" m-auto rounded-2xl"/>
      </div>
      <div className="w-10 flex justify-center z-50"><ArrowRightCircleIcon onClick={()=>add()} className="text-white cursor-pointer select-none"/></div>

      </div>
            <div className="flex justify-evenly  w-2/3 mx-auto">
       {miniTabsSrc.map((ele,idx)=><div className="w-[100px] h-[90px] aspect-video relative" onClick={()=>poper(idx,true)}><Image  alt="u" className="rounded-lg" src={ele.finalImage} fill/></div>)}
      </div>
    </motion.div>
  )

}






