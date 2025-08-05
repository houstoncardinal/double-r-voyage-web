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
      {/* Luxury Services Modal */}
      {showServices && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden" onClick={() => setShowServices(false)}>
          <div className="absolute bottom-16 left-4 right-4">
            <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-gray-900">Services</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowServices(false)}
                    className="h-6 w-6 p-0 rounded-full hover:bg-gray-100"
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              
              <div className="p-3 space-y-1">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-150"
                      onClick={() => setShowServices(false)}
                    >
                      <div className="w-6 h-6 flex items-center justify-center">
                        <Icon className="h-4 w-4 text-gray-600" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{service.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Ultra-Clean Luxury Mobile Toolbar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-2">
            <div className="flex items-center justify-center">
              
              {/* Home */}
              <Link 
                to="/" 
                className={`flex flex-col items-center space-y-1 px-4 py-2 transition-colors duration-150 ${
                  getActiveState('/') 
                    ? 'text-gray-900' 
                    : 'text-gray-500'
                }`}
              >
                <Home className="h-4 w-4 stroke-[1.5]" />
                <span className="text-xs font-medium">Home</span>
              </Link>

              {/* Light Separator */}
              <div className="h-8 w-px bg-gray-200 mx-1"></div>

              {/* Services */}
              <button 
                onClick={() => setShowServices(true)}
                className={`flex flex-col items-center space-y-1 px-4 py-2 transition-colors duration-150 ${
                  getActiveState('/services') 
                    ? 'text-gray-900' 
                    : 'text-gray-500'
                }`}
              >
                <Grid3X3 className="h-4 w-4 stroke-[1.5]" />
                <span className="text-xs font-medium">Services</span>
              </button>

              {/* Light Separator */}
              <div className="h-8 w-px bg-gray-200 mx-1"></div>

              {/* Call */}
              <a 
                href="tel:8322823128" 
                className="flex flex-col items-center space-y-1 px-4 py-2 text-gray-500 transition-colors duration-150"
              >
                <Phone className="h-4 w-4 stroke-[1.5]" />
                <span className="text-xs font-medium">Call</span>
              </a>

              {/* Light Separator */}
              <div className="h-8 w-px bg-gray-200 mx-1"></div>

              {/* Quote */}
              <Link 
                to="/get-a-quote" 
                className={`flex flex-col items-center space-y-1 px-4 py-2 transition-colors duration-150 ${
                  getActiveState('/get-a-quote') 
                    ? 'text-gray-900' 
                    : 'text-gray-500'
                }`}
              >
                <FileText className="h-4 w-4 stroke-[1.5]" />
                <span className="text-xs font-medium">Quote</span>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};