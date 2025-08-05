
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, Phone, ArrowRight, Sparkles, ChevronDown, Truck, Shield, Package, Zap } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const serviceItems = [
    { name: "Auto Transport", href: "/services/auto-transport", icon: Truck, description: "Port to dealer vehicle transportation" },
    { name: "Hazmat Transportation", href: "/services/hazmat-transportation", icon: Shield, description: "DOT & EPA certified handling" },
    { name: "Flatbed Hauling", href: "/services/flatbed-hauling", icon: Package, description: "Heavy equipment & oversized loads" },
    { name: "Dry Van Logistics", href: "/services/dry-van-logistics", icon: Zap, description: "General freight & climate control" },
  ];

  return (
    <nav className="fixed top-0 w-full glass-effect border-b border-white/20 z-50 luxury-shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:h-24">
          {/* Logo - Enhanced for mobile */}
          <div className="flex-shrink-0">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent tracking-tight">
              Double R{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Transportation
              </span>
            </h1>
          </div>

          {/* Desktop Navigation - Enhanced */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 px-4 py-4 text-base font-semibold transition-all duration-500 relative group tracking-wide"
                >
                  {item.name}
                  <span className="absolute bottom-2 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full"></span>
                </a>
              ))}
              
              {/* Services Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="text-gray-700 hover:text-blue-600 px-4 py-4 text-base font-semibold transition-all duration-500 relative group tracking-wide flex items-center">
                  Services
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                  <span className="absolute bottom-2 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full"></span>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-80 bg-white border border-gray-200 shadow-2xl rounded-2xl p-2 z-50">
                  {serviceItems.map((service) => {
                    const Icon = service.icon;
                    return (
                      <DropdownMenuItem key={service.name} className="p-0">
                        <a
                          href={service.href}
                          className="flex items-start space-x-3 p-4 rounded-xl hover:bg-blue-50 transition-colors duration-300 w-full"
                        >
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="h-5 w-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-gray-900">{service.name}</div>
                            <div className="text-sm text-gray-600">{service.description}</div>
                          </div>
                        </a>
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Call Button - Enhanced for mobile */}
          <div className="hidden md:block">
            <a href="tel:8322823128">
              <Button className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 hover:from-blue-700 hover:via-blue-800 hover:to-cyan-700 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-2xl luxury-shadow-xl hover:luxury-shadow-2xl transition-all duration-500 group font-semibold text-base lg:text-lg tracking-wide">
                <Sparkles className="h-4 w-4 lg:h-5 lg:w-5 mr-2 group-hover:rotate-12 transition-transform duration-500" />
                <Phone className="h-4 w-4 lg:h-5 lg:w-5 mr-2 group-hover:rotate-12 transition-transform duration-500" />
                <span className="hidden lg:inline">(832) 282-3128</span>
                <span className="lg:hidden">Call</span>
                <ArrowRight className="h-4 w-4 lg:h-5 lg:w-5 ml-2 group-hover:translate-x-1 transition-transform duration-500" />
              </Button>
            </a>
          </div>

          {/* Mobile menu button - Enhanced */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 p-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all duration-300 luxury-shadow"
            >
              {isOpen ? (
                <X className="h-6 w-6 transition-transform duration-300 rotate-90" />
              ) : (
                <Menu className="h-6 w-6 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Enhanced */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-4 pb-6 space-y-3 glass-effect border-t border-white/20 rounded-b-3xl luxury-shadow-2xl animate-fade-in">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 block px-6 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              {/* Mobile Services Section */}
              <div className="border-t border-gray-200 pt-4">
                <div className="px-6 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wide">Services</div>
                {serviceItems.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <a
                      key={service.name}
                      href={service.href}
                      className="flex items-center space-x-3 px-6 py-3 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 rounded-2xl transition-all duration-300 animate-slide-in-left"
                      style={{ animationDelay: `${(index + navItems.length) * 0.1}s` }}
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                        <Icon className="h-4 w-4 text-white" />
                      </div>
                      <span className="font-medium">{service.name}</span>
                    </a>
                  );
                })}
              </div>
              
              <div className="pt-4 animate-slide-in-left border-t border-gray-200" style={{ animationDelay: '0.6s' }}>
                <a href="tel:8322823128" className="block">
                  <Button className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 hover:from-blue-700 hover:via-blue-800 hover:to-cyan-700 text-white py-4 rounded-2xl luxury-shadow-xl font-semibold text-lg tracking-wide group">
                    <Sparkles className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform duration-500" />
                    <Phone className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform duration-500" />
                    (832) 282-3128
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
