import React from "react";

export const CardPortada = () => {

  const tips = ["Alojamiento","Desayuno","Translados","Trenes","Ingresos","y mas"]
  const imagesTips = ["/oneIcon","/twoIcon","/threeIcon","/fourIcon","/fiveIcon","/sixIcon"]

  return (
    <div className="bg-white w-[200px] h-[500px] flex flex-col">
        <div className="h-[60%] bg-red-500">  </div>  
        <div className="h-[40%] bg-blue-500 flex flex-col">
        <div className="h-1/2 bg-white flex flex-row">
          <div className="w-2/3">
            
          </div>
          <div className="w-1/3">
  
          </div>
        </div>
        <div className="h-1/2">
          <div></div>
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
