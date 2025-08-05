import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Menu, Phone, Calculator, X, Truck, Shield, Package, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const MobileToolbar = () => {
  const [showServices, setShowServices] = useState(false);

  const services = [
    { name: "Auto Transport", href: "/services/auto-transport", icon: Truck, color: "blue" },
    { name: "Hazmat Transportation", href: "/services/hazmat-transportation", icon: Shield, color: "red" },
    { name: "Flatbed Hauling", href: "/services/flatbed-hauling", icon: Package, color: "green" },
    { name: "Dry Van Logistics", href: "/services/dry-van-logistics", icon: Zap, color: "purple" },
  ];

  const getServiceIconBg = (color: string) => {
    const colorMap = {
      blue: "bg-gradient-to-br from-blue-600 to-blue-700",
      red: "bg-gradient-to-br from-red-600 to-red-700",
      green: "bg-gradient-to-br from-green-600 to-green-700",
      purple: "bg-gradient-to-br from-purple-600 to-purple-700",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <>
      {/* Services Modal Overlay */}
      {showServices && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden">
          <div className="absolute bottom-20 left-4 right-4">
            <div className="bg-white/95 backdrop-blur-sm border border-blue-200/30 rounded-2xl p-6 luxury-shadow-2xl animate-slide-in-up">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Our Services</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowServices(false)}
                  className="h-8 w-8 p-0 rounded-full hover:bg-gray-100"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="grid grid-cols-1 gap-3">
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="flex items-center space-x-3 p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 group"
                      onClick={() => setShowServices(false)}
                    >
                      <div className={`w-10 h-10 ${getServiceIconBg(service.color)} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{service.name}</span>
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
        {/* Gradient backdrop */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/95 to-transparent backdrop-blur-xl"></div>
        
        {/* Toolbar container */}
        <div className="relative">
          {/* Top border with gradient */}
          <div className="h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
          
          {/* Main toolbar */}
          <div className="px-4 py-3">
            <div className="bg-white/90 backdrop-blur-sm border border-blue-200/50 rounded-2xl p-3 luxury-shadow-2xl">
              <div className="flex items-center justify-between">
                
                {/* Home Button */}
                <Link to="/" className="group">
                  <div className="flex flex-col items-center space-y-1 p-2 rounded-xl hover:bg-blue-50 transition-all duration-300">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 luxury-shadow">
                      <Home className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-xs font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300">Home</span>
                  </div>
                </Link>

                {/* Separator */}
                <div className="h-12 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent mx-1"></div>

                {/* Services Button */}
                <button 
                  onClick={() => setShowServices(true)}
                  className="group"
                >
                  <div className="flex flex-col items-center space-y-1 p-2 rounded-xl hover:bg-blue-50 transition-all duration-300">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 luxury-shadow">
                      <Menu className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-xs font-medium text-gray-700 group-hover:text-cyan-600 transition-colors duration-300">Services</span>
                  </div>
                </button>

                {/* Separator */}
                <div className="h-12 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent mx-1"></div>

                {/* Call Button */}
                <a href="tel:8322823128" className="group">
                  <div className="flex flex-col items-center space-y-1 p-2 rounded-xl hover:bg-green-50 transition-all duration-300">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 luxury-shadow">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-xs font-medium text-gray-700 group-hover:text-green-600 transition-colors duration-300">Call</span>
                  </div>
                </a>

                {/* Separator */}
                <div className="h-12 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent mx-1"></div>

                {/* Quote Button */}
                <Link to="/get-a-quote" className="group">
                  <div className="flex flex-col items-center space-y-1 p-2 rounded-xl hover:bg-purple-50 transition-all duration-300">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 luxury-shadow">
                      <Calculator className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-xs font-medium text-gray-700 group-hover:text-purple-600 transition-colors duration-300">Quote</span>
                  </div>
                </Link>

              </div>
            </div>
          </div>
          
          {/* Bottom safe area for devices with home indicators */}
          <div className="h-safe-area-inset-bottom bg-white/80"></div>
        </div>
      </div>
    </>
  );
};