'use client'

import Image from 'next/image';

interface Props {
  imgSrc: string;
  txt: string;
}

export default function BackCard({ imgSrc, txt }: Props) {
  console.log(imgSrc);
  console.log(txt);

  return (
    <div className="relative grid h-[20rem] w-full max-w-[25rem] items-end justify-start overflow-hidden text-center lg:justify-center">
      <div className="absolute inset-0 h-full w-full">
        <Image
          src={imgSrc}
          sizes="(max-width: 768px) 50vw, 25vw"
          fill
          alt="Card Image"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      </div>
      <div className="relative z-10 ml-3 w-[20rem] p-1">
        <p className="mb-3 w-fit border-b-4 border-solid border-white text-left text-xl font-medium leading-[1.5] text-white lg:text-3xl">
          {txt}
        </p>
      </div>
    </div>
  );
}
