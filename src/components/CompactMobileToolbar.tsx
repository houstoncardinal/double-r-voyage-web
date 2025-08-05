import React, { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Grid3X3, Phone, FileText, X, Truck, Shield, Package, Zap } from 'lucide-react';

export const CompactMobileToolbar = React.memo(() => {
  const [showServices, setShowServices] = useState(false);
  const location = useLocation();

  const toggleServices = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowServices(prev => !prev);
  }, []);

  const closeServices = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowServices(false);
  }, []);

  const services = [
    { name: "Auto Transport", href: "/services/auto-transport", icon: Truck },
    { name: "Hazmat Transportation", href: "/services/hazmat-transportation", icon: Shield },
    { name: "Flatbed Hauling", href: "/services/flatbed-hauling", icon: Package },
    { name: "Dry Van Logistics", href: "/services/dry-van-logistics", icon: Zap },
  ];

  const getActiveState = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path === '/services' && location.pathname.includes('/services/')) return true;
    if (path === '/get-a-quote' && location.pathname === '/get-a-quote') return true;
    return false;
  };

  return (
    <>
      {/* Services Modal */}
      {showServices && (
        <>
          {/* Premium Backdrop with subtle blur */}
          <div 
            className="fixed inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/30 backdrop-blur-sm z-[100] md:hidden animate-fade-in"
            style={{ touchAction: 'manipulation' }}
            onClick={closeServices}
            onTouchEnd={closeServices}
          />
          
          {/* Luxury Services Modal */}
          <div className="fixed bottom-[75px] left-3 right-3 z-[101] md:hidden animate-slide-up-modal">
            <div className="bg-gradient-to-br from-white via-slate-50/95 to-white rounded-2xl shadow-2xl border border-white/20 backdrop-blur-xl overflow-hidden">
              {/* Elegant Header with gradient */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-indigo-50/50 to-blue-50"></div>
                <div className="relative flex items-center justify-between px-5 py-4 border-b border-slate-200/50">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 animate-pulse"></div>
                    <h3 className="text-base font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                      Premium Services
                    </h3>
                  </div>
                  <button
                    onClick={closeServices}
                    onTouchEnd={closeServices}
                    className="p-2 rounded-full bg-white/80 hover:bg-white border border-slate-200/50 hover:border-slate-300 transition-all duration-200 hover:scale-105"
                    style={{ touchAction: 'manipulation' }}
                  >
                    <X className="h-4 w-4 text-slate-500 hover:text-slate-700" />
                  </button>
                </div>
              </div>
              
              {/* Premium Services Grid */}
              <div className="p-5">
                <div className="grid grid-cols-2 gap-4">
                  {services.map((service, index) => {
                    const Icon = service.icon;
                    const gradients = [
                      'from-blue-500 to-cyan-500',
                      'from-red-500 to-orange-500', 
                      'from-emerald-500 to-teal-500',
                      'from-purple-500 to-indigo-500'
                    ];
                    const bgGradients = [
                      'from-blue-50 to-cyan-50',
                      'from-red-50 to-orange-50',
                      'from-emerald-50 to-teal-50', 
                      'from-purple-50 to-indigo-50'
                    ];
                    return (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="group relative overflow-hidden block touch-manipulation"
                        onClick={() => setShowServices(false)}
                        onTouchStart={() => {}}
                      >
                        <div className={`relative flex flex-col items-center p-4 rounded-xl bg-gradient-to-br ${bgGradients[index]} border border-white/50 hover:border-white/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group-active:scale-[0.98]`}>
                          {/* Subtle shine effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -skew-x-12 group-hover:animate-shimmer"></div>
                          
                          {/* Premium Icon Container */}
                          <div className={`relative w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${gradients[index]} shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                            <div className="absolute inset-0 rounded-xl bg-white/20 group-hover:bg-white/30 transition-colors duration-300"></div>
                            <Icon className="relative h-6 w-6 text-white drop-shadow-sm" strokeWidth={2.5} />
                          </div>
                          
                          {/* Service Name */}
                          <span className="text-xs font-bold text-slate-700 mt-3 text-center leading-tight group-hover:text-slate-800 transition-colors duration-200">
                            {service.name}
                          </span>
                          
                          {/* Subtle bottom accent */}
                          <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${gradients[index]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
                
                {/* Premium footer accent */}
                <div className="mt-4 pt-3 border-t border-slate-200/50">
                  <div className="flex items-center justify-center space-x-2 text-xs text-slate-500">
                    <div className="w-1 h-1 rounded-full bg-blue-400"></div>
                    <span className="font-medium">Premium Transportation Solutions</span>
                    <div className="w-1 h-1 rounded-full bg-blue-400"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Mobile Toolbar - Fixed positioning with proper z-index */}
      <div className="fixed bottom-0 left-0 right-0 z-[50] md:hidden pointer-events-auto">
        <div className="bg-white border-t border-gray-200 shadow-lg">
          <div className="flex items-center justify-around px-2 py-3 pb-safe">
            
            {/* Home Button */}
            <Link 
              to="/" 
              className={`flex flex-col items-center p-2 min-w-[64px] rounded-lg transition-all ${
                getActiveState('/') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
              }`}
              style={{ touchAction: 'manipulation' }}
            >
              <Home className="h-6 w-6 mb-1" strokeWidth={getActiveState('/') ? 2.5 : 2} />
              <span className="text-xs font-medium">Home</span>
            </Link>

            {/* Services Button */}
            <button 
              onClick={toggleServices}
              onTouchEnd={toggleServices}
              className={`flex flex-col items-center p-2 min-w-[64px] rounded-lg transition-all ${
                getActiveState('/services') || showServices
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
              }`}
              style={{ touchAction: 'manipulation' }}
            >
              <Grid3X3 className="h-6 w-6 mb-1" strokeWidth={getActiveState('/services') || showServices ? 2.5 : 2} />
              <span className="text-xs font-medium">Services</span>
            </button>

            {/* Call Button */}
            <a 
              href="tel:8322823128" 
              className="flex flex-col items-center p-2 min-w-[64px] rounded-lg text-gray-600 hover:text-green-600 hover:bg-green-50 transition-all"
              style={{ touchAction: 'manipulation' }}
            >
              <Phone className="h-6 w-6 mb-1" strokeWidth={2} />
              <span className="text-xs font-medium">Call</span>
            </a>

            {/* Quote Button */}
            <Link 
              to="/get-a-quote" 
              className={`flex flex-col items-center p-2 min-w-[64px] rounded-lg transition-all ${
                getActiveState('/get-a-quote') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
              }`}
              style={{ touchAction: 'manipulation' }}
            >
              <FileText className="h-6 w-6 mb-1" strokeWidth={getActiveState('/get-a-quote') ? 2.5 : 2} />
              <span className="text-xs font-medium">Quote</span>
            </Link>

          </div>
        </div>
      </div>
    </>
  );
});