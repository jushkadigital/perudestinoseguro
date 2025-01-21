import React from "react";
import { zip } from "../../lib/utils"
import Image from "next/image"

export const CardPortada = () => {

  const tips = ["Alojamiento", "Desayuno", "Translados", "Trenes", "Ingresos", "y mas"]
  const imagesTips = ["/oneIcon.png", "/twoIcon.png", "/threeIcon.png", "/fourIcon.png", "/fiveIcon.png", "/sixIcon.png"]

  return (
    <div className="bg-white w-[500px] h-[800px] flex flex-col">
      <div className="h-[60%] bg-red-500">  </div>
      <div className="h-[40%] flex flex-col bg-[#191818]">
        <div className="h-1/2 flex flex-row">
          <div className="w-[60%] flex flex-col justify-center">
            <div className=" flex flex-row justify-center">
              <div className="text-[#D9D9D9] text-center w-2/3 text-[23px] font-bold leading-5">
                LIMA CUSCO PUERTO MALDONADO
              </div>
            </div>
              <div className="flex flex-row justify-center">
              <div className="text-[#D9D9D9] text-center w-3/4 text-xl">
              VACACIONES <strong> EN PERU</strong>
              </div>
            </div>
          </div>
          <div className="w-[40%] flex flex-col justify-center">
            <div>
              <div className="text-[#D9D9D9]   text-sm font-light">PRECIO POR <strong className="font-black"> ADULTO</strong></div>
            <div className="flex flex-row justify-center items-center">
              <div className="text-[10px] font-bold text-gray-700 -rotate-90 h-fit text-end">desde</div>
              <div><div className="font-bold text-xl text-[#D9D9D9]">$1950</div><div className="text-[10px] text-[#D9D9D9]">a partir de 2 personas</div></div>
            </div>

            </div>
                      </div>
        </div>
        <div className="h-1/2 flex flex-col justify-around">
          <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row justify-between w-[80%]"> {[...zip(tips, imagesTips)].map(ele => (<div>
            <div className="h-[15px] flex flex-col justify-center items-center "><Image alt="oeu" src={ele[1]} width={15} height={15} className="object-cover"/> </div> 
            <div className="text-xs text-[#D9D9D9] font-light">{ele[0]}</div>  </div>))}
          </div>
          </div>
          <div className="w-[60%] h-6 relative mx-auto">
            <Image src={"/botomIcon.png"} alt="o"  fill className="" />
            {/* <div> */}
            {/* </div> */}
            {/* <div> </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
