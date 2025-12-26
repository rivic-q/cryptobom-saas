export function RivicLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="flex items-center gap-3">
        {/* Rivic Logo with Quantum Symbol */}
        <div className="relative">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400 via-orange-400 to-blue-600 flex items-center justify-center shadow-lg">
            <span className="text-2xl font-bold text-white">R</span>
            {/* Quantum Atom Symbol Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border border-yellow-300/40 rounded-full">
                <div className="relative w-full h-full">
                  <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-yellow-300 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute top-1/2 left-1/2 w-6 h-0.5 border-b border-yellow-300/60 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
                  <div className="absolute top-1/2 left-1/2 w-6 h-0.5 border-b border-yellow-300/60 transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-left">
          <div className="text-xl font-bold text-white">Rivic</div>
          <div className="text-xs text-cyan-400 font-medium tracking-wider">Quantum Safe Security</div>
        </div>
      </div>
    </div>
  )
}

export const LeLoLogo = RivicLogo
