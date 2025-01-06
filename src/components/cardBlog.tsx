"use client";

import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Props {
  ftImageSrc: string;
  title: string;
  txtDescription: string;
  type: number;
  slug: string;
  lng: string;
}

export default function CardBlog({ ftImageSrc, title, txtDescription, type, slug, lng }: Props) {
  const ImageMotion = motion(Image);

  switch (type) {
    case 1:
      return (
        <Card className="relative w-full max-w-[22rem] lg:max-w-[28rem] border rounded-lg">
          <Link href={`/${lng}/blogs/${slug}`}>
            <CardHeader className="relative w-full h-[25vh] lg:h-[30vh] cursor-pointer overflow-hidden">
              <ImageMotion
                whileHover={{ scale: 1.05, transition: { ease: "easeOut", duration: 1 } }}
                whileTap={{ scale: 0.9 }}
                src={ftImageSrc || ""}
                fill
                sizes="(max-width: 768px) 25vw, 50vw"
                alt="Featured Image"
                className="object-cover"
              />
            </CardHeader>
          </Link>
          <CardContent className="p-4">
            <h3 className="mb-2 text-lg font-semibold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-600">{txtDescription}</p>
          </CardContent>
        </Card>
      );

    case 2:
      return (
        <Card className="flex flex-col lg:flex-row w-full max-w-[36rem]">
          <Link href={`/${lng}/blogs/${slug}`}>
            <CardHeader className="relative w-full lg:w-[15vw] h-[25vh] lg:h-[30vh] cursor-pointer overflow-hidden">
              <ImageMotion
                whileHover={{ scale: 1.05, transition: { ease: "easeOut", duration: 1 } }}
                whileTap={{ scale: 0.9 }}
                src={ftImageSrc || ""}
                fill
                sizes="(max-width: 768px) 25vw, 50vw"
                alt="Featured Image"
                className="object-cover"
              />
            </CardHeader>
          </Link>
          <CardContent className="p-4">
            <h3 className="mb-2 text-lg font-semibold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-600">{txtDescription}</p>
          </CardContent>
        </Card>
      );

    case 3:
      return (
        <Card className="w-full max-w-[44rem] mx-auto">
          <CardContent className="p-4">
            <h3 className="mb-2 text-lg font-semibold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-600">{txtDescription}</p>
          </CardContent>
        </Card>
      );

    case 4:
      return (
        <Card className="relative w-full max-w-[35rem] border rounded-lg mx-auto">
          <Link href={`/${lng}/blogs/${slug}`}>
            <CardHeader className="relative w-full h-[30vh] lg:h-[40vh] cursor-pointer overflow-hidden">
              <ImageMotion
                whileHover={{ scale: 1.05, transition: { ease: "easeOut", duration: 1 } }}
                whileTap={{ scale: 0.9 }}
                src={ftImageSrc || ""}
                fill
                sizes="(max-width: 768px) 25vw, 50vw"
                alt="Featured Image"
                className="object-cover"
              />
            </CardHeader>
          </Link>
          <CardContent className="flex flex-col items-center justify-center gap-3 bg-gray-100 p-6">
            <h3 className="mb-2 text-lg font-semibold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-600">{txtDescription}</p>
          </CardContent>
        </Card>
      );

    default:
      return null;
  }
}
