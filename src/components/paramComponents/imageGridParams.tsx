'use client'
import { APIBACK } from "@/lib/utils";
import Image from "next/image"

export const DesktopComponentImageGrid: React.FC<{ item: any }> = ({ item }) => {
    return (
      <div className="relative h-[500px] flex flex-col justify-center items-center">
        <Image src={item.finalImage}  alt="certi" fill className="object-cover" />
      </div>
    );
  };
  
 export const MobileComponentImageGrid: React.FC<{ item: any }> = ({ item }) => {
    return (
      <div className="relative w-full h-[500px]">
        <Image src={item.finalImage}  alt="certi" fill className="object-cover" />
      </div>
    );
  };

 export const VerticalCardStack:React.FC<{ item: any }> = ({ item }) => {
    return (
        <div key={item.idx} className={"w-[250px] h-[200px]  max-w-sm mx-auto bg-white shadow-lg rounded-[10px] overflow-hidden flex flex-col justify-center items-center gap-y-3"}>
                    <div id="header" className="flex flex-row text-3xl font-semibold">  <span className="block"> <Image src={APIBACK + item.logo.url} alt="ao" width={50} height={38} /></span> </div>
                    <Image src={"/isologo-04.png"} alt="ao" width={50} height={38}/>
                    <div id="body" className="text-[#4a0700] max-w-[150px] text-[1.3rem] font-semibold font-custom text-center"> {item.beneficio} </div>
                  </div>
    );
  };
