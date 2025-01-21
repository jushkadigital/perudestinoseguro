import React from "react";
import Image from "next/image"

export const CardDias = () => {


  return (
    <div className="bg-white w-[500px] h-[800px] flex flex-col">
      <div className="h-[40%] bg-red-500">  </div>
      <div className="h-[60%] flex flex-col bg-[#191818]">
        <div className="flex flex-row justify-center ">
          <div className="flex flex-row text-xs gap-x-3"> 
            {[0, 1, 2].map(ele => (
            <div className="text-white border border-white">
              <div> Esfuerzo Fisico {ele}</div>
              <div> Moderado</div>
            </div>))}
          </div>

        </div>
        <div className="flex flex-row w-full">
        <div className="w-[30%] flex flex-col justify-center">
        <div className="flex flex-col justify-center items-center">
        <div>RECOMENDACION</div>
        <div className="text-white">
        {[0, 1, 2.3].map(ele => (<div>
        {ele}
        </div>))}
        </div>
        </div>
        </div>

        <div className="w-[10%] bg-green-500 relative flex flex-col gap-y-3">
            <div style={{left: "calc(50% - 3px)"}}  className="absolute   w-[2px] bg-white h-full "></div>
            <div className="w-full flex flex-col items-center">
            <div className="w-12 h-12 relative">
            <div className=" transform translate-x-[4px] absolute w-[36px] h-[36px] -rotate-45 shadow-[0px_4px_4px_#00000040] [background:linear-gradient(180deg,rgb(136,103,60)_0%,rgb(194,166,107)_14.91%,rgb(234,217,166)_19%,rgb(170,141,82)_27%,rgb(197.62,158.41,93.05)_48.54%,rgb(212.5,162.71,74.37)_63%,rgb(202,176,118)_82%,rgb(197,168,110)_95%)]"> </div>
            <div style={{top: "calc(50% - 15px)",left: "calc(50% - 15px)"}} className="transform translate-x-[3px] absolute w-[18px] h-[18px] bg-white -rotate-45 shadow-[0px_4px_4px_#00000040]"> </div>
          </div>
            </div>
          <div className="w-full flex flex-col items-center">
          <div className="w-12 h-12 relative">
            <div className="transform translate-x-[4px]  absolute w-[36px] h-[36px] bg-white -rotate-45 shadow-[0px_4px_4px_#00000040]"> </div>
            <div style={{top: "calc(50% - 15px)",left: "calc(50% - 15px)"}}  className=" transform translate-x-[3px] absolute w-[18px] h-[18px] -rotate-45 shadow-[0px_4px_4px_#00000040] [background:linear-gradient(180deg,rgb(136,103,60)_0%,rgb(194,166,107)_14.91%,rgb(234,217,166)_19%,rgb(170,141,82)_27%,rgb(197.62,158.41,93.05)_48.54%,rgb(212.5,162.71,74.37)_63%,rgb(202,176,118)_82%,rgb(197,168,110)_95%)]"> </div>
          </div>
          </div>
          <div className="w-full flex flex-col items-center">
          <div className="w-6 h-6 relative ">
            <div className="absolute w-[20px] h-[20px] bg-white -rotate-45 shadow-[0px_4px_4px_#00000040]"> </div>
            <div style={{top: "calc(50% - 8px)",left: "calc(50% - 8px)"}}  className="absolute w-[11px] h-[11px] -rotate-45 shadow-[0px_4px_4px_#00000040] [background:linear-gradient(180deg,rgb(136,103,60)_0%,rgb(194,166,107)_14.91%,rgb(234,217,166)_19%,rgb(170,141,82)_27%,rgb(197.62,158.41,93.05)_48.54%,rgb(212.5,162.71,74.37)_63%,rgb(202,176,118)_82%,rgb(197,168,110)_95%)]"> </div>
          </div>
          </div>
          <div className="w-full flex flex-col items-center">
          <div className="w-6 h-6 relative ">
            <div className="absolute w-[20px] h-[20px] bg-white -rotate-45 shadow-[0px_4px_4px_#00000040]"> </div>
            <div style={{top: "calc(50% - 8px)",left: "calc(50% - 8px)"}}  className="absolute w-[11px] h-[11px] -rotate-45 shadow-[0px_4px_4px_#00000040] [background:linear-gradient(180deg,rgb(136,103,60)_0%,rgb(194,166,107)_14.91%,rgb(234,217,166)_19%,rgb(170,141,82)_27%,rgb(197.62,158.41,93.05)_48.54%,rgb(212.5,162.71,74.37)_63%,rgb(202,176,118)_82%,rgb(197,168,110)_95%)]"> </div>
          </div>
          </div>
          <div className="w-full flex flex-col items-center">
          <div className="w-6 h-6 relative ">
            <div className="absolute w-[20px] h-[20px] bg-white -rotate-45 shadow-[0px_4px_4px_#00000040]"> </div>
            <div style={{top: "calc(50% - 8px)",left: "calc(50% - 8px)"}}  className="absolute w-[11px] h-[11px] -rotate-45 shadow-[0px_4px_4px_#00000040] [background:linear-gradient(180deg,rgb(136,103,60)_0%,rgb(194,166,107)_14.91%,rgb(234,217,166)_19%,rgb(170,141,82)_27%,rgb(197.62,158.41,93.05)_48.54%,rgb(212.5,162.71,74.37)_63%,rgb(202,176,118)_82%,rgb(197,168,110)_95%)]"> </div>
          </div>
          </div>



        </div>
        <div className="w-[60%]  flex flex-col">
          <div className="h-[28.5%] bg-red-500"> </div>
          <div className="h-[57%] bg-red-100"></div>
          <div className="h-[28.5%] bg-red-800"></div>
        </div>
      </div>

        <div>
          
        </div>
    </div>
    </div>
  );
};
