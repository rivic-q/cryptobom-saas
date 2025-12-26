export function RivicLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <img src="/images/rivic.png" alt="Rivic - Quantum Safe Security" className="h-10 w-auto" />
    </div>
  )
}

export const LeLoLogo = RivicLogo
