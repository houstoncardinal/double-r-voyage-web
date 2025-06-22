
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-slate-950/95 via-slate-900/95 to-slate-950/95 backdrop-blur-lg border-b border-slate-800/50 z-50 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Premium Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-black text-white tracking-tight">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Double R</span>
              <span className="text-blue-400 ml-2 font-light">Transportation</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-12">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white px-4 py-3 text-base font-semibold transition-all duration-300 hover:bg-slate-800/50 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 tracking-wide"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Premium Call Button */}
          <div className="hidden md:block">
            <Button 
              size="sm"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold shadow-xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 px-6 py-3 rounded-xl border border-blue-500/30"
            >
              <Phone className="h-5 w-5 mr-2" />
              <span className="font-mono">(832) 282-3128</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-3 rounded-xl hover:bg-slate-800/50 transition-all duration-300"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-6 space-y-2 sm:px-3 border-t border-slate-800/50 bg-gradient-to-b from-slate-900/50 to-slate-950/50 backdrop-blur-lg rounded-b-2xl">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white block px-4 py-3 text-lg font-semibold transition-all duration-300 hover:bg-slate-800/50 rounded-xl"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-6">
                <Button 
                  size="sm"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 rounded-xl"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  <span className="font-mono">(832) 282-3128</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
