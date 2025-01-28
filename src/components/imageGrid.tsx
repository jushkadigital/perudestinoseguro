'use client'
import React, { useState } from 'react';
// import './Counter.css';
import { AnimatePresence, LayoutGroup, motion } from "framer-motion"
import { ImagePopUp } from './imagePopUp';
import { SwipeCarousel } from "./swiperCarousel";
import { GalleryCarrousel } from "./galleryCarousel";
import { useMobile } from '@/hooks/useMobile';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';

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
  <Carousel>
    <CarouselContent>
    {data.map((ele, index) => (
      <CarouselItem key={index}>
        <ItemComponent2 item={ele}/>
      </CarouselItem>
    ))}
    </CarouselContent>
    </Carousel>
  : <GalleryCarrousel data={data} renderItemDesktop={ItemComponent} gridColumns={gridColumns} />
}
