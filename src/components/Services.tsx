
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Shield, Package, Zap, ArrowRight, CheckCircle2, MapPin, Phone, Clock, Award, Star, Sparkles } from "lucide-react";

const services = [
  {
    title: "Auto Transport",
    description: "Professional port-to-dealer vehicle transportation with comprehensive tracking and insurance coverage.",
    icon: Truck,
    features: ["Port pickup service", "Real-time GPS tracking", "Nationwide dealer networks", "Full insurance coverage"],
    color: "blue",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Hazmat Transportation",
    description: "Certified hazmat handling with DOT and EPA compliance, operated by specially trained drivers.",
    icon: Shield,
    features: ["DOT certified operations", "EPA compliant handling", "Specialized equipment", "Expert certified drivers"],
    color: "red",
    gradient: "from-red-500 to-orange-500"
  },
  {
    title: "Flatbed Hauling",
    description: "Heavy-duty transportation for oversized loads, construction equipment, and industrial machinery.",
    icon: Package,
    features: ["Heavy equipment transport", "Steel and materials", "Professional load securement", "Route optimization"],
    color: "green",
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    title: "Dry Van Logistics",
    description: "General freight transportation with climate-controlled options for cross-country deliveries.",
    icon: Zap,
    features: ["Climate controlled options", "Cross-country coverage", "Last-mile delivery", "Secure transportation"],
    color: "purple",
    gradient: "from-purple-500 to-violet-500"
  }
];

const stats = [
  { 
    number: "500+", 
    label: "Successful Deliveries", 
    icon: Truck,
    description: "Premium shipments completed",
    gradient: "from-blue-500 via-blue-600 to-cyan-500",
    bgGradient: "from-blue-50 via-blue-100 to-cyan-50"
  },
  { 
    number: "24/7", 
    label: "Customer Support", 
    icon: Clock,
    description: "Always available assistance",
    gradient: "from-emerald-500 via-emerald-600 to-teal-500",
    bgGradient: "from-emerald-50 via-emerald-100 to-teal-50"
  },
  { 
    number: "100%", 
    label: "Fully Insured", 
    icon: Shield,
    description: "Complete protection coverage",
    gradient: "from-violet-500 via-purple-600 to-indigo-500",
    bgGradient: "from-violet-50 via-purple-100 to-indigo-50"
  },
  { 
    number: "50+", 
    label: "States Covered", 
    icon: MapPin,
    description: "Nationwide reach & reliability",
    gradient: "from-orange-500 via-red-500 to-pink-500",
    bgGradient: "from-orange-50 via-red-50 to-pink-50"
  }
];

export const Services = () => {
  return (
    <section className="relative py-32 bg-gradient-to-br from-slate-50 via-white to-gray-50 overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-emerald-200/25 to-cyan-200/25 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-indigo-100/20 to-pink-100/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 via-white to-purple-50 border border-blue-200/50 mb-8 backdrop-blur-sm">
            <Sparkles className="h-5 w-5 text-blue-600 mr-2 animate-pulse" />
            <span className="text-blue-700 font-semibold text-sm tracking-wide uppercase">Premium Services</span>
            <div className="ml-2 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            <span className="block bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
              Transportation
            </span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Discover our comprehensive suite of premium logistics solutions, engineered for precision, 
            reliability, and unmatched service quality across every mile of your journey.
          </p>
        </div>

        {/* Revolutionary Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-24">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="group relative" style={{animationDelay: `${index * 0.1}s`}}>
                {/* Background glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500`}></div>
                
                {/* Main card */}
                <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-2xl group-hover:shadow-3xl transition-all duration-700 group-hover:scale-105">
                  {/* Floating icon container */}
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:rotate-3 group-hover:scale-110`}>
                      <Icon className="h-10 w-10 text-white drop-shadow-lg" />
                    </div>
                    
                    {/* Floating particles */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-80 animate-pulse"></div>
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-60 animate-pulse" style={{animationDelay: '1s'}}></div>
                  </div>
                  
                  {/* Enhanced typography */}
                  <div className="text-center">
                    <div className={`text-4xl lg:text-5xl font-black mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent tracking-tight`}>
                      {stat.number}
                    </div>
                    <div className="text-gray-900 font-bold text-lg mb-2 tracking-wide">
                      {stat.label}
                    </div>
                    <div className="text-gray-600 text-sm font-medium leading-relaxed">
                      {stat.description}
                    </div>
                  </div>
                  
                  {/* Premium shine effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="group relative border-0 bg-white/80 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-700 rounded-3xl overflow-hidden hover:scale-105">
                {/* Premium background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>
                
                <CardHeader className="relative pb-8 pt-10 px-10">
                  <div className="flex items-start space-x-6 mb-6">
                    {/* Revolutionary icon design */}
                    <div className="relative">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:rotate-6 group-hover:scale-110`}>
                        <Icon className="h-10 w-10 text-white drop-shadow-lg" />
                      </div>
                      
                      {/* Floating accent elements */}
                      <div className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                      <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-80 transition-all duration-700 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                      
                      {/* Glow effect */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                    </div>
                    
                    <div className="flex-1">
                      <CardTitle className="text-3xl font-bold text-gray-900 mb-3 tracking-tight group-hover:text-gray-800 transition-colors duration-300">
                        {service.title}
                      </CardTitle>
                      <p className="text-gray-600 leading-relaxed text-lg font-light">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="px-10 pb-10">
                  <div className="space-y-4 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center group/item">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mr-4 shadow-lg group-hover/item:shadow-xl transition-all duration-300 group-hover/item:scale-110">
                          <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="text-gray-700 font-medium text-lg group-hover/item:text-gray-900 transition-colors duration-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white border-0 rounded-2xl py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-105`}
                  >
                    Discover More
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-500" />
                  </Button>
                </CardContent>
                
                {/* Premium overlay effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              </Card>
            );
          })}
        </div>

        {/* Revolutionary CTA Section */}
        <div className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 rounded-3xl p-12 lg:p-16 text-center text-white overflow-hidden">
          {/* Animated background effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
          
          {/* Floating particles */}
          <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-20 right-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse opacity-80" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-10 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-70" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-emerald-400 rounded-full animate-pulse opacity-60" style={{animationDelay: '3s'}}></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-8">
              <Star className="h-5 w-5 text-yellow-400 mr-2 animate-pulse" />
              <span className="text-blue-200 font-semibold text-sm tracking-wide uppercase">Ready to Experience Excellence?</span>
            </div>
            
            <h3 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Transform Your Logistics
              </span>
            </h3>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
              Partner with industry leaders who understand that exceptional transportation 
              requires precision, dedication, and an unwavering commitment to excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 hover:from-blue-600 hover:via-blue-700 hover:to-cyan-600 text-white px-10 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 group border-0"
              >
                <Sparkles className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-500" />
                Get Premium Quote
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-500" />
              </Button>
              
              <Button 
                size="lg" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white border-2 border-white/30 hover:border-white/50 px-10 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 group"
              >
                <Phone className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-500" />
                (832) 282-3128
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
