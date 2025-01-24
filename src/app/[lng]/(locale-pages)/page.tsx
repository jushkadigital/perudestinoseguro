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
        <div className='w-full flex flex-col justify-center items-center'>
    <div>Estamos Trabajando</div>
    <Image src={"/peruLogo.svg"} height={250}  width={250} alt="aoe"/>
    </div>

  )
}

export const metadata = {
  title: "Peru Destino Seguro",
  description: "**",
}
