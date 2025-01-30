'use client'
import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel"
import Image from "next/image"
import { APIBACK } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay"
import { useMobile } from "@/hooks/useMobile";

type Partner = {
    description: string
    featuredImage: string
    finalImage: string
}

interface Props {
    partners: Partner[]
}


export const PartnersCarousel = ({ partners }: Props) => {

    const [indexContent, setIndextContent] = useState(0)
    const [current, setCurrent] = useState(0)
    const [api, setApi] = useState<CarouselApi>()

    const isMobile = useMobile()


    useEffect(() => {
        if (!api) {
            return
        }

        setCurrent(api.selectedScrollSnap())

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])
    return (
        <div className="w-full flex flex-col  ">
            <div className="w-full flex flex-row justify-center items-center">
                <div className="w-[95%] lg:w-[70%] h-[70%] flex flex-col justify-center">
                    <div>
                        <Carousel
                            opts={{
                                align: "start",
                                loop: true
                            }}
                            plugins={[
                                Autoplay({
                                    delay: 2000,
                                }),
                            ]}
                            setApi={setApi}
                            className="w-full"
                        >
                            <CarouselContent className="">
                                {partners.map((ele, idx) => (
                                    <CarouselItem
                                        onClick={() => setIndextContent(idx)}
                                        className='basis-1/3 lg:basis-1/4' >
                                        <div className="relative w-[120px] lg:w-[250px] h-[50px] lg:h-[100px] aspect-video rounded-xl">
                                            <Image src={ele.featuredImage} alt="image" fill className="object-cover rounded-xl" />
                                        </div>
                                        <div>
                                        </div>
                                    </CarouselItem>
                                ))}
                                
                            </CarouselContent>
                            {
                            !isMobile && 
                            <>
                            <CarouselPrevious />
                            <CarouselNext />
                            </>
                            }
                        </Carousel>
                    </div>
                    <div className="w-full h-10"></div>
                    <div className="w-full h-full flex flex-col justify-center">
                        <div className="w-full flex flex-col lg:flex-row  justify-between ">
                            <div className="w-full lg:w-1/2 h-[150px] lg:h-[350px] aspect-square relative rounded-xl">
                                <Image src={partners[current].finalImage} alt="image" fill className="object-cover rounded-xl" />
                            </div>
                            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
                            <div className="w-3/4 text-[15.5px] lg:text-[25px] text-gray-600">{partners[current].description}</div> 
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

