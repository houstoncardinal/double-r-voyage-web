
import { Button } from "@/components/ui/button";
import { Boxes } from "@/components/ui/background-boxes";
import { ArrowRight, Phone, Truck, Shield, Clock, Star, CheckCircle, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative bg-slate-50 pt-32 sm:pt-40 lg:pt-48 pb-16 overflow-hidden min-h-screen flex flex-col">
      {/* Animated Background Boxes */}
      <div className="absolute inset-0 w-full h-full bg-slate-50 z-0">
        <div className="absolute inset-0 w-full h-full bg-slate-50 z-20 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)] pointer-events-none" />
        <Boxes />
      </div>
      
      {/* Enhanced background decoration with sophisticated effects */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 right-10 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/10 rounded-full opacity-60 animate-float blur-3xl"></div>
        <div className="absolute bottom-20 left-10 sm:left-20 w-60 sm:w-80 h-60 sm:h-80 bg-gradient-to-br from-purple-400/10 to-blue-400/5 rounded-full opacity-40 animate-float blur-2xl" style={{animationDelay: '3s'}}></div>
        
        {/* Refined gradient orbs */}
        <div className="absolute top-32 left-1/4 w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-br from-blue-300/10 to-cyan-300/5 rounded-full animate-glow blur-xl"></div>
        <div className="absolute bottom-32 right-1/4 w-24 sm:w-40 h-24 sm:h-40 bg-gradient-to-br from-emerald-300/10 to-teal-300/5 rounded-full animate-glow blur-xl" style={{animationDelay: '2s'}}></div>
        
        {/* Professional grid pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.15)_1px,transparent_0)] bg-[length:24px_24px] opacity-20"></div>
      </div>
      
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start w-full">
          {/* Left Content - Enhanced for mobile */}
          <div className="space-y-6 lg:space-y-8 animate-slide-in-left text-center lg:text-left">
            <div className="space-y-4 lg:space-y-6">
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/80 backdrop-blur-sm border border-blue-200/50 shadow-lg animate-shimmer">
                <Sparkles className="h-4 w-4 text-blue-600 mr-2 animate-pulse" />
                <span className="text-blue-700 font-semibold text-sm tracking-wide">Premium Transportation Excellence</span>
                <div className="ml-2 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              </div>
              
              <h1 className="relative z-50 text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.8] tracking-tight">
                <span className="block bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent text-shadow-lg">
                  Delivering
                </span>
                <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent mt-1 animate-shimmer">
                  Excellence
                </span>
                <span className="block bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent mt-1">
                  Nationwide
                </span>
              </h1>
              
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light tracking-wide">
                Double R Transportation delivers reliable auto transport, hazmat shipping, and freight logistics 
                throughout Houston and nationwide. Your trusted partner for safe, on-time delivery with 
                full insurance and real-time tracking.
              </p>
            </div>

            {/* Enhanced CTA Buttons - Mobile optimized */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center">
              <a href="/get-a-quote" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 hover:from-blue-700 hover:via-blue-800 hover:to-cyan-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl luxury-shadow-xl hover:luxury-shadow-2xl transition-all duration-500 group luxury-card-hover font-semibold tracking-wide">
                  <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-500" />
                  Get A Quote
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-500" />
                </Button>
              </a>
              <a href="tel:8322823128" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-gray-300 hover:border-gray-400 text-gray-800 hover:bg-gray-50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl luxury-shadow hover:luxury-shadow-xl transition-all duration-500 group backdrop-blur-sm font-semibold tracking-wide">
                  <Phone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-500" />
                  <span className="hidden sm:inline">(832) 282-3128</span>
                  <span className="sm:hidden">Call Us</span>
                </Button>
              </a>
            </div>

          </div>

          {/* Enhanced services preview cards */}
          <div className="space-y-4 sm:space-y-6 animate-slide-in-right mt-8 lg:mt-0">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-4">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg">
                  <Truck className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 tracking-tight">Premier Auto Transport</h3>
                  <p className="text-blue-600 font-semibold text-base tracking-wide">Port to Dealer Excellence</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4 text-base">Nationwide coverage with real-time GPS tracking and white-glove handling for premium vehicle transportation.</p>
              <div className="flex items-center text-emerald-600">
                <CheckCircle className="h-4 w-4 mr-2" />
                <span className="font-medium text-sm tracking-wide">GPS Tracked & Fully Insured</span>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-red-200/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-4">
                <div className="bg-gradient-to-br from-red-600 to-red-700 w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg">
                  <Shield className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 tracking-tight">Hazmat Certified</h3>
                  <p className="text-red-600 font-semibold text-base tracking-wide">DOT & EPA Compliance</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4 text-base">Expert drivers with advanced certifications for secure hazardous materials transport nationwide.</p>
              <div className="flex items-center text-emerald-600">
                <CheckCircle className="h-4 w-4 mr-2" />
                <span className="font-medium text-sm tracking-wide">Certified & Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scrolling Banner with faster animation */}
      <div className="relative z-30 w-full mt-12 sm:mt-16 lg:mt-20">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-300/50 to-transparent"></div>
        
        <div className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-cyan-500/20 to-blue-600/30 animate-shimmer"></div>
          <div className="absolute inset-0">
            <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-blue-900/40 via-transparent to-blue-900/40"></div>
          </div>
          
          <div className="relative z-10 py-4 sm:py-5">
            <div className="animate-marquee-fast whitespace-nowrap">
              <span className="text-white font-bold text-lg sm:text-xl tracking-wide mx-12 inline-flex items-center">
                <span className="text-2xl mr-3">🏙️</span>
                HOUSTON ↔ NATIONWIDE TRANSPORT
              </span>
              <span className="text-blue-100 font-semibold text-lg sm:text-xl tracking-wide mx-12 inline-flex items-center">
                <span className="text-2xl mr-3">🚛</span>
                Premium Auto Transport Services
              </span>
              <span className="text-white font-bold text-lg sm:text-xl tracking-wide mx-12 inline-flex items-center">
                <span className="text-2xl mr-3">🇺🇸</span>
                FROM ANY CITY TO HOUSTON
              </span>
              <span className="text-blue-100 font-semibold text-lg sm:text-xl tracking-wide mx-12 inline-flex items-center">
                <span className="text-2xl mr-3">🛡️</span>
                Fully Licensed & Insured
              </span>
              <span className="text-white font-bold text-lg sm:text-xl tracking-wide mx-12 inline-flex items-center">
                <span className="text-2xl mr-3">🌟</span>
                HOUSTON TO ANY CITY IN AMERICA
              </span>
              <span className="text-blue-100 font-semibold text-lg sm:text-xl tracking-wide mx-12 inline-flex items-center">
                <span className="text-2xl mr-3">📞</span>
                24/7 Concierge Support
              </span>
              <span className="text-white font-bold text-lg sm:text-xl tracking-wide mx-12 inline-flex items-center">
                <span className="text-2xl mr-3">🏙️</span>
                HOUSTON ↔ NATIONWIDE TRANSPORT
              </span>
              <span className="text-blue-100 font-semibold text-lg sm:text-xl tracking-wide mx-12 inline-flex items-center">
                <span className="text-2xl mr-3">🚛</span>
                Premium Auto Transport Services
              </span>
            </div>
          </div>
        </div>
        
        <div className="h-px bg-gradient-to-r from-transparent via-blue-300/50 to-transparent"></div>
      </div>
    </section>
  );
};
