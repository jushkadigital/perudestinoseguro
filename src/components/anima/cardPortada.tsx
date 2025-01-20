import React from "react";
import { zip } from "../../lib/utils"
import Image from "next/image"

export const CardPortada = () => {

  const tips = ["Alojamiento", "Desayuno", "Translados", "Trenes", "Ingresos", "y mas"]
  const imagesTips = ["/oneIcon.png", "/twoIcon.png", "/threeIcon.png", "/fourIcon.png", "/fiveIcon.png", "/sixIcon.png"]

  return (
    <div className="bg-white w-[400px] h-[600px] flex flex-col">
      <div className="h-[60%] bg-red-500">  </div>
      <div className="h-[40%] bg-blue-500 flex flex-col">
        <div className="h-1/2 bg-white flex flex-row">
          <div className="w-2/3">

          </div>
          <div className="w-1/3">

          </div>
        </div>
        <div className="h-1/2 ">
          <div className="flex flex-row"> {[...zip(tips, imagesTips)].map(ele => (<div>
            <div><Image alt="oeu" src={ele[1]} width={15} height={15} /> </div> 
            <div className="">{ele[0]}</div>  </div>))}
          </div>
          <div>
            <div>
            </div>
            <div> </div>
          </div>
        </div>
      </div>
    </div>
  );
};
