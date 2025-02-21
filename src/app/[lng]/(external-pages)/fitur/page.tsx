import { RevealBento } from '@/components/gridDestino'
import SwitcherGlobal from '@/components/SwitcherGlobal'
import MotionElement from "@/components/clientExportElement"
import AgenciaForm from '@/components/formAgencio'
import { AccordionShad } from '@/components/accordionShad'
import { CarouselPrincipalShad } from '@/components/carouselPrincipalShad'
import { myFetch, APIBACK } from '@/lib/utils'
import { LocaleType } from '../../../../../i18next/settings'
import SnapScrolling from '@/components/macroComponent/snapScroll'
import { BoxSection } from '@/components/boxSection'
import { Highlight } from '@/components/ui/highlight'
import { CardStack } from '@/components/ui/card-stack'
import { BeakerIcon } from '@heroicons/react/24/solid'
import { createTranslation } from '../../../../../i18next'
import BlockRendererClient from '@/components/wsgyStrapi'
import { MotionImageComponent } from '@/components/componentsClient'
import Image from "next/image"
import { ThreeDCardDemo } from '@/components/macroComponent/imageAnimationCard'
import { FormAgenciar } from '@/components/macroComponent/formFitur'
import {CardPortada} from "@/components/anima/cardPortada"
import {CardDias} from "@/components/anima/cardDias"
import {TextClient} from "@/components/textClient"
import {SwitchAnimatedComponent} from "@/components/switchBox"
import {YouTubeEmbed} from "@/components/YoutubeEmbed"


type Props = {
  params: Promise<{
    lng: string
  }>
}

async function getPageData(slug: string, lng: LocaleType) {
  
  const instance = await myFetch("fitur", { locale: lng }, {})

 

  return {
    first: instance,
    // related: instance.items.map(ele=> ({language: ele.meta.locale,slug:ele.meta.slug})).concat(relatedLanguages)
  }

}

