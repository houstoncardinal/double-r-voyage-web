import React, { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Grid3X3, Phone, FileText, X, Truck, Shield, Package, Zap } from 'lucide-react';

export const CompactMobileToolbar = React.memo(() => {
  const [showServices, setShowServices] = useState(false);
  const location = useLocation();

  const toggleServices = useCallback(() => setShowServices(prev => !prev), []);
  const closeServices = useCallback(() => setShowServices(false), []);

  const services = [
    { name: "Auto Transport", href: "/services/auto-transport", icon: Truck },
    { name: "Hazmat Transportation", href: "/services/hazmat-transportation", icon: Shield },
    { name: "Flatbed Hauling", href: "/services/flatbed-hauling", icon: Package },
    { name: "Dry Van Logistics", href: "/services/dry-van-logistics", icon: Zap },
  ];

  const getActiveState = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path === '/services' && location.pathname.includes('/services/')) return true;
    if (path === '/get-a-quote' && location.pathname === '/get-a-quote') return true;
    return false;
  };

  return (
    <>
      {/* Compact Services Modal - Above toolbar, not full screen */}
      {showServices && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden animate-fade-in" 
            onClick={closeServices}
          />
          
          {/* Compact Modal - positioned just above toolbar */}
          <div className="fixed bottom-16 left-2 right-2 z-50 md:hidden animate-slide-in-up">
            <div className="bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-gray-200/50 overflow-hidden">
              {/* Compact header */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-100/50 bg-gray-50/30">
                <h3 className="text-sm font-semibold text-gray-800">Services</h3>
                <button
                  onClick={closeServices}
                  className="p-1 rounded-full hover:bg-gray-100/70 transition-colors duration-200"
                >
                  <X className="h-4 w-4 text-gray-500" />
                </button>
              </div>
              
              {/* Compact grid layout for services */}
              <div className="p-3">
                <div className="grid grid-cols-2 gap-2">
                  {services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 group"
                        onClick={closeServices}
                      >
                        <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 group-hover:bg-blue-100 group-hover:scale-105 transition-all duration-200">
                          <Icon className="h-4 w-4 text-gray-600 group-hover:text-blue-600" />
                        </div>
                        <span className="text-xs font-medium text-gray-700 mt-1.5 text-center leading-tight">
                          {service.name}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Ultra-Compact Mobile Toolbar */}
      <div className="fixed bottom-0 left-0 right-0 z-30 md:hidden">
        <div className="bg-white/95 backdrop-blur-xl border-t border-gray-200/50 shadow-lg">
          <div className="flex items-center justify-around px-2 py-2 safe-area-bottom">
            
            {/* Home */}
            <Link 
              to="/" 
              className={`flex flex-col items-center py-2 px-3 min-w-[60px] transition-all duration-200 ${
                getActiveState('/') 
                  ? 'text-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <div className={`p-1.5 rounded-lg transition-all duration-200 ${
                getActiveState('/') 
                  ? 'bg-blue-50 shadow-sm scale-105' 
                  : 'hover:bg-gray-50'
              }`}>
                <Home className="h-5 w-5" strokeWidth={getActiveState('/') ? 2.5 : 2} />
              </div>
              <span className="text-xs font-medium mt-1">Home</span>
            </Link>

            {/* Services */}
            <button 
              onClick={toggleServices}
              className={`flex flex-col items-center py-2 px-3 min-w-[60px] transition-all duration-200 ${
                getActiveState('/services') || showServices
                  ? 'text-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <div className={`p-1.5 rounded-lg transition-all duration-200 ${
                getActiveState('/services') || showServices
                  ? 'bg-blue-50 shadow-sm scale-105' 
                  : 'hover:bg-gray-50'
              }`}>
                <Grid3X3 className="h-5 w-5" strokeWidth={getActiveState('/services') || showServices ? 2.5 : 2} />
              </div>
              <span className="text-xs font-medium mt-1">Services</span>
            </button>

            {/* Call */}
            <a 
              href="tel:8322823128" 
              className="flex flex-col items-center py-2 px-3 min-w-[60px] text-gray-500 hover:text-green-600 transition-all duration-200 group"
            >
              <div className="p-1.5 rounded-lg transition-all duration-200 group-hover:bg-green-50 group-hover:scale-105">
                <Phone className="h-5 w-5 group-hover:text-green-600" strokeWidth={2} />
              </div>
              <span className="text-xs font-medium mt-1 group-hover:text-green-600">Call</span>
            </a>

            {/* Quote */}
            <Link 
              to="/get-a-quote" 
              className={`flex flex-col items-center py-2 px-3 min-w-[60px] transition-all duration-200 ${
                getActiveState('/get-a-quote') 
                  ? 'text-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <div className={`p-1.5 rounded-lg transition-all duration-200 ${
                getActiveState('/get-a-quote') 
                  ? 'bg-blue-50 shadow-sm scale-105' 
                  : 'hover:bg-gray-50'
              }`}>
                <FileText className="h-5 w-5" strokeWidth={getActiveState('/get-a-quote') ? 2.5 : 2} />
              </div>
              <span className="text-xs font-medium mt-1">Quote</span>
            </Link>

          </div>
        </div>
      </div>
    </>
  );
});