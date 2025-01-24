import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";


export const DestinosCarousel = ({destinos})=>{

    return (
        <div className="w-full flex flex-row ">
            <div className="w-1/2">
            <Carousel className="w-full max-w-[90%] ">
                  <CarouselContent className="-ml-1 ">
                      <CarouselItem  className='p-1 basis-1/2 flex flex-col items-center' >
                        <div className="relative w-[66%] aspect-video "></div>
                      </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
            </div>
            <div className="w-1/2">
                
            </div>

        </div>
    )
}