export default async function Fitur(props: Props) {
  const params = await props.params;
  


  const { t } = await createTranslation(params.lng, 'fitur');

 
  const CARDS = [
    {
      id: 0,
      name: "Manu Arora",
      designation: "Senior Software Engineer",
      content: (
        <p>
          These cards are amazing, <Highlight>I want to use them</Highlight> in my
          project. Framer motion is a godsend ngl tbh fam 🙏
        </p>
      ),
    },
    {
      id: 1,
      name: "Elon Musk",
      designation: "Senior Shitposter",
      content: (
        <p>
          I dont like this Twitter thing,{" "}
          <Highlight>deleting it right away</Highlight> because yolo. Instead, I
          would like to call it <Highlight>X.com</Highlight> so that it can easily
          be confused with adult sites.
        </p>
      ),
    },
    {
      id: 2,
      name: "Tyler Durden",
      designation: "Manager Project Mayhem",
      content: (
        <p>
          The first rule of
          <Highlight>Fight Club</Highlight> is that you do not talk about fight
          club. The second rule of
          <Highlight>Fight club</Highlight> is that you DO NOT TALK about fight
          club.
        </p>
      ),
    },
  ];


  const seccion3: any[] = t('Seccion3.beneficios', { returnObjects: true })
  const seccion3One = seccion3.slice(0, 3)
  const seccion3Two = seccion3.slice(3, 6)
  console.log(seccion3One)
  console.log(seccion3Two)
  return (
    
    <SnapScrolling>
      <BoxSection full animation="right" className="bg-gray-200">
        <div className="w-full flex flex-col lg:flex-row gap-y-10 lg:gap-y-0">
          <div className="w-full lg:w-1/2 lg:h-screen flex justify-center items-center  mt-10 lg:mt-0">
            <div className="max-w-[90%] lg:max-w-[80%] flex flex-col gap-y-5">
              <div className="flex lg:flex-row flex-col items-center gap-y-2"><Image src="/isologo-one.png" width={100} height={100} alt="aa" className="h-20" />
                <h1 className="text-black text-5xl  lg:text-6xl font-bold font-custom text-center ">   {t('Seccion1.titulo')}</h1></div>
              <div className="p-10 text-xs lg:text-base  mx-auto bg-white shadow-lg rounded-[20px] overflow-hidden flex flex-col justify-center items-center">
                <BlockRendererClient
                  content={t('Seccion1.parrafo', { returnObjects: true })}
                />
              </div>
            </div></div>
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="w-[80%] h-[70vh] lg:h-screen rounded-[20px] flex flex-col justify-center">

              {/*
              <MotionImageComponent src={APIBACK + t('Seccion1.image.url')} alt="aoe" fill className="object-cover rounded-[20px]" />
              */}

              <ThreeDCardDemo imgSrc={APIBACK + t('Seccion1.image.url')} />
            </div>
          </div>
        </div>
      </BoxSection>
      <BoxSection full animation="left" className="bg-[#4a0700]">
        <div className="w-full flex flex-col lg:flex-row gap-y-10 lg:gap-y-0">
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center mt-10 lg:mt-0">
            <div className="w-[80%] h-[70vh] lg:h-screen rounded-[20px] flex flex-col justify-center">
              <ThreeDCardDemo imgSrc={APIBACK + t('Seccion15.image.url')} />
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:h-screen flex justify-center items-center">
            <div className="max-w-[90%] lg:max-w-[80%] flex flex-col gap-y-5">

              <div className="flex flex-col-reverse lg:flex-row items-center">
                <h1 className="text-[#efb810]  text-5xl  lg:text-6xl font-bold font-custom text-center">
                {t('Seccion15.titulo')}</h1> 
                <Image src="/isologo-one.png" width={100} height={100} alt="aa" className="h-20" />
                </div>
              <div className="text-white text-xs lg:text-base  mx-auto p-3">
                <BlockRendererClient
                  content={t('Seccion15.parrafo', { returnObjects: true })}
                />
                <Image src={"/peruLogo.svg"} width={100} height={100} className="hidden"/>

              </div>

            </div>

          </div>

        </div>

      </BoxSection>

      <BoxSection full className="bg-[#efb810]">
        <div className="h-screen flex flex-col items-center justify-center w-full">
          <CardPortada/>
          {/* <CardDias /> */}
        </div>
      </BoxSection>
      <BoxSection half animation='scale' className="bg-gray-200">
        <div className="h-full flex flex-col justify-around lg:justify-start">
        <div className=" flex flex-col items-center justify-center w-full gap-y-10 lg:gap-y-6">
          <div className="text-black text-[35px] lg:text-[50px] font-bold flex flex-col lg:flex-row mt-4 items-center gap-x-4">
            <Image src={"/isologo-04.png"} width={100} height={73} alt="oaoe" />
            <div className="font-custom ">
              BENEFICIOS - VENTAJAS
            </div>
          </div>
          <div className="w-[60vw] h-20">
            <YouTubeEmbed  videoId="J4eLEY9fA9A" title="AAA"/>
          </div>
        </div>
        </div>

      </BoxSection>

        <BoxSection half animation='scale' className="bg-gray-200">
        <div className="h-[40rem] flex flex-col items-center justify-center w-full gap-y-10 lg:gap-y-6">
          <div className="text-black text-[35px] lg:text-[50px] font-bold flex flex-col lg:flex-row mt-4 items-center gap-x-4">

          </div>
          <div className="flex flex-row gap-x-10">
            {seccion3One.map((ele, idx) => (

              <div key={idx} className={`${idx == 1 ? "mt-5" : ""} ` + "w-[250px] h-[200px]  max-w-sm mx-auto bg-white shadow-lg rounded-[10px] overflow-hidden flex flex-col justify-center items-center gap-y-3"}>
                <div id="header" className="flex flex-row text-3xl font-semibold">  <span className="block"> <Image src={APIBACK + ele.logo.url} alt="ao" width={50} height={38} /></span> </div>
                <div id="body" className="text-[#4a0700] max-w-[150px] text-[1.3rem] font-semibold font-custom text-center"> {ele.beneficio} </div>
              </div>
            ))
            }

          </div>
          <div className="flex flex-row gap-x-10">
            {seccion3Two.map((ele, idx) => (
              <div key={idx} className={`${idx == 1 ? "mt-5" : ""} ` + "w-[250px] h-[200px]  max-w-sm mx-auto bg-white shadow-lg rounded-[10px] overflow-hidden flex flex-col justify-center items-center gap-y-3"}>
                <div id="header" className="flex flex-row text-3xl font-semibold"><span className="block"> <Image src={APIBACK + ele.logo.url} alt="ao" width={50} height={38} /></span> </div>
                <div id="body" className="text-[#4a0700] max-w-[150px] text-[1.3rem] font-semibold font-custom text-center"> {ele.beneficio} </div>
              </div>
            ))
            }
          </div>
        </div>

      </BoxSection>

      <BoxSection full animation='scale' className="bg-gray-200">
      <div className="w-full h-full flex flex-col lg:flex-row justify-center gap-y-10 lg:gap-y-0">
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center gap-y-6"> 
          <div className="w-[250px] flex flex-row gap-x-4">
          
          <div>
          
          <Image  src={"/formLogo.svg"} alt="" width={150} height={150}/>
          </div>

            <div>
          <TextClient text={"registerAndWorkwithUs"} lng={params.lng} seccion={"fitur"} className="font-custom text-[#4a0700] text-3xl font-bold"/>        
          </div>

          </div>

          <div className="flex flex-col gap-y-2 lg:gap-y-0 lg:flex-row">
          {[0,1,2].map((ele,idx)=>
          <Image key={idx} src={"/isologo-04.png"} alt="" width={100} height={100}/>
          )}
          </div>
        </div>
        <div className="w-full lg:w-1/2 bg-[#4a0700]  flex flex-row justify-around items-center"> 
            <Image src="/isologo-one.png" width={73} height={100} alt="aa" className="" />
           <FormAgenciar lng={params.lng} />
            <Image src="/isologo-one.png" width={73} height={100} alt="aa" className="" />
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
