"use client"

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface AnimatedPencilImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  delay?: number;
}

export const AnimatedPencilImage: React.FC<AnimatedPencilImageProps> = ({
  src,
  alt,
  className = "",
  width = 300,
  height = 200,
  delay = 0
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            setTimeout(() => setIsDrawing(true), delay);
          }, 200);
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = canvasRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay]);

  return (
    <div 
      className={`relative overflow-hidden rounded-lg ${className}`}
      style={{ width, height }}
    >
      {/* Canvas for pencil effect */}
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className="absolute inset-0 w-full h-full"
      />
      
      {/* Background paper texture */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-gray-50"
        style={{
          background: `
            radial-gradient(circle at 30% 20%, rgba(0,0,0,0.02) 1px, transparent 1px),
            radial-gradient(circle at 70% 80%, rgba(0,0,0,0.02) 1px, transparent 1px),
            linear-gradient(90deg, transparent 98%, rgba(0,0,0,0.03) 100%)
          `,
          backgroundSize: '8px 8px, 12px 12px, 40px 40px'
        }}
      />

      {/* Main image with pencil filter */}
      <motion.img
        ref={imageRef}
        src={src}
        alt={alt}
        initial={{ 
          opacity: 0,
          scale: 1.05,
          filter: 'contrast(0.5) brightness(0.8) saturate(0)'
        }}
        animate={{
          opacity: isDrawing ? 1 : 0,
          scale: isDrawing ? 1 : 1.05,
          filter: isDrawing 
            ? 'contrast(1.2) brightness(0.9) saturate(0.1) sepia(0.1)' 
            : 'contrast(0.5) brightness(0.8) saturate(0)'
        }}
        transition={{ 
          duration: 2.5,
          ease: "easeOut",
          delay: 0.3
        }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Pencil stroke overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isDrawing ? 0.15 : 0 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            repeating-linear-gradient(
              30deg,
              transparent,
              transparent 0.5px,
              rgba(0,0,0,0.1) 0.5px,
              rgba(0,0,0,0.1) 1px,
              transparent 1px,
              transparent 3px
            ),
            repeating-linear-gradient(
              120deg,
              transparent,
              transparent 0.5px,
              rgba(0,0,0,0.05) 0.5px,
              rgba(0,0,0,0.05) 1px,
              transparent 1px,
              transparent 4px
            )
          `,
          backgroundSize: '15px 15px, 20px 20px',
          mixBlendMode: 'multiply'
        }}
      />

      {/* Drawing reveal effect */}
      <motion.div
        initial={{ 
          clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)'
        }}
        animate={{
          clipPath: isDrawing 
            ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
            : 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)'
        }}
        transition={{ 
          duration: 2,
          ease: "easeInOut",
          delay: 0.5
        }}
        className="absolute inset-0 bg-white opacity-80"
      />

      {/* Pencil trail animation */}
      <motion.div
        initial={{ 
          x: '-100%',
          y: '-100%',
          opacity: 0
        }}
        animate={{
          x: isDrawing ? '100%' : '-100%',
          y: isDrawing ? '100%' : '-100%',
          opacity: isDrawing ? [0, 1, 0] : 0
        }}
        transition={{
          duration: 1.8,
          delay: 0.3,
          ease: "easeInOut"
        }}
        className="absolute w-2 h-2 bg-gray-600 rounded-full blur-sm opacity-60"
        style={{
          background: 'radial-gradient(circle, rgba(0,0,0,0.3) 0%, transparent 70%)'
        }}
      />

      {/* Final sketch border */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ 
          opacity: isDrawing ? 0.3 : 0,
          scale: isDrawing ? 1 : 0.95
        }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute inset-0 border-2 border-gray-500 rounded-lg border-dashed"
        style={{
          filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.1))'
        } as React.CSSProperties}
      />
    </div>
  );
};

export default AnimatedPencilImage;
