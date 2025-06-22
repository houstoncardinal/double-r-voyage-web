
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Truck, Shield, Clock, Star, CheckCircle, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 pt-40 pb-32 overflow-hidden min-h-screen flex items-center">
      {/* Premium background decoration with enhanced effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-200/60 to-cyan-200/60 rounded-full opacity-70 animate-float blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-purple-200/50 to-blue-200/50 rounded-full opacity-60 animate-float blur-2xl" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-blue-100/30 to-cyan-100/30 rounded-full opacity-40 animate-float blur-3xl" style={{animationDelay: '1.5s'}}></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-32 left-1/4 w-32 h-32 bg-gradient-to-br from-gold-300/20 to-yellow-300/20 rounded-full animate-glow blur-xl"></div>
        <div className="absolute bottom-32 right-1/4 w-40 h-40 bg-gradient-to-br from-emerald-300/20 to-teal-300/20 rounded-full animate-glow blur-xl" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Content - Enhanced */}
          <div className="space-y-12 animate-slide-in-left">
            <div className="space-y-8">
              <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-50 via-white to-cyan-50 border border-blue-200/50 shadow-luxury-shadow backdrop-blur-sm animate-shimmer">
                <Sparkles className="h-5 w-5 text-blue-600 mr-3 animate-pulse" />
                <span className="text-blue-700 font-semibold text-base tracking-wide">Excellence in Transportation</span>
                <div className="ml-3 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              </div>
              
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight">
                <span className="block bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent text-shadow-lg">
                  Delivering
                </span>
                <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent mt-2 animate-shimmer">
                  Excellence
                </span>
                <span className="block bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent mt-2">
                  Nationwide
                </span>
              </h1>
              
              <p className="text-2xl text-gray-700 leading-relaxed max-w-2xl font-light tracking-wide">
                Elevating logistics through precision engineering and uncompromising service excellence. 
                Your premium partner for automotive transport, hazmat logistics, and specialized freight solutions 
                across America's highways.
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 hover:from-blue-700 hover:via-blue-800 hover:to-cyan-700 text-white px-12 py-5 text-xl rounded-2xl shadow-luxury-shadow-xl hover:shadow-luxury-shadow-2xl transition-all duration-500 group luxury-card-hover font-semibold tracking-wide">
                <Sparkles className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-500" />
                Get Premium Quote
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-500" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-gray-300 hover:border-gray-400 text-gray-800 hover:bg-gray-50 px-12 py-5 text-xl rounded-2xl shadow-luxury-shadow hover:shadow-luxury-shadow-xl transition-all duration-500 group backdrop-blur-sm font-semibold tracking-wide">
                <Phone className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-500" />
                (832) 282-3128
              </Button>
            </div>

            {/* Enhanced trust indicators */}
            <div className="grid grid-cols-3 gap-10 pt-16">
              <div className="text-center group animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="bg-gradient-to-br from-blue-100 via-blue-50 to-blue-100 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-luxury-shadow-xl group-hover:shadow-luxury-shadow-2xl transition-all duration-500 group-hover:scale-110 luxury-card-hover">
                  <Truck className="h-10 w-10 text-blue-600" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">500+</div>
                <div className="text-base text-gray-600 font-medium tracking-wide">Premium Deliveries</div>
              </div>
              <div className="text-center group animate-fade-in" style={{animationDelay: '0.4s'}}>
                <div className="bg-gradient-to-br from-emerald-100 via-emerald-50 to-emerald-100 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-luxury-shadow-xl group-hover:shadow-luxury-shadow-2xl transition-all duration-500 group-hover:scale-110 luxury-card-hover">
                  <Shield className="h-10 w-10 text-emerald-600" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">100%</div>
                <div className="text-base text-gray-600 font-medium tracking-wide">Fully Insured</div>
              </div>
              <div className="text-center group animate-fade-in" style={{animationDelay: '0.6s'}}>
                <div className="bg-gradient-to-br from-orange-100 via-orange-50 to-orange-100 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-luxury-shadow-xl group-hover:shadow-luxury-shadow-2xl transition-all duration-500 group-hover:scale-110 luxury-card-hover">
                  <Clock className="h-10 w-10 text-orange-600" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">24/7</div>
                <div className="text-base text-gray-600 font-medium tracking-wide">Concierge Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Premium Feature Cards */}
          <div className="space-y-8 animate-slide-in-right">
            <div className="glass-effect rounded-3xl p-10 shadow-luxury-shadow-2xl border border-white/30 luxury-card-hover">
              <div className="flex items-center space-x-8 mb-8">
                <div className="bg-gradient-to-br from-blue-100 via-blue-50 to-blue-100 w-20 h-20 rounded-3xl flex items-center justify-center shadow-luxury-shadow">
                  <Truck className="h-10 w-10 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 tracking-tight">Auto Transport</h3>
                  <p className="text-blue-600 font-semibold text-lg tracking-wide">Port to Dealer Excellence</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">Nationwide coverage with real-time GPS tracking, dedicated account management, and white-glove handling for every vehicle.</p>
              <div className="flex items-center text-emerald-600">
                <CheckCircle className="h-5 w-5 mr-3" />
                <span className="font-medium text-base tracking-wide">GPS Tracked & Fully Insured</span>
              </div>
            </div>

            <div className="glass-effect rounded-3xl p-10 shadow-luxury-shadow-2xl border border-white/30 luxury-card-hover">
              <div className="flex items-center space-x-8 mb-8">
                <div className="bg-gradient-to-br from-red-100 via-red-50 to-red-100 w-20 h-20 rounded-3xl flex items-center justify-center shadow-luxury-shadow">
                  <Shield className="h-10 w-10 text-red-600" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 tracking-tight">Hazmat Certified</h3>
                  <p className="text-red-600 font-semibold text-lg tracking-wide">DOT & EPA Compliance</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">Expert drivers with advanced certifications and state-of-the-art specialized vehicles for hazardous materials transport.</p>
              <div className="flex items-center text-emerald-600">
                <CheckCircle className="h-5 w-5 mr-3" />
                <span className="font-medium text-base tracking-wide">Certified & Compliant</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-700 rounded-3xl p-10 text-white shadow-luxury-shadow-2xl luxury-card-hover relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-3xl animate-pulse"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4 tracking-tight">Ready for Premium Service?</h3>
                <p className="mb-8 opacity-90 text-blue-50 text-lg leading-relaxed">Experience the Double R Transportation difference with our concierge logistics team.</p>
                <Button variant="secondary" className="bg-white/95 hover:bg-white text-blue-600 hover:text-blue-700 rounded-2xl px-8 py-4 shadow-luxury-shadow hover:shadow-luxury-shadow-xl transition-all duration-500 group backdrop-blur-sm font-semibold text-lg tracking-wide">
                  <Sparkles className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-500" />
                  Get Started Today
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-500" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
