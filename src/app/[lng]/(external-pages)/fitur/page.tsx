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


type Props = {
  params: Promise<{
    lng: string
  }>
}

async function getPageData(slug: string, lng: LocaleType) {

  const instance = await myFetch("fitur", { locale: lng }, {})

  // const idInstance = instance.items[0].id

  // const related = await getInicioPage({translation_of:idInstance})

  // const relatedLanguages = related.items.map(ele=> ({language: ele.meta.locale,slug:ele.meta.slug}))


  return {
    first: instance,
    // related: instance.items.map(ele=> ({language: ele.meta.locale,slug:ele.meta.slug})).concat(relatedLanguages)
  }

}

export default async function Fitur(props: Props) {
  const params = await props.params;
  // let paquetes: any[] = await getAllPaquetes()
  // paquetes = paquetes.reverse()
  // // paquetes = paquetes.map(ele => ele.acf).reverse()

  // let destinos: any[] = await getAllDestinos()
  // destinos = destinos.map(ele => ele.acf).reverse()

  // let imgCarousels: any[] = await getAllImgCarousel()
  // imgCarousels = imgCarousels.map(ele => ele.acf)

  // let pregFrecuents: any[] = await getAllPregFrecuentes()
  // pregFrecuents = pregFrecuents.map(ele => ele.acf).reverse()
  // // console.log(paquetes)
  // console.log(imgCarousels);
  // console.log(pregFrecuents);



  const { t } = await createTranslation(params.lng, 'fitur')



  // const dataGeneral = await getInicioPage()

  // const instance =  await myFetch("inicio",{locale:lng},{})

  // const paquetes = await getPaquetes(['featuredImage','precio','duracion'])

  // const paquetes = await getPaquete({fields:"featuredImage,precio,duracion",locale:params.lng,sss:"nocampaing",sender:"2"})
  // console.log(dataGeneral)
  // const gallery = 
  // const gallery = dataGeneral.galleryInicio.map(ele=>({img:ele.image.meta.download_url,titulo:ele.carouselTitulo,duracion:ele.carouselDuracion}))


  // const { first} = await getPageData("inicio",params.lng)

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



  // const seccion1 = t('Seccion1',{returnObjects:true})
  return (
    <SnapScrolling>
      <BoxSection full className="bg-[#efb810]">
        <div className="w-full flex flex-row">
          <div className="w-1/2 h-screen flex justify-center items-center">
            <div className="max-w-[80%] flex flex-col gap-y-5">
              <div className="flex flex-row"><Image src="/isologo-two.png" width={100} height={100} alt="aa" className="h-20" /> <h1 className="text-[#4A0700]  text-6xl font-black">   {t('Seccion1.titulo')}</h1></div>
              <div className="p-10  mx-auto bg-gray-200 shadow-lg rounded-[20px] overflow-hidden flex flex-col justify-center items-center">
                <BlockRendererClient
                  content={t('Seccion1.parrafo', { returnObjects: true })}
                />

              </div>

            </div></div>
          <div className="w-1/2 flex justify-center items-center">
            <div className="relative w-[80%] h-[75%] rounded-[20px]">
              <MotionImageComponent src={APIBACK + t('Seccion1.image.url')} alt="aoe" fill className="object-cover rounded-[20px]" />
            </div>
          </div>
        </div>
      </BoxSection>
      <BoxSection full className="bg-[#4a0700]">
        <div className="w-full flex flex-row">
          <div className="w-1/2 flex flex-col justify-center items-center">
            <div className="relative w-[80%] h-[75%] rounded-[20px]">
              <MotionImageComponent src={APIBACK + t('Seccion15.image.url')} alt="aoe" fill className="object-cover rounded-[20px]" />
            </div>
          </div>
          <div className="w-1/2 h-screen flex justify-center items-center">
            <div className="max-w-[80%] flex flex-col gap-y-5">

              <div className="flex flex-row"><h1 className="text-[#efb810]  text-6xl font-black"> {t('Seccion15.titulo')}</h1>  <Image src="/isologo-one.png" width={100} height={100} alt="aa" className="h-20" /> </div>
              <div className="text-white">
                <BlockRendererClient
                  content={t('Seccion15.parrafo', { returnObjects: true })}
                />

              </div>

            </div></div>

        </div>

      </BoxSection>

      <BoxSection full className="bg-[#efb810]">
        <div className="h-[40rem] flex flex-col items-center justify-center w-full">
          <div className="text-[#4a0700]">
            Itinerarios
          </div>
          <CardStack items={CARDS} />
        </div>
      </BoxSection>
      <BoxSection full className="bg-[#a0a0a0]">
        <div className="h-[40rem] flex flex-col items-center justify-center w-full">
          <div className="text-black text-[50px] font-bold">
            Beneficios PDS
          </div>
          <div className="flex flex-row gap-x-10">
            {[0, 1, 2].map((ele, idx) => (
              <div className={`${idx == 1 ? "mt-5" : ""} ` + "w-[250px] h-[100px] max-w-sm mx-auto bg-white shadow-lg rounded-[10px] overflow-hidden flex flex-col justify-center items-center"}>
                <div id="header" className="flex flex-row text-3xl font-semibold"> <BeakerIcon className="size-6 text-[#4a0700] block" /> <span className="block"> title</span> </div>
                <div id="body" className="font-light"> descrpicion </div>
              </div>
            ))
            }

          </div>
          <div className="flex flex-row gap-x-10">
            {[0, 1, 2].map((ele, idx) => (
              <div className={`${idx == 1 ? "mt-5" : ""} ` + "w-[250px] h-[100px] max-w-sm mx-auto bg-white shadow-lg rounded-[10px] overflow-hidden flex flex-col justify-center items-center"}>
                <div id="header" className="flex flex-row text-3xl font-semibold"> <BeakerIcon className="size-6 text-[#4a0700] block" /> <span className="block"> title</span> </div>
                <div id="body" className="font-light"> descrpicion </div>
              </div>
            ))
            }

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
