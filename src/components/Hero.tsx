
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Truck, Shield, Clock, Star, CheckCircle } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 pt-32 pb-24 overflow-hidden">
      {/* Premium background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-cyan-100/40 rounded-full opacity-60 animate-float blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-purple-100/30 to-blue-100/30 rounded-full opacity-50 animate-float blur-2xl" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-50/20 to-cyan-50/20 rounded-full opacity-30 animate-float blur-3xl" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[85vh]">
          {/* Left Content */}
          <div className="space-y-10 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100/50 shadow-sm">
                <Star className="h-4 w-4 text-blue-600 mr-2" />
                <span className="text-blue-700 font-semibold text-sm">Premium Freight Solutions</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                  Delivering
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">
                  Excellence
                </span>
                <br />
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                  Nationwide
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl font-light">
                Premium transportation solutions connecting major ports to nationwide destinations. 
                Specializing in automotive transport, hazmat logistics, flatbed hauling, and dry van services 
                with Fortune 500 reliability and white-glove service.
              </p>
            </div>

            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-10 py-4 text-lg rounded-xl shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 group">
                Get Premium Quote
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-gray-200 hover:border-gray-300 text-gray-700 hover:bg-gray-50 px-10 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group backdrop-blur-sm">
                <Phone className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                (832) 282-3128
              </Button>
            </div>

            {/* Premium trust indicators */}
            <div className="grid grid-cols-3 gap-8 pt-12">
              <div className="text-center group">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <Truck className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">500+</div>
                <div className="text-sm text-gray-600 font-medium">Premium Deliveries</div>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <Shield className="h-8 w-8 text-emerald-600" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">100%</div>
                <div className="text-sm text-gray-600 font-medium">Fully Insured</div>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <Clock className="h-8 w-8 text-orange-600" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">24/7</div>
                <div className="text-sm text-gray-600 font-medium">Concierge Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Premium Feature Cards */}
          <div className="space-y-6 animate-slide-up">
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-2xl shadow-black/5 border border-white/20 card-hover">
              <div className="flex items-center space-x-6 mb-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg">
                  <Truck className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Auto Transport</h3>
                  <p className="text-blue-600 font-semibold">Port to Dealer Excellence</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">Nationwide coverage with real-time GPS tracking, dedicated account management, and white-glove handling for every vehicle.</p>
              <div className="flex items-center text-emerald-600">
                <CheckCircle className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">GPS Tracked & Insured</span>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-2xl shadow-black/5 border border-white/20 card-hover">
              <div className="flex items-center space-x-6 mb-6">
                <div className="bg-gradient-to-br from-red-50 to-red-100 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg">
                  <Shield className="h-8 w-8 text-red-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Hazmat Certified</h3>
                  <p className="text-red-600 font-semibold">DOT & EPA Compliance</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">Expert drivers with advanced certifications and state-of-the-art specialized vehicles for hazardous materials transport.</p>
              <div className="flex items-center text-emerald-600">
                <CheckCircle className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Certified & Compliant</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-700 rounded-3xl p-8 text-white shadow-2xl shadow-blue-500/25 card-hover">
              <h3 className="text-2xl font-bold mb-3">Ready for Premium Service?</h3>
              <p className="mb-6 opacity-90 text-blue-50">Experience the Double R Transportation difference with our concierge logistics team.</p>
              <Button variant="secondary" className="bg-white/90 hover:bg-white text-blue-600 hover:text-blue-700 rounded-xl px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 group backdrop-blur-sm">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
