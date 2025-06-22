
import { Truck, Phone, Mail, MapPin, Star, ArrowRight, Sparkles, Shield, Clock, Award } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Sophisticated background patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_70%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium Header Section */}
        <div className="text-center py-20 border-b border-slate-700/30">
          <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-400/20 backdrop-blur-xl mb-8">
            <Sparkles className="h-5 w-5 text-blue-400 mr-3 animate-pulse" />
            <span className="text-blue-300 font-semibold text-lg tracking-wide">Ready to Experience Excellence?</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent tracking-tight leading-tight">
            Start Your Premium Journey
          </h2>
          
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of satisfied clients who trust Double R Transportation for their most important logistics needs
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-10 py-4 rounded-2xl luxury-shadow-xl hover:luxury-shadow-2xl transition-all duration-500 group font-semibold text-lg tracking-wide">
              <Phone className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-500" />
              Get Free Quote
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-500" />
            </button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
            {/* Company Brand Section */}
            <div className="lg:col-span-4 space-y-8">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-4 rounded-3xl luxury-shadow-xl">
                  <Truck className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight">Double R</h3>
                  <h3 className="text-2xl font-bold text-blue-400">Transportation</h3>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed text-lg">
                Delivering precision and excellence across America's highways. Your trusted partner for premium logistics solutions with uncompromising quality and service.
              </p>
              
              <div className="flex items-center space-x-3">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-gray-400 font-medium">5.0 Excellence Rating</span>
              </div>
              
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600/30">
                  <div className="text-2xl font-bold text-blue-400">500+</div>
                  <div className="text-sm text-gray-400">Deliveries</div>
                </div>
                <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600/30">
                  <div className="text-2xl font-bold text-emerald-400">100%</div>
                  <div className="text-sm text-gray-400">Insured</div>
                </div>
                <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600/30">
                  <div className="text-2xl font-bold text-orange-400">24/7</div>
                  <div className="text-sm text-gray-400">Support</div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="lg:col-span-3 space-y-6">
              <h4 className="text-2xl font-semibold text-blue-400 tracking-tight">Premium Services</h4>
              <ul className="space-y-4 text-gray-300">
                {[
                  { name: "Auto Transport", icon: Truck },
                  { name: "Hazmat Transportation", icon: Shield },
                  { name: "Flatbed Hauling", icon: Award },
                  { name: "Dry Van Logistics", icon: Clock }
                ].map((service, index) => (
                  <li key={service.name}>
                    <a href="#" className="flex items-center group hover:text-white transition-all duration-300">
                      <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-2 rounded-xl mr-4 group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                        <service.icon className="h-4 w-4 text-blue-400" />
                      </div>
                      <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">{service.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2 space-y-6">
              <h4 className="text-2xl font-semibold text-blue-400 tracking-tight">Quick Access</h4>
              <ul className="space-y-4 text-gray-300">
                {[
                  { name: "About Excellence", href: "#about" },
                  { name: "Our Services", href: "#services" },
                  { name: "Get Quote", href: "#contact" },
                  { name: "Contact Us", href: "#contact" }
                ].map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-lg hover:text-white transition-colors duration-300 flex items-center group">
                      <ArrowRight className="h-4 w-4 mr-3 group-hover:translate-x-1 transition-transform duration-300" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-3 space-y-6">
              <h4 className="text-2xl font-semibold text-blue-400 tracking-tight">Connect With Us</h4>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-2xl luxury-shadow group-hover:luxury-shadow-xl transition-all duration-300">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Call Us Now</div>
                    <a href="tel:8322823128" className="text-xl font-semibold hover:text-blue-400 transition-colors duration-300">
                      (832) 282-3128
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group">
                  <div className="bg-gradient-to-br from-emerald-500 to-teal-500 p-3 rounded-2xl luxury-shadow group-hover:luxury-shadow-xl transition-all duration-300">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Email Us</div>
                    <span className="text-lg text-gray-300">info@doublerransport.com</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-2xl luxury-shadow group-hover:luxury-shadow-xl transition-all duration-300">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Service Area</div>
                    <span className="text-lg text-gray-300">Nationwide Coverage</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/30 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <p className="text-gray-400 text-lg">
              © 2024 Double R Transportation. All rights reserved. Excellence Since Day One.
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
