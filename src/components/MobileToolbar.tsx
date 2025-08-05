import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Menu, Phone, Calculator, X, Truck, Shield, Package, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const MobileToolbar = () => {
  const [showServices, setShowServices] = useState(false);

  const services = [
    { name: "Auto Transport", href: "/services/auto-transport", icon: Truck },
    { name: "Hazmat Transportation", href: "/services/hazmat-transportation", icon: Shield },
    { name: "Flatbed Hauling", href: "/services/flatbed-hauling", icon: Package },
    { name: "Dry Van Logistics", href: "/services/dry-van-logistics", icon: Zap },
  ];

  return (
    <>
      {/* Services Modal Overlay */}
      {showServices && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden" onClick={() => setShowServices(false)}>
          <div className="absolute bottom-24 left-0 right-0">
            <div className="mx-4 bg-white/90 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl">
              <div className="flex items-center justify-between p-5 border-b border-gray-100/50">
                <h3 className="text-lg font-semibold text-gray-900">Services</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowServices(false)}
                  className="h-8 w-8 p-0 rounded-full hover:bg-gray-100/50"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="p-3">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="flex items-center space-x-4 p-4 rounded-xl hover:bg-white/40 backdrop-blur-sm transition-all duration-300 border border-transparent hover:border-white/30"
                      onClick={() => setShowServices(false)}
                    >
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/30">
                        <Icon className="h-5 w-5 text-gray-700" />
                      </div>
                      <span className="font-medium text-gray-900">{service.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Toolbar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        {/* Glass morphism background */}
        <div className="bg-white/80 backdrop-blur-xl border-t border-white/20 shadow-2xl">
          <div className="relative">
            {/* Subtle top highlight */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
            
            <div className="grid grid-cols-4 h-20 relative">
              
              {/* Home Button */}
              <Link to="/" className="flex flex-col items-center justify-center space-y-2 hover:bg-white/30 transition-all duration-300 backdrop-blur-sm relative group">
                <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/30 group-hover:bg-white/40 group-hover:scale-105 transition-all duration-300 shadow-lg">
                  <Home className="h-4 w-4 text-gray-700" />
                </div>
                <span className="text-xs font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">Home</span>
              </Link>

              {/* Vertical Separator */}
              <div className="absolute left-1/4 top-3 bottom-3 w-px bg-gradient-to-b from-transparent via-gray-300/40 to-transparent shadow-sm"></div>

              {/* Services Button */}
              <button 
                onClick={() => setShowServices(true)}
                className="flex flex-col items-center justify-center space-y-2 hover:bg-white/30 transition-all duration-300 backdrop-blur-sm relative group"
              >
                <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/30 group-hover:bg-white/40 group-hover:scale-105 transition-all duration-300 shadow-lg">
                  <Menu className="h-4 w-4 text-gray-700" />
                </div>
                <span className="text-xs font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">Services</span>
              </button>

              {/* Vertical Separator */}
              <div className="absolute left-2/4 top-3 bottom-3 w-px bg-gradient-to-b from-transparent via-gray-300/40 to-transparent shadow-sm"></div>

              {/* Call Button */}
              <a href="tel:8322823128" className="flex flex-col items-center justify-center space-y-2 hover:bg-white/30 transition-all duration-300 backdrop-blur-sm relative group">
                <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/30 group-hover:bg-white/40 group-hover:scale-105 transition-all duration-300 shadow-lg">
                  <Phone className="h-4 w-4 text-gray-700" />
                </div>
                <span className="text-xs font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">Call</span>
              </a>

              {/* Vertical Separator */}
              <div className="absolute left-3/4 top-3 bottom-3 w-px bg-gradient-to-b from-transparent via-gray-300/40 to-transparent shadow-sm"></div>

              {/* Quote Button */}
              <Link to="/get-a-quote" className="flex flex-col items-center justify-center space-y-2 hover:bg-white/30 transition-all duration-300 backdrop-blur-sm relative group">
                <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/30 group-hover:bg-white/40 group-hover:scale-105 transition-all duration-300 shadow-lg">
                  <Calculator className="h-4 w-4 text-gray-700" />
                </div>
                <span className="text-xs font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">Quote</span>
              </Link>

            </div>
            
            {/* Bottom safe area with glass effect */}
            <div className="h-safe-area-inset-bottom bg-white/60 backdrop-blur-xl"></div>
          </div>
        </div>
      </div>
    </>
  );
};