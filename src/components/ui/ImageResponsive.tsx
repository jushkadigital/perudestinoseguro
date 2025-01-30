'use client'
import { useMobile } from "@/hooks/useMobile";
import Image, { ImageProps } from "next/image";

interface ImageResponsiveProps extends Omit<ImageProps, "src"> {
  srcOptions: string[];
}

export const ImageResponsive = ({ srcOptions, ...props }: ImageResponsiveProps) => {
  const isMobile = useMobile()
  const src = srcOptions

  return <Image {...props} src={isMobile ? src[1]: src[0]} alt="" fill className={isMobile ? "object-cover":"object-cover"} />;
};