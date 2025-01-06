"use client";

import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  ftImageSrc: string;
  title: string;
  fecha: string;
  time: string;
  slug: string;
  lng: string;
}

export default function CardSalidas({
  ftImageSrc,
  title,
  fecha,
  time,
  slug,
  lng,
}: Props) {
  const ImageMotion = motion(Image);
  const [dias, noches] = time.split("-");

  return (
    <Card className={cn("relative grid w-full lg:w-[425px] p-0 border rounded-lg")}>
      <Link href={`/${lng}/packages/${slug}`} className="cursor-pointer">
        <CardHeader className={cn(
          "m-0 w-full lg:h-[420px] min-h-[55vh] overflow-hidden"
        )}>
          <ImageMotion
            whileHover={{
              scale: 1.05,
              transition: { ease: "easeOut", duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
            src={ftImageSrc || ""}
            fill
            sizes="(max-width: 768px) 25vw, 50vw"
            alt="Card Image"
            className="object-cover"
          />
        </CardHeader>
      </Link>

      <CardContent className="p-2 flex flex-col items-start justify-center gap-y-3 pt-5">
        <h2 className={cn(
          "mb-0 text-black text-sm lg:text-[20px] font-medium text-center uppercase"
        )}>
          {title}
        </h2>
        <p className="text-sm lg:text-[20px] text-[#808080] font-normal">
          {fecha} - {dias} días {noches} noches
        </p>
        <div className="w-full flex flex-row justify-end">
          <Link href={`/${lng}/packages/${slug}`}>
            <button
              className={cn(
                "bg-[#D20000] px-3 py-1 text-white rounded-sm text-sm lg:text-[15px] font-semibold"
              )}
            >
              Ver Detalles
            </button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
