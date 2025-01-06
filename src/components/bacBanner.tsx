'use client'

import { useMobile } from "@/hooks/useMobile";
import Image from 'next/image';

interface Props {
  imgSrc: string;
  txt: string;
  miniText?: string;
}

export default function BackBanner({ imgSrc, txt, miniText }: Props) {
  console.log(imgSrc);

  return (
    <div className="relative grid lg:h-[20rem] h-[50vh] w-full items-center justify-center overflow-hidden text-center bg-transparent">
      <div className="absolute inset-0">
        <Image
          src={imgSrc}
          fill
          alt="Banner Image"
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center p-4">
        <h1 className="mb-3 w-fit border-b-2 border-solid border-red-700 text-left text-[36px] font-semibold leading-[1.5] text-white lg:text-[40px]">
          {txt}
        </h1>
        {miniText && (
          <p className="text-[30px] font-semibold text-white">
            {miniText}
          </p>
        )}
      </div>
    </div>
  );
}
