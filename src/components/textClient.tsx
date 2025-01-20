'use client'
import { useTranslation } from '../../i18next/client'

interface Props {
  text: string,
  lng: string,
  seccion: string
}

export const TextClient = ({text,lng,seccion,className}:Props)=>{
  const {t} = useTranslation(lng,seccion)
  return <div className={className}> {t(text)} </div> 
}
