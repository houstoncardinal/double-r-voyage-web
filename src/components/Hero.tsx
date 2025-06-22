import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Truck, Shield, Clock, Star, CheckCircle, Sparkles } from "lucide-react";
import { CarTransportAnimation } from "./CarTransportAnimation";

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 pt-32 sm:pt-40 lg:pt-48 pb-0 overflow-hidden min-h-screen flex flex-col">
      {/* Premium background decoration with enhanced effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-blue-200/60 to-cyan-200/60 rounded-full opacity-70 animate-float blur-3xl"></div>
        <div className="absolute bottom-20 left-10 sm:left-20 w-60 sm:w-80 h-60 sm:h-80 bg-gradient-to-br from-purple-200/50 to-blue-200/50 rounded-full opacity-60 animate-float blur-2xl" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[1000px] h-[600px] sm:h-[1000px] bg-gradient-to-br from-blue-100/30 to-cyan-100/30 rounded-full opacity-40 animate-float blur-3xl" style={{animationDelay: '1.5s'}}></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-32 left-1/4 w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-br from-gold-300/20 to-yellow-300/20 rounded-full animate-glow blur-xl"></div>
        <div className="absolute bottom-32 right-1/4 w-24 sm:w-40 h-24 sm:h-40 bg-gradient-to-br from-emerald-300/20 to-teal-300/20 rounded-full animate-glow blur-xl" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start w-full">
          {/* Left Content - Enhanced for mobile */}
          <div className="space-y-6 lg:space-y-8 animate-slide-in-left text-center lg:text-left">
            <div className="space-y-4 lg:space-y-6">
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-blue-50 via-white to-cyan-50 border border-blue-200/50 luxury-shadow backdrop-blur-sm animate-shimmer">
                <Sparkles className="h-4 w-4 text-blue-600 mr-2 animate-pulse" />
                <span className="text-blue-700 font-semibold text-sm tracking-wide">Excellence in Transportation</span>
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
                Elevating logistics through precision engineering and uncompromising service excellence. 
                Your premium partner for automotive transport, hazmat logistics, and specialized freight solutions 
                across America's highways.
              </p>
            </div>

            {/* Enhanced CTA Buttons - Mobile optimized */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 hover:from-blue-700 hover:via-blue-800 hover:to-cyan-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl luxury-shadow-xl hover:luxury-shadow-2xl transition-all duration-500 group luxury-card-hover font-semibold tracking-wide">
                <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-500" />
                <span className="hidden sm:inline">Get Premium Quote</span>
                <span className="sm:hidden">Get Quote</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-500" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-gray-300 hover:border-gray-400 text-gray-800 hover:bg-gray-50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl luxury-shadow hover:luxury-shadow-xl transition-all duration-500 group backdrop-blur-sm font-semibold tracking-wide">
                <Phone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-500" />
                <span className="hidden sm:inline">(832) 282-3128</span>
                <span className="sm:hidden">Call Us</span>
              </Button>
            </div>

            {/* Enhanced trust indicators - Mobile optimized */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-8 sm:pt-12">
              <div className="text-center group animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="bg-gradient-to-br from-blue-100 via-blue-50 to-blue-100 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 luxury-shadow-xl group-hover:luxury-shadow-2xl transition-all duration-500 group-hover:scale-110 luxury-card-hover">
                  <Truck className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                </div>
                <div className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">500+</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium tracking-wide">Premium Deliveries</div>
              </div>
              <div className="text-center group animate-fade-in" style={{animationDelay: '0.4s'}}>
                <div className="bg-gradient-to-br from-emerald-100 via-emerald-50 to-emerald-100 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 luxury-shadow-xl group-hover:luxury-shadow-2xl transition-all duration-500 group-hover:scale-110 luxury-card-hover">
                  <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-600" />
                </div>
                <div className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">100%</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium tracking-wide">Fully Insured</div>
              </div>
              <div className="text-center group animate-fade-in" style={{animationDelay: '0.6s'}}>
                <div className="bg-gradient-to-br from-orange-100 via-orange-50 to-orange-100 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 luxury-shadow-xl group-hover:luxury-shadow-2xl transition-all duration-500 group-hover:scale-110 luxury-card-hover">
                  <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600" />
                </div>
                <div className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">24/7</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium tracking-wide">Concierge Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced with truck animation */}
          <div className="space-y-4 sm:space-y-6 animate-slide-in-right mt-8 lg:mt-0">
            {/* Animated Car Transport Truck */}
            <div className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 luxury-shadow-2xl border border-white/30 luxury-card-hover">
              <div className="mb-4">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight mb-2 text-center">Premium Auto Transport</h3>
                <p className="text-blue-600 font-semibold text-sm sm:text-base tracking-wide text-center mb-4">Nationwide Coverage • Real-Time Tracking</p>
              </div>
              <CarTransportAnimation />
              <div className="flex items-center justify-center text-emerald-600 mt-4">
                <CheckCircle className="h-4 w-4 mr-2" />
                <span className="font-medium text-sm tracking-wide">Licensed & Insured Fleet</span>
              </div>
            </div>

            <div className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 luxury-shadow-2xl border border-white/30 luxury-card-hover">
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-4">
                <div className="bg-gradient-to-br from-blue-100 via-blue-50 to-blue-100 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center luxury-shadow">
                  <Truck className="h-6 w-6 sm:h-7 sm:w-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">Auto Transport</h3>
                  <p className="text-blue-600 font-semibold text-sm sm:text-base tracking-wide">Port to Dealer Excellence</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">Nationwide coverage with real-time GPS tracking and white-glove handling.</p>
              <div className="flex items-center text-emerald-600">
                <CheckCircle className="h-4 w-4 mr-2" />
                <span className="font-medium text-sm tracking-wide">GPS Tracked & Fully Insured</span>
              </div>
            </div>

            <div className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 luxury-shadow-2xl border border-white/30 luxury-card-hover">
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-4">
                <div className="bg-gradient-to-br from-red-100 via-red-50 to-red-100 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center luxury-shadow">
                  <Shield className="h-6 w-6 sm:h-7 sm:w-7 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">Hazmat Certified</h3>
                  <p className="text-red-600 font-semibold text-sm sm:text-base tracking-wide">DOT & EPA Compliance</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">Expert drivers with advanced certifications for hazardous materials transport.</p>
              <div className="flex items-center text-emerald-600">
                <CheckCircle className="h-4 w-4 mr-2" />
                <span className="font-medium text-sm tracking-wide">Certified & Compliant</span>
              </div>
            </div>

            {/* Ultra-Enhanced Premium CTA Box with Maximum Luxury */}
            <div className="relative group overflow-hidden rounded-[2rem] border-4 border-transparent bg-gradient-to-br from-violet-600 via-blue-600 to-cyan-600 p-1 shadow-[0_0_50px_rgba(59,130,246,0.5)] hover:shadow-[0_0_100px_rgba(59,130,246,0.8)] transition-all duration-700 animate-glow">
              {/* Ultra-Premium Animated Background Layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-700 to-cyan-700 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/40 via-violet-500/30 to-cyan-400/40 animate-float"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer opacity-60"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-blue-500/20 animate-pulse" style={{animationDelay: '1s'}}></div>
              
              {/* Multiple Floating Orbs for Maximum Effect */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-cyan-300/60 to-blue-300/60 rounded-full blur-2xl animate-float group-hover:scale-150 transition-transform duration-1000"></div>
              <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-gradient-to-br from-violet-300/60 to-purple-300/60 rounded-full blur-2xl animate-float group-hover:scale-150 transition-transform duration-1000" style={{animationDelay: '2s'}}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-white/20 to-cyan-200/20 rounded-full blur-xl animate-pulse"></div>
              
              {/* Multiple Border Effects */}
              <div className="absolute inset-0 rounded-[2rem] border-2 border-white/30 group-hover:border-white/50 transition-colors duration-500"></div>
              <div className="absolute inset-0 rounded-[2rem] border border-cyan-300/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              <div className="absolute inset-0 rounded-[2rem] shadow-[inset_0_0_50px_rgba(255,255,255,0.1)] group-hover:shadow-[inset_0_0_80px_rgba(255,255,255,0.2)] transition-shadow duration-700"></div>
              
              {/* Inner Content Container with Glass Effect */}
              <div className="relative z-10 bg-gradient-to-br from-slate-900/95 via-blue-900/95 to-slate-900/95 backdrop-blur-xl rounded-[1.7rem] p-8 border border-white/10">
                {/* Animated Header Section */}
                <div className="mb-8">
                  <div className="flex items-center mb-6 group-hover:scale-105 transition-transform duration-500">
                    <div className="bg-gradient-to-br from-white/30 to-cyan-200/30 backdrop-blur-sm rounded-full p-3 mr-4 animate-pulse shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                      <Sparkles className="h-8 w-8 text-white animate-spin" style={{animationDuration: '3s'}} />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
                      Ready to Optimize Your Logistics?
                    </h3>
                  </div>
                  <p className="text-blue-100/90 text-lg sm:text-xl leading-relaxed font-light tracking-wide group-hover:text-white transition-colors duration-500">
                    Partner with industry professionals who deliver consistent results through proven processes, 
                    advanced technology, and unwavering commitment to excellence.
                  </p>
                </div>
                
                {/* Floating Decorative Elements */}
                <div className="absolute top-6 right-6 flex space-x-3 opacity-60">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
                  <div className="w-3 h-3 bg-cyan-200 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]" style={{animationDelay: '0.5s'}}></div>
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.8)]" style={{animationDelay: '1s'}}></div>
                </div>
                
                {/* Ultra-Premium CTA Button */}
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-white via-cyan-50 to-white hover:from-cyan-50 hover:via-white hover:to-cyan-50 text-slate-900 hover:text-slate-800 rounded-2xl px-8 py-6 text-xl font-bold tracking-wide transition-all duration-700 group/btn shadow-[0_20px_50px_rgba(255,255,255,0.3)] hover:shadow-[0_30px_80px_rgba(255,255,255,0.5)] border-2 border-white/20 hover:border-white/40 hover:scale-105 transform"
                >
                  <div className="flex items-center justify-center relative z-10">
                    <Sparkles className="mr-4 h-6 w-6 group-hover/btn:rotate-180 group-hover/btn:scale-125 transition-all duration-700 text-blue-600 animate-pulse" />
                    <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 bg-clip-text text-transparent font-bold text-xl">
                      Get Premium Quote
                    </span>
                    <ArrowRight className="ml-4 h-6 w-6 group-hover/btn:translate-x-3 group-hover/btn:scale-125 transition-all duration-700 text-blue-600 animate-pulse" style={{animationDelay: '0.5s'}} />
                  </div>
                  {/* Button Background Animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-white/10 to-cyan-50/20 rounded-2xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-700 animate-shimmer"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-2xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                </Button>
                
                {/* Premium Decorative Bottom Border */}
                <div className="absolute bottom-4 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:via-white/50 transition-colors duration-500"></div>
                <div className="absolute bottom-3 left-12 right-12 h-px bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Luxury Scrolling Banner - Enhanced with more spacing and premium styling */}
      <div className="relative z-10 w-full mt-16 sm:mt-20 lg:mt-24">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-300/50 to-transparent"></div>
        
        <div className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-500/10 to-blue-600/20 animate-shimmer"></div>
          <div className="absolute inset-0">
            <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-blue-900/30 via-transparent to-blue-900/30"></div>
          </div>
          
          <div className="relative z-10 py-5 sm:py-6">
            <div className="animate-marquee whitespace-nowrap">
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
