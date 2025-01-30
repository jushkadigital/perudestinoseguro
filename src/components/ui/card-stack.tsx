"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

let interval: any;
function dividirEnGrupos(array:any[], tamañoGrupo = 3) {
  return array.reduce((resultado, elemento, index) => {
    if (index % tamañoGrupo === 0) {
      resultado.push([]);
    }
    resultado[resultado.length - 1].push(elemento);
    return resultado;
  }, []);
}

export const CardStack = <T,>({
  items,
  renderItem:ItemComponent,
  offset,
  scaleFactor,
  className
}: {
  items: T[];
  renderItem: React.ComponentType<{ item: T }>; // Componente dinámico para renderizar cada item
  offset?: number;
  scaleFactor?: number;
  className: string;
}) => {

  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;

  const [cards, setCards] = useState<T[][]>(dividirEnGrupos(items));

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: T[][]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };



  return (
    <div className="relative w-full h-full">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={index}
            className={cn(className,"","left-10 absolute dark:bg-black bg-white  rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05]")}
            style={{
              transformOrigin: "top center",
           }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <div className="flex flex-col">
              {card.map((ele)=>(
                <ItemComponent item={ele}/>
              ))}
               </div>
          </motion.div>
        );
      })}
    </div>
  );
};
