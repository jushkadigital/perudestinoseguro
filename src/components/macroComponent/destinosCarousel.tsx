'use client'
import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel"
import Image from "next/image"

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




    return (
        <div className="w-full flex flex-row h-screen ">
            <div className="w-1/2 flex flex-row justify-end items-center">
                <div className="w-[70%] h-[70%] flex flex-col justify-center">
                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        orientation="vertical"
                        className="w-full"
                    >
                        <CarouselContent className="-ml-1 h-[450px]">
                            {destinos.map((ele, idx) => (
                                <CarouselItem
                                    key={idx}
                                    onClick={() => setIndextContent(idx)}
                                    className='pt-1  flex flex-col items-center basis-1/3' >
                                    <div className="relative w-[76%] h-[150px] aspect-video rounded-xl ">
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
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
            <div className="w-1/2 h-full flex flex-col justify-center">
                <div className="w-2/3 h-2/3 relative rounded-xl"> <Image src={destinos[indexContent].fullImage} alt="image" fill className="object-cover rounded-xl" /></div>
            </div>

        </div>
    )
}

