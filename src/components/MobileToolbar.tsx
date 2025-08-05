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
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden" onClick={() => setShowServices(false)}>
          <div className="absolute bottom-24 left-4 right-4">
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

      {/* Luxury Mobile Toolbar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        {/* Luxury gradient background with glass effect */}
        <div className="relative">
          {/* Premium gradient backdrop */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-blue-900/40 to-transparent"></div>
          <div className="absolute inset-0 bg-white/10 backdrop-blur-2xl"></div>
          
          {/* Luxury border glow */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"></div>
          
          <div className="relative px-6 py-4">
            <div className="bg-gradient-to-r from-white/20 via-white/25 to-white/20 backdrop-blur-xl border border-white/30 rounded-3xl luxury-shadow-2xl p-4">
              <div className="flex items-center justify-between">
                
                {/* Home Button */}
                <Link to="/" className="group flex flex-col items-center space-y-2 p-3 rounded-2xl hover:bg-white/20 transition-all duration-500">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 rounded-2xl flex items-center justify-center luxury-shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-white/20">
                    <Home className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-white/90 group-hover:text-white transition-colors duration-300 tracking-wide">Home</span>
                </Link>

                {/* Services Button */}
                <button 
                  onClick={() => setShowServices(true)}
                  className="group flex flex-col items-center space-y-2 p-3 rounded-2xl hover:bg-white/20 transition-all duration-500"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 via-cyan-700 to-blue-600 rounded-2xl flex items-center justify-center luxury-shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-white/20">
                    <Menu className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-white/90 group-hover:text-white transition-colors duration-300 tracking-wide">Services</span>
                </button>

                {/* Call Button */}
                <a href="tel:8322823128" className="group flex flex-col items-center space-y-2 p-3 rounded-2xl hover:bg-white/20 transition-all duration-500">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 via-green-700 to-emerald-600 rounded-2xl flex items-center justify-center luxury-shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-white/20">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-white/90 group-hover:text-white transition-colors duration-300 tracking-wide">Call</span>
                </a>

                {/* Quote Button */}
                <Link to="/get-a-quote" className="group flex flex-col items-center space-y-2 p-3 rounded-2xl hover:bg-white/20 transition-all duration-500">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-600 rounded-2xl flex items-center justify-center luxury-shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-white/20">
                    <Calculator className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-white/90 group-hover:text-white transition-colors duration-300 tracking-wide">Quote</span>
                </Link>

              </div>
            </div>
          </div>
          
          {/* Premium bottom glow */}
          <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent blur-sm"></div>
          
          {/* Safe area */}
          <div className="h-safe-area-inset-bottom bg-gradient-to-t from-slate-900/60 to-transparent"></div>
        </div>
      </div>
    </>
  );
};