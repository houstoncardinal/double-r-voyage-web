
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
      
      {/* Main truck animation - larger and more prominent */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="animate-float w-full max-w-5xl">
          <svg
            width="800"
            height="300"
            viewBox="0 0 800 300"
            className="w-full h-full opacity-15"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Luxury truck design with light, elegant styling */}
            
            {/* Main truck trailer with light luxury gradient */}
            <rect
              x="100"
              y="150"
              width="450"
              height="60"
              fill="url(#lightTrailerGradient)"
              rx="12"
              className="drop-shadow-lg"
            />
            
            {/* Truck cab with elegant design */}
            <rect
              x="520"
              y="110"
              width="120"
              height="100"
              fill="url(#lightCabGradient)"
              rx="15"
              className="drop-shadow-lg"
            />
            
            {/* Windshield with premium glass effect */}
            <rect
              x="535"
              y="125"
              width="90"
              height="50"
              fill="url(#glassGradient)"
              rx="8"
              className="drop-shadow-md"
            />
            
            {/* Light luxury wheels */}
            <circle cx="150" cy="225" r="22" fill="url(#lightWheelGradient)" className="drop-shadow-lg" />
            <circle cx="150" cy="225" r="15" fill="#f8fafc" />
            <circle cx="150" cy="225" r="8" fill="url(#lightRimGradient)" />
            
            <circle cx="220" cy="225" r="22" fill="url(#lightWheelGradient)" className="drop-shadow-lg" />
            <circle cx="220" cy="225" r="15" fill="#f8fafc" />
            <circle cx="220" cy="225" r="8" fill="url(#lightRimGradient)" />
            
            <circle cx="520" cy="225" r="22" fill="url(#lightWheelGradient)" className="drop-shadow-lg" />
            <circle cx="520" cy="225" r="15" fill="#f8fafc" />
            <circle cx="520" cy="225" r="8" fill="url(#lightRimGradient)" />
            
            <circle cx="590" cy="225" r="22" fill="url(#lightWheelGradient)" className="drop-shadow-lg" />
            <circle cx="590" cy="225" r="15" fill="#f8fafc" />
            <circle cx="590" cy="225" r="8" fill="url(#lightRimGradient)" />
            
            {/* Upper car platform with light luxury styling */}
            <rect
              x="115"
              y="80"
              width="420"
              height="18"
              fill="url(#lightPlatformGradient)"
              rx="8"
              className="drop-shadow-md"
            />
            
            {/* Elegant support beams */}
            <rect x="180" y="98" width="6" height="52" fill="#e2e8f0" rx="3" />
            <rect x="260" y="98" width="6" height="52" fill="#e2e8f0" rx="3" />
            <rect x="340" y="98" width="6" height="52" fill="#e2e8f0" rx="3" />
            <rect x="420" y="98" width="6" height="52" fill="#e2e8f0" rx="3" />
            
            {/* Light luxury vehicles - Bottom level */}
            
            {/* Luxury Car 1 - Light Blue */}
            <rect
              x="130"
              y="115"
              width="75"
              height="35"
              fill="url(#lightCar1Gradient)"
              rx="15"
              className="animate-pulse opacity-80"
              style={{animationDelay: '0.5s', animationDuration: '6s'}}
            />
            <rect x="138" y="125" width="59" height="12" fill="url(#lightGlassGradient)" rx="5" />
            <circle cx="155" cy="155" r="8" fill="#f1f5f9" />
            <circle cx="155" cy="155" r="5" fill="url(#lightRimGradient)" />
            <circle cx="180" cy="155" r="8" fill="#f1f5f9" />
            <circle cx="180" cy="155" r="5" fill="url(#lightRimGradient)" />
            
            {/* Luxury Car 2 - Light Silver */}
            <rect
              x="220"
              y="115"
              width="75"
              height="35"
              fill="url(#lightCar2Gradient)"
              rx="15"
              className="animate-pulse opacity-80"
              style={{animationDelay: '1.5s', animationDuration: '6s'}}
            />
            <rect x="228" y="125" width="59" height="12" fill="url(#lightGlassGradient)" rx="5" />
            <circle cx="245" cy="155" r="8" fill="#f1f5f9" />
            <circle cx="245" cy="155" r="5" fill="url(#lightRimGradient)" />
            <circle cx="270" cy="155" r="8" fill="#f1f5f9" />
            <circle cx="270" cy="155" r="5" fill="url(#lightRimGradient)" />
            
            {/* Luxury Car 3 - Light Gold */}
            <rect
              x="310"
              y="115"
              width="75"
              height="35"
              fill="url(#lightCar3Gradient)"
              rx="15"
              className="animate-pulse opacity-80"
              style={{animationDelay: '2.5s', animationDuration: '6s'}}
            />
            <rect x="318" y="125" width="59" height="12" fill="url(#lightGlassGradient)" rx="5" />
            <circle cx="335" cy="155" r="8" fill="#f1f5f9" />
            <circle cx="335" cy="155" r="5" fill="url(#lightRimGradient)" />
            <circle cx="360" cy="155" r="8" fill="#f1f5f9" />
            <circle cx="360" cy="155" r="5" fill="url(#lightRimGradient)" />
            
            {/* Top level luxury vehicles */}
            
            {/* Luxury Car 4 - Light Pearl */}
            <rect
              x="140"
              y="45"
              width="75"
              height="35"
              fill="url(#lightCar4Gradient)"
              rx="15"
              className="animate-pulse opacity-80"
              style={{animationDelay: '3s', animationDuration: '6s'}}
            />
            <rect x="148" y="55" width="59" height="12" fill="url(#lightGlassGradient)" rx="5" />
            <circle cx="165" cy="85" r="8" fill="#f1f5f9" />
            <circle cx="165" cy="85" r="5" fill="url(#lightRimGradient)" />
            <circle cx="190" cy="85" r="8" fill="#f1f5f9" />
            <circle cx="190" cy="85" r="5" fill="url(#lightRimGradient)" />
            
            {/* Luxury Car 5 - Light Champagne */}
            <rect
              x="230"
              y="45"
              width="75"
              height="35"
              fill="url(#lightCar5Gradient)"
              rx="15"
              className="animate-pulse opacity-80"
              style={{animationDelay: '3.5s', animationDuration: '6s'}}
            />
            <rect x="238" y="55" width="59" height="12" fill="url(#lightGlassGradient)" rx="5" />
            <circle cx="255" cy="85" r="8" fill="#f1f5f9" />
            <circle cx="255" cy="85" r="5" fill="url(#lightRimGradient)" />
            <circle cx="280" cy="85" r="8" fill="#f1f5f9" />
            <circle cx="280" cy="85" r="5" fill="url(#lightRimGradient)" />
            
            {/* Luxury Car 6 - Light Platinum */}
            <rect
              x="320"
              y="45"
              width="75"
              height="35"
              fill="url(#lightCar6Gradient)"
              rx="15"
              className="animate-pulse opacity-80"
              style={{animationDelay: '4s', animationDuration: '6s'}}
            />
            <rect x="328" y="55" width="59" height="12" fill="url(#lightGlassGradient)" rx="5" />
            <circle cx="345" cy="85" r="8" fill="#f1f5f9" />
            <circle cx="345" cy="85" r="5" fill="url(#lightRimGradient)" />
            <circle cx="370" cy="85" r="8" fill="#f1f5f9" />
            <circle cx="370" cy="85" r="5" fill="url(#lightRimGradient)" />
            
            {/* Light luxury truck details */}
            <rect x="540" y="130" width="15" height="10" fill="#dbeafe" rx="3" />
            <rect x="560" y="130" width="15" height="10" fill="#dbeafe" rx="3" />
            <rect x="580" y="130" width="15" height="10" fill="#dbeafe" rx="3" />
            <rect x="600" y="130" width="15" height="10" fill="#dbeafe" rx="3" />
            
            {/* Light grille details */}
            <rect x="640" y="140" width="8" height="45" fill="#e2e8f0" rx="2" />
            <rect x="635" y="150" width="18" height="4" fill="#f1f5f9" rx="2" />
            <rect x="635" y="158" width="18" height="4" fill="#f1f5f9" rx="2" />
            <rect x="635" y="166" width="18" height="4" fill="#f1f5f9" rx="2" />
            <rect x="635" y="174" width="18" height="4" fill="#f1f5f9" rx="2" />
            
            {/* Light luxury gradients */}
            <defs>
              <linearGradient id="lightTrailerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f1f5f9" />
                <stop offset="25%" stopColor="#e2e8f0" />
                <stop offset="50%" stopColor="#f8fafc" />
                <stop offset="75%" stopColor="#e2e8f0" />
                <stop offset="100%" stopColor="#f1f5f9" />
              </linearGradient>
              
              <linearGradient id="lightCabGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#dbeafe" />
                <stop offset="25%" stopColor="#bfdbfe" />
                <stop offset="50%" stopColor="#e0f2fe" />
                <stop offset="75%" stopColor="#bfdbfe" />
                <stop offset="100%" stopColor="#dbeafe" />
              </linearGradient>
              
              <linearGradient id="glassGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f0f9ff" opacity="0.9" />
                <stop offset="50%" stopColor="#e0f2fe" opacity="0.7" />
                <stop offset="100%" stopColor="#bae6fd" opacity="0.8" />
              </linearGradient>
              
              <linearGradient id="lightPlatformGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#e2e8f0" />
                <stop offset="25%" stopColor="#cbd5e1" />
                <stop offset="50%" stopColor="#f1f5f9" />
                <stop offset="75%" stopColor="#cbd5e1" />
                <stop offset="100%" stopColor="#e2e8f0" />
              </linearGradient>
              
              <radialGradient id="lightWheelGradient">
                <stop offset="0%" stopColor="#cbd5e1" />
                <stop offset="70%" stopColor="#94a3b8" />
                <stop offset="100%" stopColor="#64748b" />
              </radialGradient>
              
              <radialGradient id="lightRimGradient">
                <stop offset="0%" stopColor="#f8fafc" />
                <stop offset="50%" stopColor="#e2e8f0" />
                <stop offset="100%" stopColor="#cbd5e1" />
              </radialGradient>
              
              <linearGradient id="lightGlassGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f0f9ff" opacity="0.6" />
                <stop offset="100%" stopColor="#dbeafe" opacity="0.4" />
              </linearGradient>
              
              {/* Light luxury car gradients */}
              <linearGradient id="lightCar1Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#dbeafe" />
                <stop offset="50%" stopColor="#bfdbfe" />
                <stop offset="100%" stopColor="#e0f2fe" />
              </linearGradient>
              
              <linearGradient id="lightCar2Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f1f5f9" />
                <stop offset="50%" stopColor="#e2e8f0" />
                <stop offset="100%" stopColor="#f8fafc" />
              </linearGradient>
              
              <linearGradient id="lightCar3Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fef3c7" />
                <stop offset="50%" stopColor="#fde68a" />
                <stop offset="100%" stopColor="#f9fafb" />
              </linearGradient>
              
              <linearGradient id="lightCar4Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f3f4f6" />
                <stop offset="50%" stopColor="#e5e7eb" />
                <stop offset="100%" stopColor="#f9fafb" />
              </linearGradient>
              
              <linearGradient id="lightCar5Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fdf4ff" />
                <stop offset="50%" stopColor="#f3e8ff" />
                <stop offset="100%" stopColor="#faf5ff" />
              </linearGradient>
              
              <linearGradient id="lightCar6Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ecfdf5" />
                <stop offset="50%" stopColor="#d1fae5" />
                <stop offset="100%" stopColor="#f0fdf4" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      
      {/* Light motion lines for elegant movement effect */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-10">
        <div className="flex flex-col space-y-6">
          <div className="w-32 h-0.5 bg-gradient-to-r from-blue-300/50 to-transparent animate-pulse"></div>
          <div className="w-24 h-0.5 bg-gradient-to-r from-cyan-300/40 to-transparent animate-pulse" style={{animationDelay: '0.3s'}}></div>
          <div className="w-40 h-0.5 bg-gradient-to-r from-blue-400/30 to-transparent animate-pulse" style={{animationDelay: '0.6s'}}></div>
        </div>
      </div>
      
      {/* Subtle luxury glow effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer opacity-60"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200/30 to-transparent"></div>
    </div>
  );
};
