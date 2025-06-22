
import React from 'react';

export const CarTransportAnimation = () => {
  return (
    <div className="relative w-full h-32 sm:h-40 lg:h-48 overflow-hidden">
      {/* Animated truck with cars */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="animate-float">
          <svg
            width="400"
            height="120"
            viewBox="0 0 400 120"
            className="w-full h-full max-w-md lg:max-w-lg"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Truck trailer base */}
            <rect
              x="50"
              y="60"
              width="280"
              height="30"
              fill="url(#truckGradient)"
              rx="4"
              className="drop-shadow-lg"
            />
            
            {/* Truck cab */}
            <rect
              x="300"
              y="40"
              width="80"
              height="50"
              fill="url(#cabGradient)"
              rx="6"
              className="drop-shadow-lg"
            />
            
            {/* Truck wheels */}
            <circle cx="80" cy="95" r="12" fill="url(#wheelGradient)" className="drop-shadow-md" />
            <circle cx="120" cy="95" r="12" fill="url(#wheelGradient)" className="drop-shadow-md" />
            <circle cx="300" cy="95" r="12" fill="url(#wheelGradient)" className="drop-shadow-md" />
            <circle cx="340" cy="95" r="12" fill="url(#wheelGradient)" className="drop-shadow-md" />
            
            {/* Upper car platform */}
            <rect
              x="60"
              y="35"
              width="260"
              height="8"
              fill="url(#platformGradient)"
              rx="2"
              className="drop-shadow-sm"
            />
            
            {/* Support beams */}
            <rect x="100" y="43" width="3" height="17" fill="#4a5568" />
            <rect x="150" y="43" width="3" height="17" fill="#4a5568" />
            <rect x="200" y="43" width="3" height="17" fill="#4a5568" />
            <rect x="250" y="43" width="3" height="17" fill="#4a5568" />
            
            {/* Car 1 - Bottom level */}
            <rect
              x="70"
              y="50"
              width="45"
              height="18"
              fill="url(#car1Gradient)"
              rx="8"
              className="animate-pulse"
              style={{animationDelay: '0.5s', animationDuration: '3s'}}
            />
            <circle cx="80" cy="72" r="4" fill="#2d3748" />
            <circle cx="105" cy="72" r="4" fill="#2d3748" />
            
            {/* Car 2 - Bottom level */}
            <rect
              x="130"
              y="50"
              width="45"
              height="18"
              fill="url(#car2Gradient)"
              rx="8"
              className="animate-pulse"
              style={{animationDelay: '1s', animationDuration: '3s'}}
            />
            <circle cx="140" cy="72" r="4" fill="#2d3748" />
            <circle cx="165" cy="72" r="4" fill="#2d3748" />
            
            {/* Car 3 - Bottom level */}
            <rect
              x="190"
              y="50"
              width="45"
              height="18"
              fill="url(#car3Gradient)"
              rx="8"
              className="animate-pulse"
              style={{animationDelay: '1.5s', animationDuration: '3s'}}
            />
            <circle cx="200" cy="72" r="4" fill="#2d3748" />
            <circle cx="225" cy="72" r="4" fill="#2d3748" />
            
            {/* Car 4 - Top level */}
            <rect
              x="80"
              y="20"
              width="45"
              height="18"
              fill="url(#car4Gradient)"
              rx="8"
              className="animate-pulse"
              style={{animationDelay: '2s', animationDuration: '3s'}}
            />
            <circle cx="90" cy="42" r="4" fill="#2d3748" />
            <circle cx="115" cy="42" r="4" fill="#2d3748" />
            
            {/* Car 5 - Top level */}
            <rect
              x="140"
              y="20"
              width="45"
              height="18"
              fill="url(#car5Gradient)"
              rx="8"
              className="animate-pulse"
              style={{animationDelay: '2.5s', animationDuration: '3s'}}
            />
            <circle cx="150" cy="42" r="4" fill="#2d3748" />
            <circle cx="175" cy="42" r="4" fill="#2d3748" />
            
            {/* Car 6 - Top level */}
            <rect
              x="200"
              y="20"
              width="45"
              height="18"
              fill="url(#car6Gradient)"
              rx="8"
              className="animate-pulse"
              style={{animationDelay: '3s', animationDuration: '3s'}}
            />
            <circle cx="210" cy="42" r="4" fill="#2d3748" />
            <circle cx="235" cy="42" r="4" fill="#2d3748" />
            
            {/* Luxury details */}
            <rect x="305" y="45" width="8" height="6" fill="#60a5fa" rx="1" />
            <rect x="315" y="45" width="8" height="6" fill="#60a5fa" rx="1" />
            <rect x="325" y="45" width="8" height="6" fill="#60a5fa" rx="1" />
            
            {/* Gradients */}
            <defs>
              <linearGradient id="truckGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#dc2626" />
                <stop offset="50%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#dc2626" />
              </linearGradient>
              
              <linearGradient id="cabGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1e40af" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#1e40af" />
              </linearGradient>
              
              <linearGradient id="platformGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#374151" />
                <stop offset="50%" stopColor="#4b5563" />
                <stop offset="100%" stopColor="#374151" />
              </linearGradient>
              
              <radialGradient id="wheelGradient">
                <stop offset="0%" stopColor="#1f2937" />
                <stop offset="100%" stopColor="#111827" />
              </radialGradient>
              
              <linearGradient id="car1Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#1d4ed8" />
              </linearGradient>
              
              <linearGradient id="car2Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#dc2626" />
              </linearGradient>
              
              <linearGradient id="car3Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
              
              <linearGradient id="car4Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
              
              <linearGradient id="car5Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#7c3aed" />
              </linearGradient>
              
              <linearGradient id="car6Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#0891b2" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      
      {/* Luxury glow effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/20 to-transparent animate-shimmer opacity-60"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
    </div>
  );
};
