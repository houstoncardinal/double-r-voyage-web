
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Truck, Phone, Mail, MapPin, Star, ArrowRight, Sparkles } from "lucide-react";

export const Footer = React.memo(() => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Sophisticated background patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_70%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0 lg:space-x-8">
            {/* Company Brand Section */}
            <div className="flex flex-col items-start space-y-4 text-left w-full lg:w-auto">
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent tracking-tight">
                  Double R{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Transportation
                  </span>
                </h3>
              </div>
              
              <p className="text-gray-300 leading-relaxed text-left max-w-md">
                Delivering precision and excellence across America's highways. Your trusted partner for premium logistics solutions.
              </p>
              
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-gray-400 text-sm font-medium">5.0 Excellence Rating</span>
              </div>

              {/* Get Quote Button for Mobile */}
              <div className="block lg:hidden pt-4">
                <Link to="/get-a-quote">
                  <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 group">
                    <Sparkles className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                    Get A Quote
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col items-start lg:items-end space-y-3 w-full lg:w-auto">
              <div className="flex items-center space-x-3 group">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-2 rounded-xl luxury-shadow group-hover:luxury-shadow-xl transition-all duration-300">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <a href="tel:8322823128" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-lg font-medium">
                  (832) 282-3128
                </a>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-500 p-2 rounded-xl luxury-shadow group-hover:luxury-shadow-xl transition-all duration-300">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-300">info@doublertransportationllc.com</span>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-xl luxury-shadow group-hover:luxury-shadow-xl transition-all duration-300">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-300">Nationwide Coverage</span>
              </div>

              {/* Get Quote Button for Desktop */}
              <div className="hidden lg:block pt-4">
                <Link to="/get-a-quote">
                  <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 group">
                    <Sparkles className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                    Get A Quote
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/30 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-3 lg:space-y-0">
            <p className="text-gray-400">
              © 2025 Double R Transportation LLC. All rights reserved.
            </p>
            <div className="flex space-x-6 text-gray-400 text-sm">
              <Link to="/privacy-policy" className="hover:text-white transition-colors duration-300">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-white transition-colors duration-300">Terms of Service</Link>
              <Link to="/dot-compliance" className="hover:text-white transition-colors duration-300">DOT Compliance</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});
