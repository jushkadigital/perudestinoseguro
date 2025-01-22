import React from "react";
import Image from "next/image"
import styles from "./cardDias.module.css"
import { cn } from "@/lib/utils";
export const CardDias = () => {


  return (
    <div className=" w-[500px] h-screen flex flex-col">
      <div className="h-[40%] bg-red-500">  </div>
      <div className="h-[60%] flex flex-col bg-[#191818]">
        <div className="flex flex-row justify-center items-center h-[13%]">
          <div className="flex flex-row text-xs gap-x-3">
            {[0, 1, 2].map(ele => (
              <div className="text-white text-xs border border-[#C2A66B] py-1 h-fit ">
                <div className={cn(styles.gradient_h2,"leading-none")}> Esfuerzo Fisico {ele}</div> <div className="font-light text-xs leading-none"> Moderado</div> 
              </div>))}
          </div>

        </div>
        <div className="flex flex-row w-full h-[87%]">
          <div className="w-[30%] flex flex-col justify-start">
            <div className="flex flex-col justify-center items-center gap-y-2">
              <div className={cn(styles.gradient_h2, "text-xs mt-2")}>RECOMENDACIONES</div>
              <div className="text-white">
                {["aoeuaoeu aoeu", "aoeoeuoeuuo aoeuoaeu aoue", "aoe aoeaoe  aoeaoeaoe  ", "aoe aoeaoe  aoeaoeaoe"].map(ele => (
                  <div className="text-[8px] ml-4">
                 <Image src={"/elipse5.png"} alt="el" width={10}  height={10} className="inline-block"/> <span className="align-middle "> {ele}</span> 
                </div>))}
              </div>
            </div>
          </div>
          <div className="w-[10%] h-full ">
            <div className="h-[300px] relative flex flex-col gap-y-3">
              <div style={{ left: "calc(50% - 3px)" }} className="absolute w-[2px] bg-white h-[200px] "></div>
              <div className="w-full flex flex-col items-center">
                <div className="w-12 h-12 relative">
                  <div className=" transform translate-x-[4px] absolute w-[36px] h-[36px] -rotate-45 shadow-[0px_4px_4px_#00000040] [background:linear-gradient(180deg,rgb(136,103,60)_0%,rgb(194,166,107)_14.91%,rgb(234,217,166)_19%,rgb(170,141,82)_27%,rgb(197.62,158.41,93.05)_48.54%,rgb(212.5,162.71,74.37)_63%,rgb(202,176,118)_82%,rgb(197,168,110)_95%)]"> </div>
                  <div style={{ top: "calc(50% - 15px)", left: "calc(50% - 15px)" }} className="transform translate-x-[3px] absolute w-[18px] h-[18px] bg-white -rotate-45 shadow-[0px_4px_4px_#00000040]"> </div>
                </div>
              </div>
              <div className="w-full flex flex-col items-center">
                <div className="w-12 h-12 relative">
                  <div className="transform translate-x-[4px]  absolute w-[36px] h-[36px] bg-white -rotate-45 shadow-[0px_4px_4px_#00000040]"> </div>
                  <div style={{ top: "calc(50% - 15px)", left: "calc(50% - 15px)" }} className=" transform translate-x-[3px] absolute w-[18px] h-[18px] -rotate-45 shadow-[0px_4px_4px_#00000040] [background:linear-gradient(180deg,rgb(136,103,60)_0%,rgb(194,166,107)_14.91%,rgb(234,217,166)_19%,rgb(170,141,82)_27%,rgb(197.62,158.41,93.05)_48.54%,rgb(212.5,162.71,74.37)_63%,rgb(202,176,118)_82%,rgb(197,168,110)_95%)]"> </div>
                </div>
              </div>
              <div className="w-full flex flex-col items-center">
                <div className="w-6 h-6 relative ">
                  <div className="absolute w-[20px] h-[20px] bg-white -rotate-45 shadow-[0px_4px_4px_#00000040]"> </div>
                  <div style={{ top: "calc(50% - 8px)", left: "calc(50% - 8px)" }} className="absolute w-[11px] h-[11px] -rotate-45 shadow-[0px_4px_4px_#00000040] [background:linear-gradient(180deg,rgb(136,103,60)_0%,rgb(194,166,107)_14.91%,rgb(234,217,166)_19%,rgb(170,141,82)_27%,rgb(197.62,158.41,93.05)_48.54%,rgb(212.5,162.71,74.37)_63%,rgb(202,176,118)_82%,rgb(197,168,110)_95%)]"> </div>
                </div>
              </div>
              <div className="w-full flex flex-col items-center">
                <div className="w-6 h-6 relative ">
                  <div className="absolute w-[20px] h-[20px] bg-white -rotate-45 shadow-[0px_4px_4px_#00000040]"> </div>
                  <div style={{ top: "calc(50% - 8px)", left: "calc(50% - 8px)" }} className="absolute w-[11px] h-[11px] -rotate-45 shadow-[0px_4px_4px_#00000040] [background:linear-gradient(180deg,rgb(136,103,60)_0%,rgb(194,166,107)_14.91%,rgb(234,217,166)_19%,rgb(170,141,82)_27%,rgb(197.62,158.41,93.05)_48.54%,rgb(212.5,162.71,74.37)_63%,rgb(202,176,118)_82%,rgb(197,168,110)_95%)]"> </div>
                </div>
              </div>
              <div className="w-full flex flex-col items-center">
                <div className="w-6 h-6 relative ">
                  <div className="absolute w-[20px] h-[20px] bg-white -rotate-45 shadow-[0px_4px_4px_#00000040]"> </div>
                  <div style={{ top: "calc(50% - 8px)", left: "calc(50% - 8px)" }} className="absolute w-[11px] h-[11px] -rotate-45 shadow-[0px_4px_4px_#00000040] [background:linear-gradient(180deg,rgb(136,103,60)_0%,rgb(194,166,107)_14.91%,rgb(234,217,166)_19%,rgb(170,141,82)_27%,rgb(197.62,158.41,93.05)_48.54%,rgb(212.5,162.71,74.37)_63%,rgb(202,176,118)_82%,rgb(197,168,110)_95%)]"> </div>
                </div>
              </div>


            </div>
          </div>
          <div className="w-[60%] h-full flex flex-col bg-[#191818]">
            <div className="h-[20%] ">
              <div className="flex flex-row">
                <div className="w-1/3 text-3xl text-[#C2A66B]">DÍA 1</div><div className="w-2/3"> <div className="text-xs italic text-white">Inicia: 00:00 </div> <div className="text-xs italic text-white" >termina: 00:00 </div> </div>
              </div>
              <div className="flex flex-row items-start">
                <div className=" w-2/3 bg-[#c2a66b] border-none rounded-[62.64px] text-xl"> LLEGADA A LIMA</div>
              </div>
            </div>
            <div className="h-[55%]">
              <div className="h-1/2 text-[7px] text-white mr-5 font-light leading-3" dangerouslySetInnerHTML={{ __html: "De acuerdo con el horario de llegada de su vuelo (rastrearemos su vuelo y estaremos al pendiente de su llegada), nuestra movilidad estará esperando por usted. El número de puerta por donde deberá salir es el N°3 o N°4. Podrá identificar a nuestro agente por el cartel con su nombre que llevará en mano. Él le trasladará a su alojamiento reservado en la Ciudad de Lima, donde podrá descansar después de su viaje. Importante: El check-in del hotel es a partir de las 15:00 horas. Si su vuelo llega antes de la hora indicada, puede solicitar el uso de la habitación con una tarifa adicional o dejar sus maletas en recepción y salir a conocer la ciudad o esperar en el lobby." }}></div>
              <div className= "h-1/2 flex flex-row">
                <div className="w-1/2 flex flex-col items-center justify-center">
                  <div>
                  <div className={cn(styles.gradient_h2, "text-xs")}>INCLUSIONES</div>
                  <div className="text-white flex flex-col gap-y-0">
                    {["aoeuaoeu aoeu", "aoeoeuoeuuo aoeuoaeu aoue", "aoe aoeaoe  aoeaoeaoe  ", "aoe aoeaoe  aoeaoeaoe"].map(ele => (
                      <div className="h-3">
                    <Image src={"/check.png"} alt="el" width={10}  height={10} className="inline-block m-0"/> <span className="align-middle text-[8px]"> {ele}</span> 
                      </div>
                    ))}
                  </div>
                  </div>
                  </div>

                <div className="w-1/2 flex flex-col items-center justify-center">
                  <div>
                  <div className={cn(styles.gradient_h2, "text-xs")}>NO INCLUYE</div>
                  <div className="text-white flex flex-col ">
                    {["aoeuaoeu aoeu", "aoeoeuoeuuo aoeuoaeu aoue", "aoe aoeaoe  aoeaoeaoe  ", "aoe aoeaoe  aoeaoeaoe  "].map(ele => (
                      <div className="h-3 p-0">
                    <Image src={"/noCheck.png"} alt="el" width={10}  height={10} className="inline-block m-0"/> <span className="align-middle text-[8px]"> {ele}</span> 
                      </div>
                    ))}
                  </div>
                  </div>
                </div>

                </div>

              </div>
              
            <div className="h-[25%] bg-red-800"></div>
          </div>
        </div>

      </div>
    </div>
  );
};
