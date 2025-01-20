import * as React from "react";

interface ImageDisplayProps {
  imageSrc: string;
  imageAlt: string;
}

export const ImageDisplay: React.FC<ImageDisplayProps> = ({
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className="flex overflow-hidden flex-col px-14 pt-7 pb-12 bg-white max-md:px-5">
      <img
        loading="lazy"
        src={imageSrc}
        alt={imageAlt}
        className="object-contain w-full aspect-[0.63] max-md:max-w-full"
      />
    </div>
  );
};
