import * as React from "react";
import { ImageDisplay } from "./ImageDisplay";

export const ImageDisplayContainer: React.FC = () => {
  return (
    <ImageDisplay
      imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a26f567c-95f6-4854-a6c7-cd5e68080834?placeholderIfAbsent=true&apiKey=33186bc61f9d4fe383d297825b115fb4"
      imageAlt="Main display image"
    />
  );
};
