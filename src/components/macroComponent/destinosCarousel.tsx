'use client'
import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel"
import Image from "next/image"
import { useMobile } from "@/hooks/useMobile";

type Destino = {
    name: string
    featuredImage: string
    fullImage: string
}

interface Props {
    destinos: Destino[]
}


export const DestinosCarousel = ({ destinos }: Props) => {

    const [indexContent, setIndextContent] = useState(0)
    const [current, setCurrent] = useState(0)
    const [api, setApi] = useState<CarouselApi>()

    const isMobile = useMobile()

    return (
        <div className="w-full flex flex-col lg:flex-row h-full gap-y-10 lg:gap-y-0">
            <div className="w-full lg:w-1/2 flex flex-col lg:flex-row justify-center lg:justify-end items-center lg:items-center">
                <div className="w-[90%] lg:w-[70%] h-[70%] flex flex-col justify-center">
                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        orientation="vertical"
                        className="w-full"
                    >
                        <CarouselContent className="-ml-1 h-[250px] lg:h-[450px]">
                            {destinos.map((ele, idx) => (
                                <CarouselItem
                                    key={idx}
                                    onClick={() => setIndextContent(idx)}
                                    className='pt-1  flex flex-col items-center basis-1/3' >
                                    <div className="relative w-full lg:w-[76%] h-[75px] lg:h-[150px] aspect-video rounded-xl ">
                                        <Image src={ele.featuredImage} alt="image" fill className="object-cover rounded-xl" />
                                        <div className="absolute w-full h-full flex flex-col justify-center items-center"> 
                                            <div className="text-3xl text-yellow-500  font-bold">
                                             {ele.name}
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        {!isMobile &&
                        <>
                        <CarouselPrevious />
                        <CarouselNext />
                        </>
                        }
                        
                    </Carousel>
                </div>
            </div>
            <div className="w-full lg:w-1/2 h-1/2  lg:h-full flex flex-col justify-start items-center lg:items-start lg:justify-center">
                <div className="w-[90%] lg:w-2/3 h-2/3 lg:h-2/3 relative rounded-xl"> <Image src={destinos[indexContent].fullImage} alt="image" fill className="object-cover rounded-xl" /></div>
            </div>

        </div>
    )
}

