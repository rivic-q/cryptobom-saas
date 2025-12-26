"use client"

import React, { useState, useEffect } from 'react';

interface PencilArtImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export const PencilArtImage: React.FC<PencilArtImageProps> = ({
  src,
  alt,
  className = "",
  width = 300,
  height = 200
}) => {
  const [isDrawn, setIsDrawn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDrawn(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      {/* Background sketch effect */}
      <div 
        className={`absolute inset-0 bg-gray-100 transition-all duration-2000 ${
          isDrawn ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(0,0,0,0.1) 1px, transparent 1px),
            radial-gradient(circle at 80% 70%, rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(45deg, transparent 49%, rgba(0,0,0,0.05) 49%, rgba(0,0,0,0.05) 51%, transparent 51%)
          `,
          backgroundSize: '10px 10px, 15px 15px, 8px 8px'
        }}
      />
      
      {/* Main image */}
      <img
        src={src}
        alt={alt}
        className={`
          absolute inset-0 w-full h-full object-cover
          transition-all duration-3000 ease-out
          ${isDrawn 
            ? 'opacity-100 filter grayscale-0' 
            : 'opacity-0 filter grayscale blur-sm scale-105'
          }
        `}
        style={{
          filter: isDrawn 
            ? 'contrast(1.1) brightness(1.05) saturate(0.9)' 
            : 'contrast(0.8) brightness(0.7) saturate(0.3) blur(2px)',
          clipPath: isDrawn 
            ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
            : 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)'
        }}
      />
      
      {/* Pencil drawing overlay */}
      <div 
        className={`
          absolute inset-0 pointer-events-none
          transition-all duration-2000 ease-out
          ${isDrawn ? 'opacity-20' : 'opacity-0'}
        `}
        style={{
          background: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 1px,
              rgba(0,0,0,0.1) 1px,
              rgba(0,0,0,0.1) 2px
            ),
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 1px,
              rgba(0,0,0,0.05) 1px,
              rgba(0,0,0,0.05) 2px
            )
          `,
          backgroundSize: '20px 20px, 25px 25px',
          mixBlendMode: 'multiply'
        }}
      />
      
      {/* Border sketch effect */}
      <div 
        className={`
          absolute inset-0 border-2 border-gray-400
          transition-all duration-1500 ease-out
          ${isDrawn ? 'opacity-30' : 'opacity-0'}
        `}
        style={{
          borderImage: 'url("data:image/svg+xml,%3csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3e%3cpath d=\'m0,0 l100,0 l100,100 l0,100 z\' stroke=\'%23666\' stroke-width=\'2\' fill=\'none\' stroke-dasharray=\'5,3\'/%3e%3c/svg%3e") 2',
          filter: 'drop-shadow(0px 1px 2px rgba(0,0,0,0.1))'
        }}
      />
    </div>
  );
};

export default PencilArtImage;
