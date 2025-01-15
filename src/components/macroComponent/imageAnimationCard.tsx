"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

export const ThreeDCardDemo = ({imgSrc}:{imgSrc:string})=> {
  return (
    <CardContainer className="inter-var w-full h-[70vh] lg:h-[80vh]">
      <CardBody className="bg-gray-200 relative group/card  border-black/[0.1] w-full  h-full rounded-xl  border  ">
        <CardItem translateZ="100" className="w-full h-full">
          <Image
            src={imgSrc}
            fill
            className=" object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
