"use client"

import { useEffect, useState } from 'react'
import { responsive } from '@/lib/responsive-utils'

// Hook to detect device type and screen size
export function useResponsive() {
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
    height: typeof window !== 'undefined' ? window.innerHeight : 768,
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isTouch: false
  })

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      const isMobile = width < 768
      const isTablet = width >= 768 && width < 1024
      const isDesktop = width >= 1024
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0

      setScreenSize({
        width,
        height,
        isMobile,
        isTablet,
        isDesktop,
        isTouch
      })
    }

    // Initial setup
    updateScreenSize()

    // Listen for resize events
    window.addEventListener('resize', updateScreenSize)
    
    // Cleanup
    return () => window.removeEventListener('resize', updateScreenSize)
  }, [])

  return screenSize
}

// Responsive container component that adapts to different screen sizes
interface ResponsiveContainerProps {
  children: React.ReactNode
  className?: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

export function ResponsiveContainer({ 
  children, 
  className = '', 
  maxWidth = 'xl',
  padding = 'md' 
}: ResponsiveContainerProps) {
  const maxWidthClasses = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl', 
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    '2xl': 'max-w-8xl',
    full: 'max-w-full'
  }

  const paddingClasses = {
    none: '',
    sm: 'px-4 sm:px-6',
    md: 'px-4 sm:px-6 lg:px-8',
    lg: 'px-6 sm:px-8 lg:px-12'
  }

  return (
    <div className={`container mx-auto ${maxWidthClasses[maxWidth]} ${paddingClasses[padding]} ${className}`}>
      {children}
    </div>
  )
}

// Responsive grid component with auto-adjustment
interface ResponsiveGridProps {
  children: React.ReactNode
  columns?: {
    mobile?: number
    tablet?: number
    desktop?: number
  }
  gap?: 'sm' | 'md' | 'lg'
  className?: string
}

export function ResponsiveGrid({ 
  children, 
  columns = { mobile: 1, tablet: 2, desktop: 3 },
  gap = 'md',
  className = ''
}: ResponsiveGridProps) {
  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6 lg:gap-8',
    lg: 'gap-8 lg:gap-12'
  }

  const gridCols = `grid-cols-${columns.mobile} md:grid-cols-${columns.tablet} lg:grid-cols-${columns.desktop}`

  return (
    <div className={`grid ${gridCols} ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  )
}

// Responsive text component that scales properly
interface ResponsiveTextProps {
  children: React.ReactNode
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'body-lg' | 'body' | 'body-sm'
  className?: string
}

export function ResponsiveText({ 
  children, 
  variant, 
  className = ''
}: ResponsiveTextProps) {
  const variants = {
    h1: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold',
    h2: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold',
    h3: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold',
    h4: 'text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold',
    'body-lg': 'text-base sm:text-lg lg:text-xl',
    'body': 'text-sm sm:text-base lg:text-lg',
    'body-sm': 'text-xs sm:text-sm lg:text-base'
  }

  const baseClasses = `${variants[variant]} ${className}`

  if (variant === 'h1') {
    return <h1 className={baseClasses}>{children}</h1>
  }
  if (variant === 'h2') {
    return <h2 className={baseClasses}>{children}</h2>
  }
  if (variant === 'h3') {
    return <h3 className={baseClasses}>{children}</h3>
  }
  if (variant === 'h4') {
    return <h4 className={baseClasses}>{children}</h4>
  }

  return <p className={baseClasses}>{children}</p>
}

// Responsive button component with proper touch targets
interface ResponsiveButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  disabled?: boolean
  href?: string
  target?: string
}

export function ResponsiveButton({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  href,
  target
}: ResponsiveButtonProps) {
  const { isTouch } = useResponsive()

  const baseClasses = `
    inline-flex items-center justify-center font-medium rounded-lg 
    transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 
    focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed
    ${isTouch ? 'min-h-[44px] min-w-[44px]' : ''}
  `

  const variants = {
    primary: 'bg-white hover:bg-gray-200 text-black shadow-lg hover:shadow-xl transform hover:scale-105',
    secondary: 'bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg hover:shadow-cyan-500/20',
    outline: 'border border-white/20 text-white hover:bg-white/10 hover:border-white/40',
    ghost: 'text-white hover:bg-white/10'
  }

  const sizes = {
    sm: 'px-3 py-2 text-xs sm:text-sm',
    md: 'px-4 py-2.5 text-sm sm:text-base lg:px-6',
    lg: 'px-6 py-3 text-base sm:text-lg lg:px-8 lg:py-4'
  }

  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <a 
        href={href} 
        target={target}
        className={buttonClasses}
        onClick={onClick}
      >
        {children}
      </a>
    )
  }

  return (
    <button 
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

// Responsive card component
interface ResponsiveCardProps {
  children: React.ReactNode
  className?: string
  padding?: 'sm' | 'md' | 'lg'
  hover?: boolean
}

export function ResponsiveCard({ 
  children, 
  className = '',
  padding = 'md',
  hover = true
}: ResponsiveCardProps) {
  const paddingSizes = {
    sm: 'p-4 sm:p-5',
    md: 'p-4 sm:p-6 lg:p-8', 
    lg: 'p-6 sm:p-8 lg:p-12'
  }

  const hoverClasses = hover 
    ? 'hover:bg-white/10 hover:border-white/20 hover:scale-105 transform transition-all duration-300' 
    : ''

  return (
    <div className={`
      bg-white/5 border border-white/10 rounded-lg sm:rounded-xl lg:rounded-2xl
      ${paddingSizes[padding]} ${hoverClasses} ${className}
    `}>
      {children}
    </div>
  )
}

// Responsive section wrapper
interface ResponsiveSectionProps {
  children: React.ReactNode
  className?: string
  padding?: 'sm' | 'md' | 'lg' | 'xl'
  background?: 'transparent' | 'dark' | 'darker' | 'gradient'
}

export function ResponsiveSection({ 
  children, 
  className = '',
  padding = 'lg',
  background = 'transparent'
}: ResponsiveSectionProps) {
  const paddingSizes = {
    sm: 'py-8 sm:py-12',
    md: 'py-12 sm:py-16', 
    lg: 'py-12 sm:py-16 lg:py-20',
    xl: 'py-16 sm:py-20 lg:py-24 xl:py-32'
  }

  const backgrounds = {
    transparent: '',
    dark: 'bg-gray-900',
    darker: 'bg-black',
    gradient: 'bg-gradient-to-b from-gray-950 to-black'
  }

  return (
    <section className={`${paddingSizes[padding]} ${backgrounds[background]} ${className}`}>
      {children}
    </section>
  )
}

// Export all components
export {
  ResponsiveContainer as Container,
  ResponsiveGrid as Grid,
  ResponsiveText as Text,
  ResponsiveButton as Button,
  ResponsiveCard as Card,
  ResponsiveSection as Section
}
