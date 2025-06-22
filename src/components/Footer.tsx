
import { Truck, Phone, Mail, MapPin, Star, ArrowRight, Sparkles } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {/* Premium CTA Section */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 backdrop-blur-xl mb-8">
            <Sparkles className="h-5 w-5 text-blue-400 mr-3 animate-pulse" />
            <span className="text-blue-300 font-semibold text-lg tracking-wide">Ready to Experience Excellence?</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent tracking-tight">
            Start Your Premium Journey
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of satisfied clients who trust Double R Transportation for their most critical logistics needs
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-10 py-4 rounded-2xl shadow-luxury-shadow-xl hover:shadow-luxury-shadow-2xl transition-all duration-500 group font-semibold text-lg tracking-wide">
              <Phone className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-500" />
              Get Free Quote
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-500" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info - Enhanced */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-2xl shadow-luxury-shadow">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">Double R Transportation</h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg">
              Premium transportation solutions delivering precision and power 
              across the nation. Your trusted luxury logistics partner.
            </p>
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-400 font-medium">5.0 Excellence Rating</span>
            </div>
          </div>

          {/* Services - Enhanced */}
          <div className="space-y-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <h4 className="text-2xl font-semibold text-blue-400 tracking-tight">Premium Services</h4>
            <ul className="space-y-4 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors duration-300 text-lg flex items-center group">
                <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                Auto Transport
              </a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300 text-lg flex items-center group">
                <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                Hazmat Transportation
              </a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300 text-lg flex items-center group">
                <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                Flatbed Hauling
              </a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300 text-lg flex items-center group">
                <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                Dry Van Logistics
              </a></li>
            </ul>
          </div>

          {/* Quick Links - Enhanced */}
          <div className="space-y-6 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <h4 className="text-2xl font-semibold text-blue-400 tracking-tight">Quick Access</h4>
            <ul className="space-y-4 text-gray-300">
              <li><a href="#about" className="hover:text-white transition-colors duration-300 text-lg flex items-center group">
                <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                About Excellence
              </a></li>
              <li><a href="#services" className="hover:text-white transition-colors duration-300 text-lg flex items-center group">
                <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                Our Services
              </a></li>
              <li><a href="#contact" className="hover:text-white transition-colors duration-300 text-lg flex items-center group">
                <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                Get Premium Quote
              </a></li>
              <li><a href="#contact" className="hover:text-white transition-colors duration-300 text-lg flex items-center group">
                <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                Contact Us
              </a></li>
            </ul>
          </div>

          {/* Contact Info - Enhanced */}
          <div className="space-y-6 animate-slide-in-right">
            <h4 className="text-2xl font-semibold text-blue-400 tracking-tight">Connect With Us</h4>
            <div className="space-y-5 text-gray-300">
              <div className="flex items-center space-x-4 group">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-xl shadow-luxury-shadow group-hover:shadow-luxury-shadow-xl transition-all duration-300">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <a href="tel:8322823128" className="hover:text-white transition-colors duration-300 text-lg font-medium">
                  (832) 282-3128
                </a>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-500 p-3 rounded-xl shadow-luxury-shadow group-hover:shadow-luxury-shadow-xl transition-all duration-300">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg">info@doublerransport.com</span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-xl shadow-luxury-shadow group-hover:shadow-luxury-shadow-xl transition-all duration-300">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg">Nationwide Premium Service</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="mt-20 pt-10 border-t border-slate-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <p className="text-gray-400 text-lg">
              © 2024 Double R Transportation. All rights reserved. Delivering Excellence Since Day One.
            </p>
            <div className="flex space-x-8 text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-300 text-lg">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-300 text-lg">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors duration-300 text-lg">DOT Compliance</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
