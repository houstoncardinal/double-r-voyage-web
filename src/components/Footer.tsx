
import { Truck, Phone, Mail, MapPin, Star, ArrowRight } from "lucide-react";

export const Footer = () => {
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
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
            {/* Company Brand Section */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-2xl luxury-shadow-xl">
                  <Truck className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight">Double R</h3>
                  <h3 className="text-xl font-bold text-blue-400">Transportation</h3>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
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
            </div>

            {/* Services */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-lg font-semibold text-blue-400 tracking-tight">Services</h4>
              <ul className="space-y-2 text-gray-300">
                {[
                  "Auto Transport",
                  "Hazmat Transportation", 
                  "Flatbed Hauling",
                  "Dry Van Logistics"
                ].map((service) => (
                  <li key={service}>
                    <a href="#" className="hover:text-white transition-colors duration-300 flex items-center group">
                      <ArrowRight className="h-3 w-3 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-lg font-semibold text-blue-400 tracking-tight">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                {[
                  { name: "About", href: "#about" },
                  { name: "Services", href: "#services" },
                  { name: "Contact", href: "#contact" },
                  { name: "Get Quote", href: "#contact" }
                ].map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="hover:text-white transition-colors duration-300 flex items-center group">
                      <ArrowRight className="h-3 w-3 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-lg font-semibold text-blue-400 tracking-tight">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 group">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-2 rounded-xl luxury-shadow group-hover:luxury-shadow-xl transition-all duration-300">
                    <Phone className="h-4 w-4 text-white" />
                  </div>
                  <a href="tel:8322823128" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                    (832) 282-3128
                  </a>
                </div>
                
                <div className="flex items-center space-x-3 group">
                  <div className="bg-gradient-to-br from-emerald-500 to-teal-500 p-2 rounded-xl luxury-shadow group-hover:luxury-shadow-xl transition-all duration-300">
                    <Mail className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-300">info@doublerransport.com</span>
                </div>
                
                <div className="flex items-center space-x-3 group">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-xl luxury-shadow group-hover:luxury-shadow-xl transition-all duration-300">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-300">Nationwide Coverage</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/30 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-3 lg:space-y-0">
            <p className="text-gray-400">
              © 2024 Double R Transportation. All rights reserved.
            </p>
            <div className="flex space-x-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors duration-300">DOT Compliance</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
