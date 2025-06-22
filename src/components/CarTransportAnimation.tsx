
import React from 'react';

export const CarTransportAnimation = () => {
  return (
    <div className="relative w-full h-48 sm:h-56 lg:h-64 overflow-hidden">
      {/* Road surface with subtle animation */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
      </div>
      
      {/* Main truck animation container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="animate-float">
          <svg
            width="500"
            height="180"
            viewBox="0 0 500 180"
            className="w-full h-full max-w-2xl lg:max-w-3xl"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Professional truck design with enhanced details */}
            
            {/* Main truck trailer with premium styling */}
            <rect
              x="60"
              y="90"
              width="320"
              height="40"
              fill="url(#premiumTrailerGradient)"
              rx="6"
              className="drop-shadow-2xl"
            />
            
            {/* Truck cab with luxury design */}
            <rect
              x="350"
              y="65"
              width="90"
              height="65"
              fill="url(#premiumCabGradient)"
              rx="8"
              className="drop-shadow-2xl"
            />
            
            {/* Cab windshield */}
            <rect
              x="360"
              y="72"
              width="70"
              height="35"
              fill="url(#windshieldGradient)"
              rx="4"
              className="drop-shadow-lg"
            />
            
            {/* Premium truck wheels with enhanced design */}
            <circle cx="100" cy="140" r="16" fill="url(#premiumWheelGradient)" className="drop-shadow-xl" />
            <circle cx="100" cy="140" r="10" fill="#1a202c" />
            <circle cx="100" cy="140" r="6" fill="url(#rimGradient)" />
            
            <circle cx="150" cy="140" r="16" fill="url(#premiumWheelGradient)" className="drop-shadow-xl" />
            <circle cx="150" cy="140" r="10" fill="#1a202c" />
            <circle cx="150" cy="140" r="6" fill="url(#rimGradient)" />
            
            <circle cx="350" cy="140" r="16" fill="url(#premiumWheelGradient)" className="drop-shadow-xl" />
            <circle cx="350" cy="140" r="10" fill="#1a202c" />
            <circle cx="350" cy="140" r="6" fill="url(#rimGradient)" />
            
            <circle cx="400" cy="140" r="16" fill="url(#premiumWheelGradient)" className="drop-shadow-xl" />
            <circle cx="400" cy="140" r="10" fill="#1a202c" />
            <circle cx="400" cy="140" r="6" fill="url(#rimGradient)" />
            
            {/* Upper car platform with professional styling */}
            <rect
              x="70"
              y="50"
              width="300"
              height="12"
              fill="url(#platformGradient)"
              rx="4"
              className="drop-shadow-lg"
            />
            
            {/* Professional support beams */}
            <rect x="120" y="62" width="4" height="28" fill="#2d3748" rx="2" />
            <rect x="180" y="62" width="4" height="28" fill="#2d3748" rx="2" />
            <rect x="240" y="62" width="4" height="28" fill="#2d3748" rx="2" />
            <rect x="300" y="62" width="4" height="28" fill="#2d3748" rx="2" />
            
            {/* Luxury vehicles with professional design - Bottom level */}
            
            {/* Luxury Car 1 - BMW style */}
            <rect
              x="80"
              y="70"
              width="55"
              height="22"
              fill="url(#luxuryCar1Gradient)"
              rx="10"
              className="animate-pulse"
              style={{animationDelay: '0.5s', animationDuration: '4s'}}
            />
            <rect x="85" y="75" width="45" height="8" fill="url(#windowGradient)" rx="3" />
            <circle cx="95" cy="97" r="6" fill="#1a202c" />
            <circle cx="95" cy="97" r="3" fill="url(#rimGradient)" />
            <circle cx="120" cy="97" r="6" fill="#1a202c" />
            <circle cx="120" cy="97" r="3" fill="url(#rimGradient)" />
            
            {/* Luxury Car 2 - Mercedes style */}
            <rect
              x="150"
              y="70"
              width="55"
              height="22"
              fill="url(#luxuryC ar2Gradient)"
              rx="10"
              className="animate-pulse"
              style={{animationDelay: '1s', animationDuration: '4s'}}
            />
            <rect x="155" y="75" width="45" height="8" fill="url(#windowGradient)" rx="3" />
            <circle cx="165" cy="97" r="6" fill="#1a202c" />
            <circle cx="165" cy="97" r="3" fill="url(#rimGradient)" />
            <circle cx="190" cy="97" r="6" fill="#1a202c" />
            <circle cx="190" cy="97" r="3" fill="url(#rimGradient)" />
            
            {/* Luxury Car 3 - Audi style */}
            <rect
              x="220"
              y="70"
              width="55"
              height="22"
              fill="url(#luxuryCar3Gradient)"
              rx="10"
              className="animate-pulse"
              style={{animationDelay: '1.5s', animationDuration: '4s'}}
            />
            <rect x="225" y="75" width="45" height="8" fill="url(#windowGradient)" rx="3" />
            <circle cx="235" cy="97" r="6" fill="#1a202c" />
            <circle cx="235" cy="97" r="3" fill="url(#rimGradient)" />
            <circle cx="260" cy="97" r="6" fill="#1a202c" />
            <circle cx="260" cy="97" r="3" fill="url(#rimGradient)" />
            
            {/* Top level luxury vehicles */}
            
            {/* Luxury Car 4 - Porsche style */}
            <rect
              x="90"
              y="30"
              width="55"
              height="22"
              fill="url(#luxuryCar4Gradient)"
              rx="10"
              className="animate-pulse"
              style={{animationDelay: '2s', animationDuration: '4s'}}
            />
            <rect x="95" y="35" width="45" height="8" fill="url(#windowGradient)" rx="3" />
            <circle cx="105" cy="57" r="6" fill="#1a202c" />
            <circle cx="105" cy="57" r="3" fill="url(#rimGradient)" />
            <circle cx="130" cy="57" r="6" fill="#1a202c" />
            <circle cx="130" cy="57" r="3" fill="url(#rimGradient)" />
            
            {/* Luxury Car 5 - Tesla style */}
            <rect
              x="160"
              y="30"
              width="55"
              height="22"
              fill="url(#luxuryCar5Gradient)"
              rx="10"
              className="animate-pulse"
              style={{animationDelay: '2.5s', animationDuration: '4s'}}
            />
            <rect x="165" y="35" width="45" height="8" fill="url(#windowGradient)" rx="3" />
            <circle cx="175" cy="57" r="6" fill="#1a202c" />
            <circle cx="175" cy="57" r="3" fill="url(#rimGradient)" />
            <circle cx="200" cy="57" r="6" fill="#1a202c" />
            <circle cx="200" cy="57" r="3" fill="url(#rimGradient)" />
            
            {/* Luxury Car 6 - Lexus style */}
            <rect
              x="230"
              y="30"
              width="55"
              height="22"
              fill="url(#luxuryCar6Gradient)"
              rx="10"
              className="animate-pulse"
              style={{animationDelay: '3s', animationDuration: '4s'}}
            />
            <rect x="235" y="35" width="45" height="8" fill="url(#windowGradient)" rx="3" />
            <circle cx="245" cy="57" r="6" fill="#1a202c" />
            <circle cx="245" cy="57" r="3" fill="url(#rimGradient)" />
            <circle cx="270" cy="57" r="6" fill="#1a202c" />
            <circle cx="270" cy="57" r="3" fill="url(#rimGradient)" />
            
            {/* Professional truck details */}
            <rect x="360" y="75" width="12" height="8" fill="#60a5fa" rx="2" />
            <rect x="375" y="75" width="12" height="8" fill="#60a5fa" rx="2" />
            <rect x="390" y="75" width="12" height="8" fill="#60a5fa" rx="2" />
            <rect x="405" y="75" width="12" height="8" fill="#60a5fa" rx="2" />
            
            {/* Grille details */}
            <rect x="440" y="85" width="6" height="30" fill="#374151" rx="1" />
            <rect x="435" y="90" width="16" height="3" fill="#4b5563" rx="1" />
            <rect x="435" y="95" width="16" height="3" fill="#4b5563" rx="1" />
            <rect x="435" y="100" width="16" height="3" fill="#4b5563" rx="1" />
            <rect x="435" y="105" width="16" height="3" fill="#4b5563" rx="1" />
            
            {/* Enhanced gradients for professional look */}
            <defs>
              <linearGradient id="premiumTrailerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#dc2626" />
                <stop offset="25%" stopColor="#ef4444" />
                <stop offset="50%" stopColor="#f87171" />
                <stop offset="75%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#dc2626" />
              </linearGradient>
              
              <linearGradient id="premiumCabGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1e40af" />
                <stop offset="25%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#60a5fa" />
                <stop offset="75%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#1e40af" />
              </linearGradient>
              
              <linearGradient id="windshieldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#e0f2fe" opacity="0.9" />
                <stop offset="50%" stopColor="#bae6fd" opacity="0.7" />
                <stop offset="100%" stopColor="#0ea5e9" opacity="0.8" />
              </linearGradient>
              
              <linearGradient id="platformGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#374151" />
                <stop offset="25%" stopColor="#4b5563" />
                <stop offset="50%" stopColor="#6b7280" />
                <stop offset="75%" stopColor="#4b5563" />
                <stop offset="100%" stopColor="#374151" />
              </linearGradient>
              
              <radialGradient id="premiumWheelGradient">
                <stop offset="0%" stopColor="#374151" />
                <stop offset="70%" stopColor="#1f2937" />
                <stop offset="100%" stopColor="#111827" />
              </radialGradient>
              
              <radialGradient id="rimGradient">
                <stop offset="0%" stopColor="#e5e7eb" />
                <stop offset="50%" stopColor="#9ca3af" />
                <stop offset="100%" stopColor="#6b7280" />
              </radialGradient>
              
              <linearGradient id="windowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#dbeafe" opacity="0.3" />
                <stop offset="100%" stopColor="#1e40af" opacity="0.2" />
              </linearGradient>
              
              {/* Luxury car gradients */}
              <linearGradient id="luxuryCar1Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1e40af" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#1d4ed8" />
              </linearGradient>
              
              <linearGradient id="luxuryCar2Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#dc2626" />
                <stop offset="50%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#b91c1c" />
              </linearGradient>
              
              <linearGradient id="luxuryCar3Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#059669" />
                <stop offset="50%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#047857" />
              </linearGradient>
              
              <linearGradient id="luxuryCar4Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#d97706" />
                <stop offset="50%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>
              
              <linearGradient id="luxuryCar5Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7c3aed" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#6d28d9" />
              </linearGradient>
              
              <linearGradient id="luxuryCar6Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0891b2" />
                <stop offset="50%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#0e7490" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      
      {/* Professional glow effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/10 to-transparent animate-shimmer opacity-40"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
      
      {/* Motion lines for speed effect */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-20">
        <div className="flex flex-col space-y-4">
          <div className="w-20 h-0.5 bg-gradient-to-r from-blue-400 to-transparent animate-pulse"></div>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-300 to-transparent animate-pulse" style={{animationDelay: '0.2s'}}></div>
          <div className="w-24 h-0.5 bg-gradient-to-r from-blue-500 to-transparent animate-pulse" style={{animationDelay: '0.4s'}}></div>
        </div>
      </div>
    </div>
  );
};
