import CustomCarousel from '@/components/customCarousel'
import ProfileCard from '@/components/cardPaquetes'
import { getDestinos, getInicioPage, getPaquete } from '@/app/lib/wp'
import Questions from '@/components/questions'
import { RevealBento } from '@/components/gridDestino'
import { createTranslation } from '../../../../i18next'
import SwitcherGlobal from '@/components/SwitcherGlobal'
import { LocaleType } from '../../../../i18next/settings'
import MotionElement from "@/components/clientExportElement"
import AgenciaForm from '@/components/formAgencio'
import { AccordionShad } from '@/components/accordionShad'
import { CarouselPrincipalShad } from '@/components/carouselPrincipalShad'
import { myFetch, APIBACK } from '@/lib/utils'
import SnapScrolling from '@/components/macroComponent/snapScroll'
import { Box } from 'lucide-react'
import { BoxSection } from '@/components/boxSection'
import Image from "next/image"
import { YouTubeEmbed } from '@/components/YoutubeEmbed'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Markdown from "markdown-to-jsx";
import FAQSection from '@/components/macroComponent/faq'




type Props = {
  params: Promise<{
    lng: string
  }>
}

async function getPageData(slug: string, lng: LocaleType) {

  const instance = await myFetch("inicio", { locale: lng }, {})

  // const idInstance = instance.items[0].id

  // const related = await getInicioPage({translation_of:idInstance})

  // const relatedLanguages = related.items.map(ele=> ({language: ele.meta.locale,slug:ele.meta.slug}))


  return {
    InicioPage: instance.items[0],
    // related: instance.items.map(ele=> ({language: ele.meta.locale,slug:ele.meta.slug})).concat(relatedLanguages)
  }

}

