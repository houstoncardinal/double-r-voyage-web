
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Truck, Shield, Clock } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-16 pb-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-100 rounded-full opacity-30 animate-float"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-100 rounded-full opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Providing Consistently
                <span className="block text-blue-600">Excellent Freight</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Premium transportation solutions from major ports to nationwide destinations. 
                Specialized in auto transport, hazmat, flatbed, and dry van logistics with Fortune 500 reliability.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                Get Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg">
                <Phone className="mr-2 h-5 w-5" />
                (832) 282-3128
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Truck className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Deliveries</div>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Insured</div>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="space-y-6 animate-slide-up">
            <div className="bg-white rounded-2xl p-6 shadow-lg card-hover">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
                  <Truck className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Auto Transport</h3>
                  <p className="text-gray-600">Port to dealer service</p>
                </div>
              </div>
              <p className="text-gray-600">Nationwide coverage with real-time GPS tracking and dedicated account management.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg card-hover">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Hazmat Certified</h3>
                  <p className="text-gray-600">DOT & EPA compliant</p>
                </div>
              </div>
              <p className="text-gray-600">Specialized drivers with advanced certifications and state-of-the-art vehicles.</p>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-6 text-white card-hover">
              <h3 className="text-xl font-semibold mb-2">Ready to Ship?</h3>
              <p className="mb-4 opacity-90">Get your freight moving with our expert logistics team.</p>
              <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
