import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Menu, Phone, Calculator, X, Truck, Shield, Package, Zap } from 'lucide-react';
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
      {/* Services Modal Overlay */}
      {showServices && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden" onClick={() => setShowServices(false)}>
          <div className="absolute bottom-20 left-4 right-4">
            <div className="bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-2xl animate-slide-in-up overflow-hidden">
              <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-6 py-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">Services</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowServices(false)}
                    className="h-8 w-8 p-0 rounded-full hover:bg-white/20 text-white"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="p-4 space-y-2">
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all duration-200 group"
                      onClick={() => setShowServices(false)}
                    >
                      <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                        <Icon className="h-4 w-4 text-white" />
                      </div>
                      <span className="font-medium text-gray-900 text-sm">{service.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Compact Fortune 500 Mobile Toolbar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="bg-white/95 backdrop-blur-xl border-t border-gray-200/50 shadow-2xl">
          <div className="px-6 py-3">
            <div className="flex items-center justify-between max-w-sm mx-auto">
              
              {/* Home */}
              <Link 
                to="/" 
                className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-all duration-200 ${
                  getActiveState('/') 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Home className="h-5 w-5" />
                <span className="text-xs font-medium">Home</span>
              </Link>

              {/* Services */}
              <button 
                onClick={() => setShowServices(true)}
                className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-all duration-200 ${
                  getActiveState('/services') 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Menu className="h-5 w-5" />
                <span className="text-xs font-medium">Services</span>
              </button>

              {/* Call */}
              <a 
                href="tel:8322823128" 
                className="flex flex-col items-center space-y-1 p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200"
              >
                <Phone className="h-5 w-5" />
                <span className="text-xs font-medium">Call</span>
              </a>

              {/* Quote */}
              <Link 
                to="/get-a-quote" 
                className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-all duration-200 ${
                  getActiveState('/get-a-quote') 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Calculator className="h-5 w-5" />
                <span className="text-xs font-medium">Quote</span>
              </Link>

            </div>
          </div>
          
          {/* Minimal safe area */}
          <div className="h-safe-area-inset-bottom bg-white/80"></div>
        </div>
      </div>
    </>
  );
};