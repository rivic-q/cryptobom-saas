// Standardized responsive design utilities for CryptoBOM SaaS
// Ensures consistent breakpoints across all components

export const breakpoints = {
  mobile: '320px',
  mobileLarge: '425px', 
  tablet: '768px',
  tabletLarge: '1024px',
  desktop: '1280px',
  desktopLarge: '1440px',
  ultraWide: '1920px'
} as const

// Responsive spacing utilities
export const spacing = {
  // Mobile-first padding/margin classes
  section: {
    mobile: 'py-8 px-4',
    tablet: 'sm:py-12 sm:px-6', 
    desktop: 'lg:py-16 lg:px-8',
    large: 'xl:py-20'
  },
  container: {
    mobile: 'container mx-auto',
    tablet: 'max-w-4xl',
    desktop: 'lg:max-w-6xl',
    large: 'xl:max-w-7xl'
  },
  grid: {
    mobile: 'grid grid-cols-1',
    tablet: 'md:grid-cols-2',
    desktop: 'lg:grid-cols-3',
    large: 'xl:grid-cols-4'
  },
  gap: {
    mobile: 'gap-4',
    tablet: 'sm:gap-6',
    desktop: 'lg:gap-8',
    large: 'xl:gap-10'
  }
} as const

// Typography responsive classes
export const typography = {
  heading: {
    h1: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl',
    h2: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl',
    h3: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl',
    h4: 'text-lg sm:text-xl md:text-2xl lg:text-3xl',
  },
  body: {
    large: 'text-base sm:text-lg lg:text-xl',
    normal: 'text-sm sm:text-base lg:text-lg', 
    small: 'text-xs sm:text-sm lg:text-base'
  }
} as const

// Component sizing utilities
export const sizing = {
  button: {
    small: 'px-3 py-2 text-xs sm:text-sm',
    medium: 'px-4 py-2.5 text-sm sm:text-base',
    large: 'px-6 py-3 text-base sm:text-lg lg:px-8 lg:py-4'
  },
  card: {
    padding: 'p-4 sm:p-6 lg:p-8',
    border: 'border border-white/10 rounded-lg sm:rounded-xl lg:rounded-2xl'
  },
  icon: {
    small: 'w-4 h-4 sm:w-5 sm:h-5',
    medium: 'w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7',
    large: 'w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12'
  }
} as const

// Layout utilities for different screen sizes
export const layouts = {
  // Flex utilities
  flexCenter: 'flex items-center justify-center',
  flexBetween: 'flex items-center justify-between',
  flexCol: 'flex flex-col',
  flexColCenter: 'flex flex-col items-center justify-center',
  
  // Grid utilities with responsive breakpoints
  autoGrid: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  evenGrid2: 'grid grid-cols-1 md:grid-cols-2',
  evenGrid3: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  evenGrid4: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  
  // Responsive visibility
  mobileOnly: 'block sm:hidden',
  tabletUp: 'hidden sm:block',
  desktopOnly: 'hidden lg:block',
  tabletOnly: 'hidden sm:block lg:hidden'
} as const

// Responsive component patterns
export const patterns = {
  // Hero section responsive layout
  heroSection: `${spacing.section.mobile} ${spacing.section.tablet} ${spacing.section.desktop} ${spacing.section.large} min-h-screen flex flex-col justify-between`,
  
  // Standard content section
  contentSection: `${spacing.section.mobile} ${spacing.section.tablet} ${spacing.section.desktop}`,
  
  // Container with max width
  mainContainer: `${spacing.container.mobile} ${spacing.container.tablet} ${spacing.container.desktop} ${spacing.container.large}`,
  
  // Card component
  card: `${sizing.card.padding} ${sizing.card.border} bg-white/5 hover:bg-white/10 transition-all duration-300`,
  
  // Responsive text
  headingPrimary: `${typography.heading.h1} font-bold text-white mb-4 sm:mb-6 lg:mb-8`,
  headingSecondary: `${typography.heading.h2} font-bold text-white mb-3 sm:mb-4 lg:mb-6`,
  bodyText: `${typography.body.normal} text-gray-300 leading-relaxed`,
  
  // Button variations
  buttonPrimary: `${sizing.button.large} bg-white hover:bg-gray-200 text-black font-medium rounded-lg transition-all duration-200`,
  buttonSecondary: `${sizing.button.large} border border-gray-600 text-white hover:bg-gray-800 bg-transparent font-medium rounded-lg transition-all duration-200`
} as const

// Device-specific optimizations
export const deviceOptimizations = {
  // Touch-friendly sizing for mobile
  touchTarget: 'min-h-[44px] min-w-[44px]', // iOS/Android minimum touch target
  
  // Prevent zoom on input focus (mobile)
  inputText: 'text-base sm:text-sm', // 16px base prevents zoom on iOS
  
  // Safe area considerations for mobile
  safeArea: 'px-4 sm:px-6 lg:px-8',
  
  // Optimized scrolling
  scrollContainer: 'overflow-y-auto overscroll-contain',
  
  // Performance optimizations
  gpuAccelerated: 'transform-gpu',
  willChange: 'will-change-transform'
} as const

// Accessibility helpers with responsive considerations
export const a11y = {
  // Focus states that work across devices
  focusRing: 'focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900',
  
  // Screen reader utilities
  srOnly: 'sr-only',
  
  // High contrast mode support
  highContrast: 'contrast-more:border-white contrast-more:text-white',
  
  // Reduced motion support
  reducedMotion: 'motion-reduce:transition-none motion-reduce:transform-none'
} as const

// Export combined utility for easy importing
export const responsive = {
  breakpoints,
  spacing,
  typography,
  sizing,
  layouts,
  patterns,
  deviceOptimizations,
  a11y
} as const

export default responsive
