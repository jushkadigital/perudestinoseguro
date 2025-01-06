"use client";


import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { StarIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { cn } from "@/lib/utils";

interface Props {
  imgSrc: string;
  title: string;
  price: string;
  slug: string;
  time: string;
  lng: string;
  classNamePlus?: string;
}

export default function ProfileCard({
  imgSrc,
  title,
  price,
  slug,
  time,
  lng,
  classNamePlus = "lg:min-h-[585px] min-h-[55vh]",
}: Props) {
  let rawTime: string[] = [];

  try {
    rawTime = time.split("-");
  } catch (error) {
    rawTime = [undefined, undefined];
  }

  const [dias, noches] = rawTime;
  const ImageMotion = motion(Image);

  return (
    <Card
      className={cn(
        "relative grid w-full lg:w-[425px] p-0 overflow-hidden",
        classNamePlus
      )}
    >
      <Link href={`/${lng}/packages/${slug}`} className="block">
        <CardHeader className="relative w-full h-full cursor-pointer">
          <ImageMotion
            src={imgSrc}
            alt="profile-picture"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            className="object-cover"
            whileHover={{
              scale: 1.05,
              transition: { ease: "easeOut", duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
          />
        </CardHeader>
      </Link>

      <CardContent className="text-center p-3">
        <div className="flex flex-row justify-between lg:mb-2 lg:text-[15px] font-normal text-gray-800">
          <div className="flex items-center">
            <MapPinIcon className="w-5 pb-1 inline-block text-gray-500" /> Peru
          </div>
          <div>
            {Array(3)
              .fill(null)
              .map((_, idx) => (
                <StarIcon
                  key={idx}
                  className="w-5 pb-1 inline-block text-red-500"
                />
              ))}
          </div>
        </div>

        <h2 className="mb-2 lg:mb-2 lg:text-[20px] text-[18px] font-bold text-gray-800">
          {title}
        </h2>

        <div className="flex flex-col lg:flex-row justify-between font-bold lg:text-4xl text-xl text-black">
          <div className="mb-2 lg:mb-0 flex flex-row lg:flex-col justify-center items-start">
            <span className="lg:text-[12px] text-gray-500 text-left lg:h-[18px] font-normal">
              Desde
            </span>
            <span className="lg:text-[25px] text-blue-500 lg:h-[22px] font-semibold">
              USD ${price}
            </span>
          </div>
          <span className="text-start lg:text-center text-gray-500 text-[10px] lg:text-[12px] text-semibold lg:font-normal">
            <CalendarIcon className="w-5 pb-1 inline-block text-red-500" /> {dias} Días / {noches} Noches
          </span>
        </div>
      </CardContent>

      <CardFooter className="flex justify-center lg:gap-3 lg:pt-2 pb-6">
        <Link
          href={`/${lng}/packages/${slug}`}
          className="bg-red-600 text-white border rounded-md font-semibold lg:text-[24px] h-16 px-3 leading-[64px] text-center"
        >
          Ver Detalle
        </Link>
      </CardFooter>
    </Card>
  );
}
