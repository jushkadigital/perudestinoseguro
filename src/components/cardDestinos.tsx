
'use client';

// import { cn } from "@";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { MapPinIcon, StarIcon } from "@heroicons/react/24/solid";
import { useTranslation } from "../../i18next/client";

interface Props {
  imgSrc: string;
  txt1: string;
  txt2: string;
  slug: string;
  lng: string;
}

export default function CardDestinos({ imgSrc, txt1, txt2, slug, lng }: Props) {
  const { t } = useTranslation(lng, "translation");
  const ImageMotion = motion(Image);

  return (
    <Card className={("relative grid w-full lg:w-[425px] p-0 border rounded-lg")}>
      <Link href={`/${lng}/tour/${slug}`} className="cursor-pointer">
        <CardHeader className="relative m-0 w-full lg:h-[420px] min-h-[40vh] overflow-hidden">
          <ImageMotion
            src={imgSrc}
            alt="Destination Image"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            whileHover={{ scale: 1.05, transition: { ease: "easeOut", duration: 1 } }}
            whileTap={{ scale: 0.9 }}
          />
        </CardHeader>
      </Link>
      <CardContent className="text-center p-3">
        <div className="flex flex-row justify-between lg:mb-2 text-gray-800">
          <div>
            <MapPinIcon className="w-5 pb-1 inline-block" color="#838383" /> Peru
          </div>
          <div>
            {Array(3).fill(0).map((_, index) => (
              <StarIcon key={index} className="w-5 pb-1 inline-block" color="#D20000" />
            ))}
          </div>
        </div>
        <h2 className="lg:mb-2 lg:text-[20px] text-md font-bold text-[#424242]">
          {txt1}
        </h2>
        <div className="flex flex-row justify-between font-bold lg:text-4xl text-xl text-black">
          <div className="flex flex-col">
            <span className="lg:text-[12px] text-[#838383] text-left lg:h-[18px] font-normal capitalize">
              {t('tours.from')}
            </span>
            <span className="lg:text-[25px] text-[#00AFD5] lg:h-[22px] font-semibold">
              USD ${txt2}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center lg:gap-3 lg:pt-2 pb-[25px]">
        <Link href={`/${lng}/tour/${slug}`} className="bg-[#D20000] text-white border rounded-md font-semibold lg:text-[24px] h-16 px-3 flex items-center justify-center">
          {t('tours.booking')}
        </Link>
      </CardFooter>
    </Card>
  );
}
