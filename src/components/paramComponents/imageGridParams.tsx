'use client'
import Image from "next/image"

export const DesktopComponentImageGrid: React.FC<{ item: any }> = ({ item }) => {
    return (
      <div className="relative h-[450px] flex flex-col justify-center items-center">
        <Image src={item.finalImage}  alt="certi" height={450}  width={250} className="" />
      </div>
    );
  };
  
 export const MobileComponentImageGrid: React.FC<{ item: any }> = ({ item }) => {
    return (
      <div className="">
        GEEEE
      </div>
    );
  };