export default async function Home(props: Props) {

  const params = await props.params;

  const { t } = await createTranslation(params.lng, 'home')

  //const destinos = await myFetch("destinos",{populate:"*"},{})

  console.log(t('BeneficiosSeccion.beneficio', { returnObjects: true }))


  console.log(t('Testimonios.testimonio', { returnObjects: true }))

  const str = t('cuadroComparativo.cuadro')

  const CustomTable = (props: React.TableHTMLAttributes<HTMLTableElement>) => (
    <table style={{ border: "1px solid black", borderCollapse: "collapse" }} {...props} />
  );

  function splitByIndex<T>(items: T[]): { evenIndex: T[]; oddIndex: T[] } {
    return items.reduce(
      (acc, item, index) => {
        if (index % 2 === 0) {
          acc.evenIndex.push(item);
        } else {
          acc.oddIndex.push(item);
        }
        return acc;
      },
      { evenIndex: [], oddIndex: [] } as { evenIndex: T[]; oddIndex: T[] }
    );
  }
  
  function toQA(arr:any[]){
      return arr.map(ele => (
    { question: ele.pregunta, answer: ele.respuesta }
      ))
  }

  const {evenIndex,oddIndex} = splitByIndex((t('FAQSeccion.faq', { returnObjects: true }) as any[]))
  return (

    <SnapScrolling>


      {/* <SwitcherGlobal currentLocale={params.lng}  dynamicLinks={related} slug={undefined}/> */}
      {/*<CustomCarousel data={t('galleryIni',{returnObjects:true})} keyframes={keyframes} keyframes2={keyframes2} ></CustomCarousel>*/}
      {/* <CarouselPrincipalShad data={t('galleriaCarousel',{returnObjects:true})} keyframes={keyframes} keyframes2={keyframes2}/> */}
      {/* <SessionProvider> */}
      {/* <SessionValidator>GAAAAAAAA</SessionValidator> */}
      {/*<MotionElement
        as="h2"
        initial={{ opacity: 0 ,translateY: 200}}
        whileInView={{ opacity: 1 ,translateY: 0}}
        transition={{duration:1,type:'spring'}}
        // viewport={{margin:"100px 0px 0px 0px"}}
        className="subtitle w-fit lg:text-[34px] text-[20px] lg:text-3xl
       my-[20px] lg:my-[50px] p-3 text-center font-semibold text-gray-800  lg:mb-10"> 
        {t('tituloPaquete')}
      </MotionElement>*/}

      <BoxSection full className=''>
        <div className='relative w-full h-full overflow-hidden'>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src={APIBACK + t('video.videoFile.url')} type="video/mp4" />
            Tu navegador no soporta el video.
          </video>

          {/* Texto centrado */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
            <h1 className="text-4xl font-bold md:text-6xl">{t('video.textoTwo')}</h1>
          </div>

          {/* Overlay para mejorar el contraste */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
      </BoxSection>
      <BoxSection full animation='scale' className=''>
        <div className="h-[40rem] flex flex-col items-center justify-center  gap-y-10 lg:gap-y-6 w-[85%] mx-auto">
          <div className="text-black text-[35px] lg:text-[50px] font-bold flex flex-col lg:flex-row mt-4 items-center gap-x-4">
            <Image src={"/isologo-04.png"} width={100} height={73} alt="oaoe" />
            <div className="font-custom ">
              BENEFICIOS - VENTAJAS
            </div>
          </div>
          <div className='flex flex-row w-full'>
            <div className="w-2/3 grid grid-cols-3 gap-4">
              {
                (t('BeneficiosSeccion.beneficio', { returnObjects: true }) as any[]).map((ele, idx) => (
                  <div key={idx} className={"w-[250px] h-[200px]  max-w-sm mx-auto bg-white shadow-lg rounded-[10px] overflow-hidden flex flex-col justify-center items-center gap-y-3"}>
                    <div id="header" className="flex flex-row text-3xl font-semibold">  <span className="block"> <Image src={APIBACK + ele.logo.url} alt="ao" width={50} height={38} /></span> </div>
                    <div id="body" className="text-[#4a0700] max-w-[150px] text-[1.3rem] font-semibold font-custom text-center"> {ele.beneficio} </div>
                  </div>
                ))

              }
            </div>
            <div className='w-1/3 flex flex-col justify-center'>
              <YouTubeEmbed videoId="J4eLEY9fA9A" title="AAA" />
            </div>

          </div>
          <div className="flex flex-row gap-x-10">
          </div>
        </div>
      </BoxSection>
      <BoxSection full className=''>
        <div className='w-full h-full relative'>
          <Image src={APIBACK + t('Testimonios.background.url')} alt="" fill className='object-cover' />
          <div className='absolute w-full h-full'>
            <div className="w-[88%] mx-auto h-full">
              <div className='h-1/2 flex flex-row'>
                <div className='w-[45%] flex flex-col justify-center'>
                  <div className="w-2/3 text-white text-[78px]  font-bold flex flex-col lg:flex-row mt-4 items-center gap-x-4">
                    <div className="font-custom ">
                      {t('Testimonios.title')}
                    </div>
                    <Image src={"/isologo-04.png"} width={100} height={73} alt="oaoe" />
                  </div>
                </div>
                <div className='w-[55%] flex flex-col justify-center'>
                  <div className='h-[80%]'>
                    <YouTubeEmbed videoId="J4eLEY9fA9A" title="AAA" />
                  </div>
                </div>
              </div>
              <div className='h-1/2 flex flex-col justify-center'>
                <Carousel className="w-full max-w-[90%] ">
                  <CarouselContent className="-ml-1 ">
                    {(t('Testimonios.testimonio', { returnObjects: true }) as any[]).map((ele, idx) => (
                      <CarouselItem key={idx} className='p-1 basis-1/2 flex flex-col items-center' >
                        <div className="relative w-[66%] aspect-video ">
                          <div className='absolute w-[200px] h-[100px] bottom-0 bg-[#4a0700] rounded-3xl'></div>
                          <div className='absolute w-[45%] h-[45px] bottom-0  bg-[#4a0700] rounded-3xl z-20 text-white text-center align-'> {ele.name} </div>
                          <div className='absolute w-full h-full  bg-yellow-400 rounded-3xl transform translate-x-[20px]'>
                            <div className="bg-white w-[97%] h-[97%] mx-auto my-[3px] rounded-3xl flex justify-center items-center text-justify">
                              <p className='w-1/2'> {ele.description}</p></div>
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
          </div>
        </div>
      </BoxSection>
      <BoxSection full className=''>
        <div className='w-full h-full relative'>
          <div className='flex flex-col justify-center h-full'>
            <div className=" w-[85%] mx-auto ">
              <div>
                <div className='flex flex-row '>
                  <div className='w-[25%] flex flex-row justify-center'>
                    <Image src={"/peruLogo.svg"} width={250} height={250} alt="logo" className='' />
                  </div>
                  <div className='w-[75%] border-4 border-yellow-500 rounded-lg text-[#9E4848] font-custom text-[30px] font-bold'>
                    <div className='w-2/3 mx-auto'>
                      <span className='text-yellow-500 font-black text-4xl'>//</span>
                      {t('cuadroComparativo.titulo')}
                    </div>
                  </div> </div>
                <Markdown options={
                  {
                    overrides: {
                      table: {
                        props: {
                          className: "comparison-table",
                        },
                      },
                      th: {
                        props: {
                          className: "table-header",
                        },
                      },
                      td: {
                        props: {
                          className: "table-cell",
                        },
                      },
                      tr: {
                        props: {
                          className: "table-row",
                        },
                      },
                    },
                  }
                }>{str}</Markdown>
              </div>
            </div>
          </div>
        </div>
      </BoxSection>
      <BoxSection full className=''>
        <div className='w-full h-full'>
          <div className='flex flex-col justify-center h-full'>
          <div className='w-[85%] mx-auto'>
            <div className='flex flex-row justify-center'><div className='w-[40%] text-[39px] font-custom flex flex-row justify-center items-center text-[#9E4848]'> {t('FAQSeccion.titulo')} <Image src={"/isologo-04.png"} width={40} height={20} alt="logo" className='h-[20px]' /> </div></div>
                    
            <div className='flex flex-row w-full'>
              <div className='w-1/2'>
              <FAQSection faqs={toQA(oddIndex)} />
              </div>
              <div className="w-1/2">
              <FAQSection faqs={toQA(evenIndex)} />
              </div>

            </div>
          </div>
          </div>
        </div>
      </BoxSection>
    </SnapScrolling>
  )
}

export const metadata = {
  title: "Peru Destino Seguro",
  description: "**",
}
