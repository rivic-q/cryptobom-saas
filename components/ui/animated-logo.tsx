"use client"

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface AnimatedLogoProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedLogo: React.FC<AnimatedLogoProps> = ({
  children,
  className = "",
  delay = 0
}) => {
  const [isDrawn, setIsDrawn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDrawn(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Pencil sketch overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isDrawn ? 0.1 : 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        style={{
          background: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 1px,
              rgba(255,255,255,0.1) 1px,
              rgba(255,255,255,0.1) 2px
            ),
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 1px,
              rgba(255,255,255,0.05) 1px,
              rgba(255,255,255,0.05) 2px
            )
          `,
          backgroundSize: '20px 20px, 25px 25px',
          mixBlendMode: 'overlay'
        }}
      />
      
      {/* Content with drawing animation */}
      <motion.div
        initial={{ 
          filter: 'contrast(0.8) brightness(0.7) blur(0.5px)',
          transform: 'scale(0.95)'
        }}
        animate={{
          filter: isDrawn 
            ? 'contrast(1.1) brightness(1) blur(0px)' 
            : 'contrast(0.8) brightness(0.7) blur(0.5px)',
          transform: isDrawn ? 'scale(1)' : 'scale(0.95)'
        }}
        transition={{ 
          duration: 2,
          ease: "easeOut",
          delay: 0.2
        }}
      >
        {children}
      </motion.div>

      {/* Pencil stroke effect */}
      <motion.div
        className="absolute inset-0 border border-white/10 rounded pointer-events-none"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ 
          opacity: isDrawn ? 0.3 : 0,
          scale: isDrawn ? 1 : 0.9
        }}
        transition={{ duration: 1, delay: 1.5 }}
        style={{
          borderStyle: 'dashed',
          filter: 'drop-shadow(0px 1px 2px rgba(255,255,255,0.1))'
        }}
      />
    </motion.div>
  );
};

export default AnimatedLogo;
