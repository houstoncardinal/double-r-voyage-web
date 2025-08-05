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
          {/* Backdrop - Fixed positioning and proper z-index */}
          <div 
            className="fixed inset-0 bg-black/20 z-[100] md:hidden"
            style={{ touchAction: 'manipulation' }}
            onClick={closeServices}
            onTouchEnd={closeServices}
          />
          
          {/* Services Modal */}
          <div className="fixed bottom-[70px] left-4 right-4 z-[101] md:hidden">
            <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-gray-50">
                <h3 className="text-sm font-semibold text-gray-800">Our Services</h3>
                <button
                  onClick={closeServices}
                  onTouchEnd={closeServices}
                  className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
                  style={{ touchAction: 'manipulation' }}
                >
                  <X className="h-4 w-4 text-gray-500" />
                </button>
              </div>
              
              {/* Services Grid */}
              <div className="p-4">
                <div className="grid grid-cols-2 gap-3">
                  {services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex flex-col items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                        onClick={closeServices}
                        style={{ touchAction: 'manipulation' }}
                      >
                        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 group-hover:bg-blue-100 transition-colors">
                          <Icon className="h-5 w-5 text-gray-600 group-hover:text-blue-600" />
                        </div>
                        <span className="text-xs font-medium text-gray-700 mt-2 text-center leading-tight">
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