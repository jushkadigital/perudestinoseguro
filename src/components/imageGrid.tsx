'use client'
import React, { useState } from 'react';
// import './Counter.css';
import { AnimatePresence, LayoutGroup, motion } from "framer-motion"
import { ImagePopUp } from './imagePopUp';
import { SwipeCarousel } from "./swiperCarousel";
import { GalleryCarrousel } from "./galleryCarousel";
import { useMobile } from '@/hooks/useMobile';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

interface Props<T> {
  data: T[]; // Un array de cualquier tipo de datos
  renderItemDesktop: React.ComponentType<{ item: T }>; // Componente dinámico para renderizar cada item
  renderItemMobile: React.ComponentType<{ item: T }>; // Componente dinámico para renderizar cada item
  gridColumns:number
}

export  const ImageGrid =<T,>({
  data,
  renderItemDesktop: ItemComponent,
  renderItemMobile: ItemComponent2,
  gridColumns
}: Props<T>)=>
  {

  const isMobile = useMobile()
  return isMobile ?  
  <Carousel opts={{
              align: "start",
            }}
            className="w-full h-full"
>
    <CarouselContent
    className='-ml-1 h-[550px]'
    >
    {data.map((ele, index) => (
      <CarouselItem key={index}
        className='pt-1 flex flex-col items-center'
      >
        <ItemComponent2 item={ele}/>
      </CarouselItem>
    ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
    </Carousel>
  : <GalleryCarrousel data={data} renderItemDesktop={ItemComponent} gridColumns={gridColumns} />
}
