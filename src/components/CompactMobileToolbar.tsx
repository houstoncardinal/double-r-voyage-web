import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Grid3X3, Phone, FileText, X, Truck, Shield, Package, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const CompactMobileToolbar = () => {
  const [showServices, setShowServices] = useState(false);
  const location = useLocation();

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
      {/* Enhanced Luxury Services Modal */}
      {showServices && (
        <div className="fixed inset-0 bg-black/10 backdrop-blur-sm z-40 md:hidden" onClick={() => setShowServices(false)}>
          <div className="absolute bottom-20 left-4 right-4">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100/50 overflow-hidden backdrop-blur-xl">
              {/* Modal header with subtle glow */}
              <div className="px-5 py-4 border-b border-gray-100/80 bg-gradient-to-r from-gray-50/50 to-white">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-gray-800 tracking-wide">Premium Services</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowServices(false)}
                    className="h-7 w-7 p-0 rounded-full hover:bg-gray-100/70 transition-all duration-200 shadow-sm"
                  >
                    <X className="h-3.5 w-3.5 text-gray-500" />
                  </Button>
                </div>
              </div>
              
              {/* Enhanced service items */}
              <div className="p-4 space-y-1.5">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="flex items-center space-x-4 p-3 rounded-xl hover:bg-gray-50/80 transition-all duration-200 group border border-transparent hover:border-gray-200/50 hover:shadow-sm"
                      onClick={() => setShowServices(false)}
                    >
                      <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100/60 group-hover:bg-gray-200/60 transition-all duration-200 shadow-sm">
                        <Icon className="h-4 w-4 text-gray-600 stroke-[1.5]" />
                      </div>
                      <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-200">{service.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Premium Modern Mobile Toolbar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        {/* Subtle top glow */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/60 to-transparent"></div>
        
        <div className="bg-white/95 backdrop-blur-xl border-t border-gray-200/50 shadow-2xl">
          <div className="px-6 py-2.5 relative">
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-50/30 to-transparent pointer-events-none"></div>
            
            <div className="flex items-center justify-center relative">
              
              {/* Home */}
              <Link 
                to="/" 
                className={`flex flex-col items-center space-y-1.5 px-5 py-2 transition-all duration-200 relative group ${
                  getActiveState('/') 
                    ? 'text-gray-900' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <div className={`p-1 rounded-lg transition-all duration-200 ${
                  getActiveState('/') 
                    ? 'bg-gray-100/80 shadow-sm' 
                    : 'group-hover:bg-gray-50/60'
                }`}>
                  <Home className="h-4 w-4 stroke-[1.5]" />
                </div>
                <span className="text-xs font-medium tracking-wide">Home</span>
                {getActiveState('/') && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gray-800 rounded-full"></div>
                )}
              </Link>

              {/* Premium Separator with Glow */}
              <div className="h-10 w-px bg-gradient-to-b from-transparent via-gray-300/60 to-transparent mx-2 shadow-sm"></div>

              {/* Services */}
              <button 
                onClick={() => setShowServices(true)}
                className={`flex flex-col items-center space-y-1.5 px-5 py-2 transition-all duration-200 relative group ${
                  getActiveState('/services') 
                    ? 'text-gray-900' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <div className={`p-1 rounded-lg transition-all duration-200 ${
                  getActiveState('/services') 
                    ? 'bg-gray-100/80 shadow-sm' 
                    : 'group-hover:bg-gray-50/60'
                }`}>
                  <Grid3X3 className="h-4 w-4 stroke-[1.5]" />
                </div>
                <span className="text-xs font-medium tracking-wide">Services</span>
                {getActiveState('/services') && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gray-800 rounded-full"></div>
                )}
              </button>

              {/* Premium Separator with Glow */}
              <div className="h-10 w-px bg-gradient-to-b from-transparent via-gray-300/60 to-transparent mx-2 shadow-sm"></div>

              {/* Call */}
              <a 
                href="tel:8322823128" 
                className="flex flex-col items-center space-y-1.5 px-5 py-2 text-gray-500 hover:text-gray-700 transition-all duration-200 group"
              >
                <div className="p-1 rounded-lg transition-all duration-200 group-hover:bg-gray-50/60">
                  <Phone className="h-4 w-4 stroke-[1.5]" />
                </div>
                <span className="text-xs font-medium tracking-wide">Call</span>
              </a>

              {/* Premium Separator with Glow */}
              <div className="h-10 w-px bg-gradient-to-b from-transparent via-gray-300/60 to-transparent mx-2 shadow-sm"></div>

              {/* Quote */}
              <Link 
                to="/get-a-quote" 
                className={`flex flex-col items-center space-y-1.5 px-5 py-2 transition-all duration-200 relative group ${
                  getActiveState('/get-a-quote') 
                    ? 'text-gray-900' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <div className={`p-1 rounded-lg transition-all duration-200 ${
                  getActiveState('/get-a-quote') 
                    ? 'bg-gray-100/80 shadow-sm' 
                    : 'group-hover:bg-gray-50/60'
                }`}>
                  <FileText className="h-4 w-4 stroke-[1.5]" />
                </div>
                <span className="text-xs font-medium tracking-wide">Quote</span>
                {getActiveState('/get-a-quote') && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gray-800 rounded-full"></div>
                )}
              </Link>

            </div>
          </div>
          
          {/* Minimal safe area with subtle gradient */}
          <div className="h-safe-area-inset-bottom bg-gradient-to-t from-gray-50/20 to-transparent"></div>
        </div>
      </div>
    </>
  );
};