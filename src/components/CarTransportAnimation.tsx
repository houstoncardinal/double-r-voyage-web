
import React from 'react';

export const CarTransportAnimation = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Professional background with depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100/40 via-white/60 to-blue-50/30"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/20 to-transparent animate-shimmer"></div>
      
      {/* Ambient lighting effects */}
      <div className="absolute top-10 left-1/4 w-40 h-40 bg-gradient-to-br from-blue-300/20 to-cyan-300/15 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-gradient-to-br from-indigo-200/15 to-blue-200/10 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      
      {/* Main professional truck animation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="animate-float w-full max-w-6xl">
          <svg
            width="900"
            height="350"
            viewBox="0 0 900 350"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Road surface with perspective */}
            <rect
              x="0"
              y="280"
              width="900"
              height="70"
              fill="url(#roadGradient)"
              className="opacity-80"
            />
            
            {/* Road markings */}
            <rect x="50" y="310" width="60" height="4" fill="#ffffff" opacity="0.8" rx="2" />
            <rect x="150" y="310" width="60" height="4" fill="#ffffff" opacity="0.8" rx="2" />
            <rect x="250" y="310" width="60" height="4" fill="#ffffff" opacity="0.8" rx="2" />
            <rect x="350" y="310" width="60" height="4" fill="#ffffff" opacity="0.8" rx="2" />
            <rect x="450" y="310" width="60" height="4" fill="#ffffff" opacity="0.8" rx="2" />
            <rect x="550" y="310" width="60" height="4" fill="#ffffff" opacity="0.8" rx="2" />
            <rect x="650" y="310" width="60" height="4" fill="#ffffff" opacity="0.8" rx="2" />
            <rect x="750" y="310" width="60" height="4" fill="#ffffff" opacity="0.8" rx="2" />
            
            {/* Professional truck trailer with realistic details */}
            <rect
              x="120"
              y="170"
              width="480"
              height="70"
              fill="url(#realisticTrailerGradient)"
              rx="8"
              className="drop-shadow-2xl"
            />
            
            {/* Trailer side panels with depth */}
            <rect
              x="125"
              y="175"
              width="470"
              height="15"
              fill="url(#panelGradient)"
              rx="4"
            />
            <rect
              x="125"
              y="220"
              width="470"
              height="15"
              fill="url(#panelGradient)"
              rx="4"
            />
            
            {/* Realistic truck cab with professional styling */}
            <rect
              x="580"
              y="120"
              width="140"
              height="120"
              fill="url(#realisticCabGradient)"
              rx="12"
              className="drop-shadow-2xl"
            />
            
            {/* Cab windshield with realistic reflection */}
            <rect
              x="595"
              y="135"
              width="110"
              height="60"
              fill="url(#windshieldGradient)"
              rx="6"
              className="drop-shadow-lg"
            />
            
            {/* Professional wheels with realistic tire treads */}
            <circle cx="170" cy="260" r="28" fill="url(#tireGradient)" className="drop-shadow-xl" />
            <circle cx="170" cy="260" r="20" fill="#2d3748" />
            <circle cx="170" cy="260" r="12" fill="url(#rimGradient)" />
            <circle cx="170" cy="260" r="6" fill="#e2e8f0" />
            
            <circle cx="250" cy="260" r="28" fill="url(#tireGradient)" className="drop-shadow-xl" />
            <circle cx="250" cy="260" r="20" fill="#2d3748" />
            <circle cx="250" cy="260" r="12" fill="url(#rimGradient)" />
            <circle cx="250" cy="260" r="6" fill="#e2e8f0" />
            
            <circle cx="570" cy="260" r="28" fill="url(#tireGradient)" className="drop-shadow-xl" />
            <circle cx="570" cy="260" r="20" fill="#2d3748" />
            <circle cx="570" cy="260" r="12" fill="url(#rimGradient)" />
            <circle cx="570" cy="260" r="6" fill="#e2e8f0" />
            
            <circle cx="650" cy="260" r="28" fill="url(#tireGradient)" className="drop-shadow-xl" />
            <circle cx="650" cy="260" r="20" fill="#2d3748" />
            <circle cx="650" cy="260" r="12" fill="url(#rimGradient)" />
            <circle cx="650" cy="260" r="6" fill="#e2e8f0" />
            
            {/* Upper car platform with hydraulic support system */}
            <rect
              x="135"
              y="90"
              width="450"
              height="20"
              fill="url(#platformGradient)"
              rx="6"
              className="drop-shadow-lg"
            />
            
            {/* Hydraulic support beams with realistic metallic finish */}
            <rect x="200" y="110" width="8" height="60" fill="url(#hydraulicGradient)" rx="4" className="drop-shadow-md" />
            <rect x="280" y="110" width="8" height="60" fill="url(#hydraulicGradient)" rx="4" className="drop-shadow-md" />
            <rect x="360" y="110" width="8" height="60" fill="url(#hydraulicGradient)" rx="4" className="drop-shadow-md" />
            <rect x="440" y="110" width="8" height="60" fill="url(#hydraulicGradient)" rx="4" className="drop-shadow-md" />
            <rect x="520" y="110" width="8" height="60" fill="url(#hydraulicGradient)" rx="4" className="drop-shadow-md" />
            
            {/* Loading zone with professional signage */}
            <rect
              x="20"
              y="180"
              width="90"
              height="50"
              fill="url(#loadingZoneGradient)"
              rx="8"
              className="drop-shadow-lg"
            />
            <text x="65" y="205" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">LOADING</text>
            
            {/* Unloading zone with professional signage */}
            <rect
              x="790"
              y="180"
              width="90"
              height="50"
              fill="url(#unloadingZoneGradient)"
              rx="8"
              className="drop-shadow-lg"
            />
            <text x="835" y="205" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">DELIVERY</text>

            {/* Realistic cars with professional automotive styling */}
            
            {/* Car 1 - Luxury sedan loading to bottom level */}
            <g style={{
              animation: 'smoothLoad1 12s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite',
              transformOrigin: 'center'
            }}>
              <rect
                x="40"
                y="190"
                width="70"
                height="32"
                fill="url(#luxuryBlueGradient)"
                rx="14"
                className="drop-shadow-lg"
              />
              <rect x="47" y="200" width="56" height="10" fill="url(#windshieldGradient)" rx="5" />
              <rect x="52" y="205" width="46" height="4" fill="url(#windshieldGradient)" rx="2" />
              <circle cx="58" cy="230" r="8" fill="url(#tireGradient)" />
              <circle cx="58" cy="230" r="5" fill="url(#rimGradient)" />
              <circle cx="92" cy="230" r="8" fill="url(#tireGradient)" />
              <circle cx="92" cy="230" r="5" fill="url(#rimGradient)" />
              <rect x="45" y="197" width="8" height="6" fill="url(#headlightGradient)" rx="3" />
              <rect x="97" y="197" width="8" height="6" fill="url(#taillightGradient)" rx="3" />
            </g>
            
            {/* Car 2 - Sports car loading to top level */}
            <g style={{
              animation: 'smoothLoad2 12s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite',
              animationDelay: '2s',
              transformOrigin: 'center'
            }}>
              <rect
                x="40"
                y="190"
                width="70"
                height="28"
                fill="url(#luxuryRedGradient)"
                rx="12"
                className="drop-shadow-lg"
              />
              <rect x="47" y="198" width="56" height="8" fill="url(#windshieldGradient)" rx="4" />
              <circle cx="58" cy="226" r="8" fill="url(#tireGradient)" />
              <circle cx="58" cy="226" r="5" fill="url(#sportRimGradient)" />
              <circle cx="92" cy="226" r="8" fill="url(#tireGradient)" />
              <circle cx="92" cy="226" r="5" fill="url(#sportRimGradient)" />
              <rect x="45" y="195" width="8" height="6" fill="url(#headlightGradient)" rx="3" />
              <rect x="97" y="195" width="8" height="6" fill="url(#taillightGradient)" rx="3" />
            </g>
            
            {/* Car 3 - SUV loading to bottom level */}
            <g style={{
              animation: 'smoothLoad3 12s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite',
              animationDelay: '4s',
              transformOrigin: 'center'
            }}>
              <rect
                x="40"
                y="185"
                width="70"
                height="36"
                fill="url(#luxuryGoldGradient)"
                rx="16"
                className="drop-shadow-lg"
              />
              <rect x="47" y="195" width="56" height="12" fill="url(#windshieldGradient)" rx="6" />
              <circle cx="58" cy="230" r="9" fill="url(#tireGradient)" />
              <circle cx="58" cy="230" r="6" fill="url(#rimGradient)" />
              <circle cx="92" cy="230" r="9" fill="url(#tireGradient)" />
              <circle cx="92" cy="230" r="6" fill="url(#rimGradient)" />
              <rect x="45" y="192" width="8" height="6" fill="url(#headlightGradient)" rx="3" />
              <rect x="97" y="192" width="8" height="6" fill="url(#taillightGradient)" rx="3" />
            </g>

            {/* Unloading cars with smooth professional motion */}
            
            {/* Car 4 - Luxury sedan unloading from top level */}
            <g style={{
              animation: 'smoothUnload1 12s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite',
              animationDelay: '6s',
              transformOrigin: 'center'
            }}>
              <rect
                x="280"
                y="60"
                width="70"
                height="32"
                fill="url(#luxurySilverGradient)"
                rx="14"
                className="drop-shadow-lg"
              />
              <rect x="287" y="70" width="56" height="10" fill="url(#windshieldGradient)" rx="5" />
              <circle cx="298" cy="100" r="8" fill="url(#tireGradient)" />
              <circle cx="298" cy="100" r="5" fill="url(#rimGradient)" />
              <circle cx="332" cy="100" r="8" fill="url(#tireGradient)" />
              <circle cx="332" cy="100" r="5" fill="url(#rimGradient)" />
              <rect x="285" y="67" width="8" height="6" fill="url(#headlightGradient)" rx="3" />
              <rect x="337" y="67" width="8" height="6" fill="url(#taillightGradient)" rx="3" />
            </g>
            
            {/* Car 5 - Sports coupe unloading from bottom level */}
            <g style={{
              animation: 'smoothUnload2 12s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite',
              animationDelay: '8s',
              transformOrigin: 'center'
            }}>
              <rect
                x="380"
                y="135"
                width="70"
                height="28"
                fill="url(#luxuryGreenGradient)"
                rx="12"
                className="drop-shadow-lg"
              />
              <rect x="387" y="143" width="56" height="8" fill="url(#windshieldGradient)" rx="4" />
              <circle cx="398" cy="171" r="8" fill="url(#tireGradient)" />
              <circle cx="398" cy="171" r="5" fill="url(#sportRimGradient)" />
              <circle cx="432" cy="171" r="8" fill="url(#tireGradient)" />
              <circle cx="432" cy="171" r="5" fill="url(#sportRimGradient)" />
              <rect x="385" y="140" width="8" height="6" fill="url(#headlightGradient)" rx="3" />
              <rect x="437" y="140" width="8" height="6" fill="url(#taillightGradient)" rx="3" />
            </g>
            
            {/* Car 6 - Executive sedan unloading from top level */}
            <g style={{
              animation: 'smoothUnload3 12s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite',
              animationDelay: '10s',
              transformOrigin: 'center'
            }}>
              <rect
                x="450"
                y="60"
                width="70"
                height="32"
                fill="url(#luxuryBlackGradient)"
                rx="14"
                className="drop-shadow-lg"
              />
              <rect x="457" y="70" width="56" height="10" fill="url(#windshieldGradient)" rx="5" />
              <circle cx="468" cy="100" r="8" fill="url(#tireGradient)" />
              <circle cx="468" cy="100" r="5" fill="url(#premiumRimGradient)" />
              <circle cx="502" cy="100" r="8" fill="url(#tireGradient)" />
              <circle cx="502" cy="100" r="5" fill="url(#premiumRimGradient)" />
              <rect x="455" y="67" width="8" height="6" fill="url(#headlightGradient)" rx="3" />
              <rect x="507" y="67" width="8" height="6" fill="url(#taillightGradient)" rx="3" />
            </g>
            
            {/* Professional truck details */}
            <rect x="600" y="140" width="20" height="12" fill="#3b82f6" rx="4" />
            <rect x="625" y="140" width="20" height="12" fill="#3b82f6" rx="4" />
            <rect x="650" y="140" width="20" height="12" fill="#3b82f6" rx="4" />
            <rect x="675" y="140" width="20" height="12" fill="#3b82f6" rx="4" />
            
            {/* Professional grille with realistic chrome finish */}
            <rect x="720" y="155" width="12" height="60" fill="url(#grilleGradient)" rx="3" />
            <rect x="712" y="165" width="28" height="6" fill="url(#chromeGradient)" rx="3" />
            <rect x="712" y="175" width="28" height="6" fill="url(#chromeGradient)" rx="3" />
            <rect x="712" y="185" width="28" height="6" fill="url(#chromeGradient)" rx="3" />
            <rect x="712" y="195" width="28" height="6" fill="url(#chromeGradient)" rx="3" />
            
            {/* Professional gradients and effects */}
            <defs>
              <linearGradient id="roadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4a5568" />
                <stop offset="50%" stopColor="#2d3748" />
                <stop offset="100%" stopColor="#1a202c" />
              </linearGradient>
              
              <linearGradient id="realisticTrailerGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f7fafc" />
                <stop offset="25%" stopColor="#edf2f7" />
                <stop offset="50%" stopColor="#e2e8f0" />
                <stop offset="75%" stopColor="#cbd5e1" />
                <stop offset="100%" stopColor="#94a3b8" />
              </linearGradient>
              
              <linearGradient id="realisticCabGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="25%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#2563eb" />
                <stop offset="75%" stopColor="#1d4ed8" />
                <stop offset="100%" stopColor="#1e40af" />
              </linearGradient>
              
              <linearGradient id="windshieldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#dbeafe" opacity="0.9" />
                <stop offset="30%" stopColor="#bfdbfe" opacity="0.6" />
                <stop offset="70%" stopColor="#93c5fd" opacity="0.4" />
                <stop offset="100%" stopColor="#60a5fa" opacity="0.8" />
              </linearGradient>
              
              <linearGradient id="platformGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#cbd5e1" />
                <stop offset="50%" stopColor="#94a3b8" />
                <stop offset="100%" stopColor="#64748b" />
              </linearGradient>
              
              <linearGradient id="hydraulicGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#e2e8f0" />
                <stop offset="25%" stopColor="#cbd5e1" />
                <stop offset="50%" stopColor="#94a3b8" />
                <stop offset="75%" stopColor="#64748b" />
                <stop offset="100%" stopColor="#475569" />
              </linearGradient>
              
              <linearGradient id="loadingZoneGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="50%" stopColor="#059669" />
                <stop offset="100%" stopColor="#047857" />
              </linearGradient>
              
              <linearGradient id="unloadingZoneGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="50%" stopColor="#d97706" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>
              
              <radialGradient id="tireGradient">
                <stop offset="0%" stopColor="#1a202c" />
                <stop offset="70%" stopColor="#2d3748" />
                <stop offset="100%" stopColor="#4a5568" />
              </radialGradient>
              
              <radialGradient id="rimGradient">
                <stop offset="0%" stopColor="#f7fafc" />
                <stop offset="50%" stopColor="#cbd5e1" />
                <stop offset="100%" stopColor="#94a3b8" />
              </radialGradient>
              
              <radialGradient id="sportRimGradient">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="50%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#d97706" />
              </radialGradient>
              
              <radialGradient id="premiumRimGradient">
                <stop offset="0%" stopColor="#e5e7eb" />
                <stop offset="50%" stopColor="#d1d5db" />
                <stop offset="100%" stopColor="#9ca3af" />
              </radialGradient>
              
              <linearGradient id="luxuryBlueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="25%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#2563eb" />
                <stop offset="75%" stopColor="#1d4ed8" />
                <stop offset="100%" stopColor="#1e40af" />
              </linearGradient>
              
              <linearGradient id="luxuryRedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f87171" />
                <stop offset="25%" stopColor="#ef4444" />
                <stop offset="50%" stopColor="#dc2626" />
                <stop offset="75%" stopColor="#b91c1c" />
                <stop offset="100%" stopColor="#991b1b" />
              </linearGradient>
              
              <linearGradient id="luxuryGoldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="25%" stopColor="#f59e0b" />
                <stop offset="50%" stopColor="#d97706" />
                <stop offset="75%" stopColor="#b45309" />
                <stop offset="100%" stopColor="#92400e" />
              </linearGradient>
              
              <linearGradient id="luxurySilverGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f1f5f9" />
                <stop offset="25%" stopColor="#e2e8f0" />
                <stop offset="50%" stopColor="#cbd5e1" />
                <stop offset="75%" stopColor="#94a3b8" />
                <stop offset="100%" stopColor="#64748b" />
              </linearGradient>
              
              <linearGradient id="luxuryGreenGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="25%" stopColor="#10b981" />
                <stop offset="50%" stopColor="#059669" />
                <stop offset="75%" stopColor="#047857" />
                <stop offset="100%" stopColor="#065f46" />
              </linearGradient>
              
              <linearGradient id="luxuryBlackGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#374151" />
                <stop offset="25%" stopColor="#1f2937" />
                <stop offset="50%" stopColor="#111827" />
                <stop offset="75%" stopColor="#0f172a" />
                <stop offset="100%" stopColor="#020617" />
              </linearGradient>
              
              <linearGradient id="headlightGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fef3c7" />
                <stop offset="50%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
              
              <linearGradient id="taillightGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fca5a5" />
                <stop offset="50%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#dc2626" />
              </linearGradient>
              
              <linearGradient id="grilleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#64748b" />
                <stop offset="50%" stopColor="#475569" />
                <stop offset="100%" stopColor="#334155" />
              </linearGradient>
              
              <linearGradient id="chromeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f8fafc" />
                <stop offset="25%" stopColor="#e2e8f0" />
                <stop offset="50%" stopColor="#cbd5e1" />
                <stop offset="75%" stopColor="#94a3b8" />
                <stop offset="100%" stopColor="#64748b" />
              </linearGradient>
              
              <linearGradient id="panelGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#cbd5e1" />
                <stop offset="50%" stopColor="#94a3b8" />
                <stop offset="100%" stopColor="#64748b" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      
      {/* Professional motion lines with depth */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-30">
        <div className="flex flex-col space-y-8">
          <div className="w-40 h-1 bg-gradient-to-r from-blue-500/60 to-transparent animate-pulse blur-sm"></div>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500/50 to-transparent animate-pulse blur-sm" style={{animationDelay: '0.5s'}}></div>
          <div className="w-48 h-1 bg-gradient-to-r from-blue-600/40 to-transparent animate-pulse blur-sm" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
      
      {/* Professional ambient glow effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer opacity-60"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
      
      {/* Enhanced smooth car animations with professional easing */}
      <style>
        {`
        @keyframes smoothLoad1 {
          0% { transform: translateX(0) translateY(0) scale(1); opacity: 0; }
          8% { opacity: 1; }
          25% { transform: translateX(130px) translateY(-25px) scale(0.95); }
          30% { transform: translateX(130px) translateY(-25px) scale(0.95); }
          50% { transform: translateX(130px) translateY(-25px) scale(0.95); }
          75% { transform: translateX(0) translateY(0) scale(1); }
          100% { transform: translateX(0) translateY(0) scale(1); opacity: 0; }
        }
        
        @keyframes smoothLoad2 {
          0% { transform: translateX(0) translateY(0) scale(1); opacity: 0; }
          8% { opacity: 1; }
          25% { transform: translateX(240px) translateY(-130px) scale(0.9); }
          30% { transform: translateX(240px) translateY(-130px) scale(0.9); }
          50% { transform: translateX(240px) translateY(-130px) scale(0.9); }
          75% { transform: translateX(0) translateY(0) scale(1); }
          100% { transform: translateX(0) translateY(0) scale(1); opacity: 0; }
        }
        
        @keyframes smoothLoad3 {
          0% { transform: translateX(0) translateY(0) scale(1); opacity: 0; }
          8% { opacity: 1; }
          25% { transform: translateX(340px) translateY(-50px) scale(0.95); }
          30% { transform: translateX(340px) translateY(-50px) scale(0.95); }
          50% { transform: translateX(340px) translateY(-50px) scale(0.95); }
          75% { transform: translateX(0) translateY(0) scale(1); }
          100% { transform: translateX(0) translateY(0) scale(1); opacity: 0; }
        }
        
        @keyframes smoothUnload1 {
          0% { transform: translateX(0) translateY(0) scale(0.9); opacity: 1; }
          25% { transform: translateX(0) translateY(0) scale(0.9); }
          50% { transform: translateX(510px) translateY(130px) scale(1); }
          75% { transform: translateX(510px) translateY(130px) scale(1); opacity: 1; }
          92% { opacity: 0; }
          100% { transform: translateX(0) translateY(0) scale(0.9); opacity: 0; }
        }
        
        @keyframes smoothUnload2 {
          0% { transform: translateX(0) translateY(0) scale(0.95); opacity: 1; }
          25% { transform: translateX(0) translateY(0) scale(0.95); }
          50% { transform: translateX(410px) translateY(55px) scale(1); }
          75% { transform: translateX(410px) translateY(55px) scale(1); opacity: 1; }
          92% { opacity: 0; }
          100% { transform: translateX(0) translateY(0) scale(0.95); opacity: 0; }
        }
        
        @keyframes smoothUnload3 {
          0% { transform: translateX(0) translateY(0) scale(0.9); opacity: 1; }
          25% { transform: translateX(0) translateY(0) scale(0.9); }
          50% { transform: translateX(340px) translateY(130px) scale(1); }
          75% { transform: translateX(340px) translateY(130px) scale(1); opacity: 1; }
          92% { opacity: 0; }
          100% { transform: translateX(0) translateY(0) scale(0.9); opacity: 0; }
        }
        `}
      </style>
    </div>
  );
};
