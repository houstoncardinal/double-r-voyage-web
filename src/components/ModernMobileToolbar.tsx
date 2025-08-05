import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { InteractiveMenu } from '@/components/ui/modern-mobile-menu';
import { Home, Menu, Phone, Calculator, X, Truck, Shield, Package, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { InteractiveMenuItem } from '@/components/ui/modern-mobile-menu';

export const ModernMobileToolbar = () => {
  const [showServices, setShowServices] = useState(false);
  const location = useLocation();

  // Transportation company themed menu items
  const transportationMenuItems: InteractiveMenuItem[] = [
    { label: 'Home', icon: Home },
    { label: 'Services', icon: Menu },
    { label: 'Call', icon: Phone },
    { label: 'Quote', icon: Calculator },
  ];

  const services = [
    { name: "Auto Transport", href: "/services/auto-transport", icon: Truck },
    { name: "Hazmat Transportation", href: "/services/hazmat-transportation", icon: Shield },
    { label: "Flatbed Hauling", href: "/services/flatbed-hauling", icon: Package },
    { name: "Dry Van Logistics", href: "/services/dry-van-logistics", icon: Zap },
  ];

  // Handle menu item clicks
  const handleMenuAction = (index: number) => {
    switch (index) {
      case 0: // Home
        window.location.href = '/';
        break;
      case 1: // Services
        setShowServices(true);
        break;
      case 2: // Call
        window.location.href = 'tel:8322823128';
        break;
      case 3: // Quote
        window.location.href = '/get-a-quote';
        break;
    }
  };

  // Get active index based on current route
  const getActiveIndex = () => {
    const path = location.pathname;
    if (path === '/') return 0;
    if (path.includes('/services/')) return 1;
    if (path === '/get-a-quote') return 3;
    return 0;
  };

  const customAccentColor = 'rgb(59, 130, 246)'; // Blue-500 to match your brand

  return (
    <>
      {/* Services Modal Overlay */}
      {showServices && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden" onClick={() => setShowServices(false)}>
          <div className="absolute bottom-28 left-4 right-4">
            <div className="bg-white/95 backdrop-blur-xl border border-blue-200/30 rounded-3xl luxury-shadow-2xl animate-slide-in-up overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">Our Premium Services</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowServices(false)}
                    className="h-9 w-9 p-0 rounded-full hover:bg-white/20 text-white"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              
              <div className="p-6 space-y-3">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="flex items-center space-x-4 p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 border border-blue-200/30 hover:border-blue-300/50 transition-all duration-300 group luxury-shadow"
                      onClick={() => setShowServices(false)}
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center luxury-shadow-xl group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900 text-lg">{service.name}</span>
                        <p className="text-sm text-gray-600">Premium transportation solutions</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modern Mobile Toolbar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="p-4 bg-gradient-to-t from-white via-white/95 to-transparent backdrop-blur-xl">
          <div onClick={(e) => {
            const target = e.target as HTMLElement;
            const menuItem = target.closest('.menu__item');
            if (menuItem) {
              const index = Array.from(menuItem.parentElement?.children || []).indexOf(menuItem);
              handleMenuAction(index);
            }
          }}>
            <InteractiveMenu 
              items={transportationMenuItems}
              accentColor={customAccentColor}
            />
          </div>
        </div>
        
        {/* Safe area for devices with home indicators */}
        <div className="h-safe-area-inset-bottom bg-white/80"></div>
      </div>
    </>
  );
};