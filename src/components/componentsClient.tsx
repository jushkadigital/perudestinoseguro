'use client';

import { motion, MotionProps } from 'motion/react';
import Image, { ImageProps } from 'next/image';
import React from 'react';

type MotionImageProps = Omit<ImageProps, 'ref'> & MotionProps;

// Exported Component
export const MotionImageComponent = (props: MotionImageProps) => {
  const MotionImage = motion(Image);
  return (
    <MotionImage
      {...props}
      
      whileTap={{ scale: 0.9 }}
    />
  );
};
