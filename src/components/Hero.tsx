
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent animate-pulse"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-bounce [animation-duration:8s]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-600/10 rounded-full blur-3xl animate-bounce [animation-duration:12s] [animation-delay:2s]"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-12 animate-fade-in">
          {/* Premium heading with enhanced typography */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tight">
              <span className="block mb-4 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                Driven by
              </span>
              <span className="block bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 bg-clip-text text-transparent drop-shadow-2xl">
                PRECISION
              </span>
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-300 tracking-wide">
              Delivered with <span className="text-blue-400 font-black">POWER</span>
            </h2>
          </div>

          {/* Enhanced subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light tracking-wide">
            <span className="text-blue-400 font-semibold">Fortune 500 trusted</span> premium transportation solutions from major ports to nationwide destinations.<br />
            <span className="text-gray-400">Specialized in auto transport, hazmat, flatbed, and dry van logistics.</span>
          </p>

          {/* Premium call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-12">
            <Button 
              size="lg" 
              className="relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-12 py-6 text-xl font-bold shadow-2xl hover:shadow-blue-500/50 transform hover:scale-110 transition-all duration-500 border-2 border-blue-500/30 hover:border-blue-400/60 rounded-xl"
            >
              <span className="relative z-10">Get Premium Quote</span>
              <ArrowRight className="ml-3 h-6 w-6 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-xl blur-xl"></div>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="relative border-2 border-gray-300 text-white hover:bg-white hover:text-slate-900 px-12 py-6 text-xl font-bold shadow-2xl hover:shadow-white/25 transform hover:scale-110 transition-all duration-500 rounded-xl backdrop-blur-sm bg-white/5"
            >
              <Phone className="mr-3 h-6 w-6" />
              <span className="font-mono tracking-wider">(832) 282-3128</span>
            </Button>
          </div>

          {/* Premium trust indicators */}
          <div className="pt-20 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { title: "DOT", subtitle: "Certified", icon: "🏆" },
              { title: "24/7", subtitle: "GPS Tracking", icon: "📍" },
              { title: "Full", subtitle: "Insurance", icon: "🛡️" },
              { title: "Expert", subtitle: "Drivers", icon: "👨‍💼" }
            ].map((item, index) => (
              <div key={item.title} className="group transform hover:scale-110 transition-all duration-300">
                <div className="relative p-8 rounded-2xl bg-gradient-to-b from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <div className="text-4xl font-black text-blue-400 mb-2 tracking-wider">{item.title}</div>
                  <div className="text-gray-300 font-medium tracking-wide">{item.subtitle}</div>
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
    </section>
  );
};
