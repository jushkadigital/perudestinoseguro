'use client'
import React from "react";
import { CardStack } from "./ui/card-stack"
import { useMobile } from "@/hooks/useMobile";

interface Props<T> {
  items: T[]; // Un array de cualquier tipo de datos
  renderItem: React.ComponentType<{ item: T }>; // Componente dinámico para renderizar cada item
  className:string,
  children: React.ReactNode
  
}

export const BeneficioSwitch = <T,>({items,renderItem:ItemComponent,className,children}:Props<T>)=>{
    const isMobile = useMobile()
    return isMobile ?
        <CardStack items={items} className={className} renderItem={ItemComponent}/>
        :
        children
    
}