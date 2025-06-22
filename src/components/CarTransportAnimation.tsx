
import React from 'react';

export const CarTransportAnimation = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Light luxury background with subtle gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white/50 to-cyan-50/20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/20 to-transparent animate-shimmer"></div>
      
      {/* Floating light orbs for luxury atmosphere */}
      <div className="absolute top-10 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-cyan-200/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-gradient-to-br from-purple-200/20 to-blue-200/15 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-gradient-to-br from-cyan-200/25 to-blue-200/15 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute top-20 right-10 w-28 h-28 bg-gradient-to-br from-blue-200/20 to-white/30 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
      
      {/* Main truck animation - larger and more prominent with FULL OPACITY */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="animate-float w-full max-w-5xl">
          <svg
            width="800"
            height="300"
            viewBox="0 0 800 300"
            className="w-full h-full opacity-90"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Professional truck design with visible, bold styling */}
            
            {/* Main truck trailer with strong gradient */}
            <rect
              x="100"
              y="150"
              width="450"
              height="60"
              fill="url(#strongTrailerGradient)"
              rx="12"
              className="drop-shadow-lg"
            />
            
            {/* Truck cab with bold design */}
            <rect
              x="520"
              y="110"
              width="120"
              height="100"
              fill="url(#strongCabGradient)"
              rx="15"
              className="drop-shadow-lg"
            />
            
            {/* Windshield with clear glass effect */}
            <rect
              x="535"
              y="125"
              width="90"
              height="50"
              fill="url(#clearGlassGradient)"
              rx="8"
              className="drop-shadow-md"
            />
            
            {/* Bold visible wheels */}
            <circle cx="150" cy="225" r="22" fill="url(#boldWheelGradient)" className="drop-shadow-lg" />
            <circle cx="150" cy="225" r="15" fill="#e2e8f0" />
            <circle cx="150" cy="225" r="8" fill="url(#boldRimGradient)" />
            
            <circle cx="220" cy="225" r="22" fill="url(#boldWheelGradient)" className="drop-shadow-lg" />
            <circle cx="220" cy="225" r="15" fill="#e2e8f0" />
            <circle cx="220" cy="225" r="8" fill="url(#boldRimGradient)" />
            
            <circle cx="520" cy="225" r="22" fill="url(#boldWheelGradient)" className="drop-shadow-lg" />
            <circle cx="520" cy="225" r="15" fill="#e2e8f0" />
            <circle cx="520" cy="225" r="8" fill="url(#boldRimGradient)" />
            
            <circle cx="590" cy="225" r="22" fill="url(#boldWheelGradient)" className="drop-shadow-lg" />
            <circle cx="590" cy="225" r="15" fill="#e2e8f0" />
            <circle cx="590" cy="225" r="8" fill="url(#boldRimGradient)" />
            
            {/* Upper car platform with strong styling */}
            <rect
              x="115"
              y="80"
              width="420"
              height="18"
              fill="url(#boldPlatformGradient)"
              rx="8"
              className="drop-shadow-md"
            />
            
            {/* Strong support beams */}
            <rect x="180" y="98" width="6" height="52" fill="#94a3b8" rx="3" />
            <rect x="260" y="98" width="6" height="52" fill="#94a3b8" rx="3" />
            <rect x="340" y="98" width="6" height="52" fill="#94a3b8" rx="3" />
            <rect x="420" y="98" width="6" height="52" fill="#94a3b8" rx="3" />
            
            {/* Loading area - left side */}
            <rect
              x="20"
              y="160"
              width="80"
              height="40"
              fill="url(#loadingAreaGradient)"
              rx="8"
              className="drop-shadow-md opacity-80"
            />
            
            {/* Unloading area - right side */}
            <rect
              x="700"
              y="160"
              width="80"
              height="40"
              fill="url(#unloadingAreaGradient)"
              rx="8"
              className="drop-shadow-md opacity-80"
            />

            {/* Dynamic loading cars - moving from left to positions */}
            
            {/* Car Loading 1 - Blue car moving to bottom level position 1 */}
            <g style={{
              animation: 'loadCar1 8s ease-in-out infinite',
              transformOrigin: 'center'
            }}>
              <rect
                x="30"
                y="170"
                width="60"
                height="28"
                fill="url(#boldCar1Gradient)"
                rx="12"
                className="opacity-100"
              />
              <rect x="36" y="178" width="48" height="8" fill="url(#clearGlassGradient)" rx="4" />
              <circle cx="48" cy="205" r="6" fill="#64748b" />
              <circle cx="48" cy="205" r="4" fill="url(#boldRimGradient)" />
              <circle cx="72" cy="205" r="6" fill="#64748b" />
              <circle cx="72" cy="205" r="4" fill="url(#boldRimGradient)" />
            </g>
            
            {/* Car Loading 2 - Silver car moving to bottom level position 2 */}
            <g style={{
              animation: 'loadCar2 8s ease-in-out infinite',
              animationDelay: '1s',
              transformOrigin: 'center'
            }}>
              <rect
                x="30"
                y="170"
                width="60"
                height="28"
                fill="url(#boldCar2Gradient)"
                rx="12"
                className="opacity-100"
              />
              <rect x="36" y="178" width="48" height="8" fill="url(#clearGlassGradient)" rx="4" />
              <circle cx="48" cy="205" r="6" fill="#64748b" />
              <circle cx="48" cy="205" r="4" fill="url(#boldRimGradient)" />
              <circle cx="72" cy="205" r="6" fill="#64748b" />
              <circle cx="72" cy="205" r="4" fill="url(#boldRimGradient)" />
            </g>
            
            {/* Car Loading 3 - Gold car moving to top level position 1 */}
            <g style={{
              animation: 'loadCar3 8s ease-in-out infinite',
              animationDelay: '2s',
              transformOrigin: 'center'
            }}>
              <rect
                x="30"
                y="170"
                width="60"
                height="28"
                fill="url(#boldCar3Gradient)"
                rx="12"
                className="opacity-100"
              />
              <rect x="36" y="178" width="48" height="8" fill="url(#clearGlassGradient)" rx="4" />
              <circle cx="48" cy="205" r="6" fill="#64748b" />
              <circle cx="48" cy="205" r="4" fill="url(#boldRimGradient)" />
              <circle cx="72" cy="205" r="6" fill="#64748b" />
              <circle cx="72" cy="205" r="4" fill="url(#boldRimGradient)" />
            </g>

            {/* Dynamic unloading cars - moving from positions to right */}
            
            {/* Car Unloading 1 - Pearl car moving from top level position 2 to unloading area */}
            <g style={{
              animation: 'unloadCar1 8s ease-in-out infinite',
              animationDelay: '4s',
              transformOrigin: 'center'
            }}>
              <rect
                x="230"
                y="45"
                width="60"
                height="28"
                fill="url(#boldCar4Gradient)"
                rx="12"
                className="opacity-100"
              />
              <rect x="236" y="53" width="48" height="8" fill="url(#clearGlassGradient)" rx="4" />
              <circle cx="248" cy="80" r="6" fill="#64748b" />
              <circle cx="248" cy="80" r="4" fill="url(#boldRimGradient)" />
              <circle cx="272" cy="80" r="6" fill="#64748b" />
              <circle cx="272" cy="80" r="4" fill="url(#boldRimGradient)" />
            </g>
            
            {/* Car Unloading 2 - Red car moving from bottom level position 3 to unloading area */}
            <g style={{
              animation: 'unloadCar2 8s ease-in-out infinite',
              animationDelay: '5s',
              transformOrigin: 'center'
            }}>
              <rect
                x="310"
                y="115"
                width="60"
                height="28"
                fill="url(#boldCar5Gradient)"
                rx="12"
                className="opacity-100"
              />
              <rect x="316" y="123" width="48" height="8" fill="url(#clearGlassGradient)" rx="4" />
              <circle cx="328" cy="150" r="6" fill="#64748b" />
              <circle cx="328" cy="150" r="4" fill="url(#boldRimGradient)" />
              <circle cx="352" cy="150" r="6" fill="#64748b" />
              <circle cx="352" cy="150" r="4" fill="url(#boldRimGradient)" />
            </g>
            
            {/* Car Unloading 3 - Green car moving from top level position 3 to unloading area */}
            <g style={{
              animation: 'unloadCar3 8s ease-in-out infinite',
              animationDelay: '6s',
              transformOrigin: 'center'
            }}>
              <rect
                x="320"
                y="45"
                width="60"
                height="28"
                fill="url(#boldCar6Gradient)"
                rx="12"
                className="opacity-100"
              />
              <rect x="326" y="53" width="48" height="8" fill="url(#clearGlassGradient)" rx="4" />
              <circle cx="338" cy="80" r="6" fill="#64748b" />
              <circle cx="338" cy="80" r="4" fill="url(#boldRimGradient)" />
              <circle cx="362" cy="80" r="6" fill="#64748b" />
              <circle cx="362" cy="80" r="4" fill="url(#boldRimGradient)" />
            </g>
            
            {/* Bold truck details */}
            <rect x="540" y="130" width="15" height="10" fill="#3b82f6" rx="3" />
            <rect x="560" y="130" width="15" height="10" fill="#3b82f6" rx="3" />
            <rect x="580" y="130" width="15" height="10" fill="#3b82f6" rx="3" />
            <rect x="600" y="130" width="15" height="10" fill="#3b82f6" rx="3" />
            
            {/* Strong grille details */}
            <rect x="640" y="140" width="8" height="45" fill="#64748b" rx="2" />
            <rect x="635" y="150" width="18" height="4" fill="#94a3b8" rx="2" />
            <rect x="635" y="158" width="18" height="4" fill="#94a3b8" rx="2" />
            <rect x="635" y="166" width="18" height="4" fill="#94a3b8" rx="2" />
            <rect x="635" y="174" width="18" height="4" fill="#94a3b8" rx="2" />
            
            {/* Bold visible gradients */}
            <defs>
              <linearGradient id="strongTrailerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#cbd5e1" />
                <stop offset="25%" stopColor="#94a3b8" />
                <stop offset="50%" stopColor="#e2e8f0" />
                <stop offset="75%" stopColor="#94a3b8" />
                <stop offset="100%" stopColor="#cbd5e1" />
              </linearGradient>
              
              <linearGradient id="strongCabGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="25%" stopColor="#2563eb" />
                <stop offset="50%" stopColor="#60a5fa" />
                <stop offset="75%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
              
              <linearGradient id="clearGlassGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#dbeafe" opacity="0.9" />
                <stop offset="50%" stopColor="#bfdbfe" opacity="0.7" />
                <stop offset="100%" stopColor="#93c5fd" opacity="0.8" />
              </linearGradient>
              
              <linearGradient id="boldPlatformGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#94a3b8" />
                <stop offset="25%" stopColor="#64748b" />
                <stop offset="50%" stopColor="#cbd5e1" />
                <stop offset="75%" stopColor="#64748b" />
                <stop offset="100%" stopColor="#94a3b8" />
              </linearGradient>
              
              <linearGradient id="loadingAreaGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22c55e" />
                <stop offset="50%" stopColor="#16a34a" />
                <stop offset="100%" stopColor="#15803d" />
              </linearGradient>
              
              <linearGradient id="unloadingAreaGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="50%" stopColor="#d97706" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>
              
              <radialGradient id="boldWheelGradient">
                <stop offset="0%" stopColor="#64748b" />
                <stop offset="70%" stopColor="#475569" />
                <stop offset="100%" stopColor="#334155" />
              </radialGradient>
              
              <radialGradient id="boldRimGradient">
                <stop offset="0%" stopColor="#e2e8f0" />
                <stop offset="50%" stopColor="#cbd5e1" />
                <stop offset="100%" stopColor="#94a3b8" />
              </radialGradient>
              
              {/* Bold car gradients */}
              <linearGradient id="boldCar1Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#1d4ed8" />
              </linearGradient>
              
              <linearGradient id="boldCar2Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#94a3b8" />
                <stop offset="50%" stopColor="#64748b" />
                <stop offset="100%" stopColor="#475569" />
              </linearGradient>
              
              <linearGradient id="boldCar3Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="50%" stopColor="#d97706" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>
              
              <linearGradient id="boldCar4Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#e5e7eb" />
                <stop offset="50%" stopColor="#d1d5db" />
                <stop offset="100%" stopColor="#9ca3af" />
              </linearGradient>
              
              <linearGradient id="boldCar5Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#dc2626" />
                <stop offset="50%" stopColor="#b91c1c" />
                <stop offset="100%" stopColor="#991b1b" />
              </linearGradient>
              
              <linearGradient id="boldCar6Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#059669" />
                <stop offset="50%" stopColor="#047857" />
                <stop offset="100%" stopColor="#065f46" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      
      {/* Strong motion lines for visible movement effect */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-40">
        <div className="flex flex-col space-y-6">
          <div className="w-32 h-0.5 bg-gradient-to-r from-blue-500/80 to-transparent animate-pulse"></div>
          <div className="w-24 h-0.5 bg-gradient-to-r from-cyan-500/70 to-transparent animate-pulse" style={{animationDelay: '0.3s'}}></div>
          <div className="w-40 h-0.5 bg-gradient-to-r from-blue-600/60 to-transparent animate-pulse" style={{animationDelay: '0.6s'}}></div>
        </div>
      </div>
      
      {/* Visible luxury glow effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer opacity-80"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
      
      {/* Global CSS for car animations */}
      <style>
        {`
        @keyframes loadCar1 {
          0% { transform: translateX(0) translateY(0); }
          25% { transform: translateX(100px) translateY(-55px); }
          50% { transform: translateX(100px) translateY(-55px); }
          100% { transform: translateX(0) translateY(0); }
        }
        
        @keyframes loadCar2 {
          0% { transform: translateX(0) translateY(0); }
          25% { transform: translateX(190px) translateY(-55px); }
          50% { transform: translateX(190px) translateY(-55px); }
          100% { transform: translateX(0) translateY(0); }
        }
        
        @keyframes loadCar3 {
          0% { transform: translateX(0) translateY(0); }
          25% { transform: translateX(110px) translateY(-125px); }
          50% { transform: translateX(110px) translateY(-125px); }
          100% { transform: translateX(0) translateY(0); }
        }
        
        @keyframes unloadCar1 {
          0% { transform: translateX(0) translateY(0); }
          25% { transform: translateX(470px) translateY(125px); }
          50% { transform: translateX(470px) translateY(125px); }
          100% { transform: translateX(0) translateY(0); }
        }
        
        @keyframes unloadCar2 {
          0% { transform: translateX(0) translateY(0); }
          25% { transform: translateX(390px) translateY(55px); }
          50% { transform: translateX(390px) translateY(55px); }
          100% { transform: translateX(0) translateY(0); }
        }
        
        @keyframes unloadCar3 {
          0% { transform: translateX(0) translateY(0); }
          25% { transform: translateX(380px) translateY(125px); }
          50% { transform: translateX(380px) translateY(125px); }
          100% { transform: translateX(0) translateY(0); }
        }
        `}
      </style>
    </div>
  );
};
