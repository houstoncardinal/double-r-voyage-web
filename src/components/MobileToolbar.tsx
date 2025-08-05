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
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden" onClick={() => setShowServices(false)}>
          <div className="absolute bottom-20 left-0 right-0">
            <div className="mx-4 bg-white border border-gray-200 rounded-xl shadow-xl">
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">Services</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowServices(false)}
                  className="h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="p-2">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                      onClick={() => setShowServices(false)}
                    >
                      <Icon className="h-5 w-5 text-gray-600" />
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
        <div className="bg-white border-t border-gray-200 shadow-lg">
          <div className="grid grid-cols-4 h-16">
            
            {/* Home Button */}
            <Link to="/" className="flex flex-col items-center justify-center space-y-1 hover:bg-gray-50 transition-colors duration-200">
              <Home className="h-5 w-5 text-gray-600" />
              <span className="text-xs font-medium text-gray-600">Home</span>
            </Link>

            {/* Services Button */}
            <button 
              onClick={() => setShowServices(true)}
              className="flex flex-col items-center justify-center space-y-1 hover:bg-gray-50 transition-colors duration-200"
            >
              <Menu className="h-5 w-5 text-gray-600" />
              <span className="text-xs font-medium text-gray-600">Services</span>
            </button>

            {/* Call Button */}
            <a href="tel:8322823128" className="flex flex-col items-center justify-center space-y-1 hover:bg-gray-50 transition-colors duration-200">
              <Phone className="h-5 w-5 text-gray-600" />
              <span className="text-xs font-medium text-gray-600">Call</span>
            </a>

            {/* Quote Button */}
            <Link to="/get-a-quote" className="flex flex-col items-center justify-center space-y-1 hover:bg-gray-50 transition-colors duration-200">
              <Calculator className="h-5 w-5 text-gray-600" />
              <span className="text-xs font-medium text-gray-600">Quote</span>
            </Link>

          </div>
        </div>
      </div>
    </>
  );
};