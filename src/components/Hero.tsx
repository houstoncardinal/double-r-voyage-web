
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="30"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            <span className="block">Driven by</span>
            <span className="block bg-gradient-to-r from-blue-400 to-silver-300 bg-clip-text text-transparent">
              Precision
            </span>
            <span className="block text-4xl md:text-5xl mt-4">
              Delivered with <strong className="text-blue-400">Power</strong>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Premium transportation solutions from major ports to nationwide destinations. 
            Specialized in auto transport, hazmat, flatbed, and dry van logistics.
          </p>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 glow-blue"
            >
              Get a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Phone className="mr-2 h-5 w-5" />
              (832) 282-3128
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-400">DOT</div>
              <div className="text-gray-300">Certified</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-400">24/7</div>
              <div className="text-gray-300">GPS Tracking</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-400">Full</div>
              <div className="text-gray-300">Insurance</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-400">Expert</div>
              <div className="text-gray-300">Drivers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </section>
  );
};
