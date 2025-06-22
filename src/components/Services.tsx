
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Shield, Package, Zap, ArrowRight, Star, MapPin, Phone, Sparkles, CheckCircle2 } from "lucide-react";

const services = [
  {
    title: "Auto Transport",
    description: "Port-to-dealer service with enclosed or open carrier options. Nationwide coverage with real-time GPS tracking.",
    icon: Truck,
    features: ["Port pickup", "GPS tracking", "Dealer networks", "Full insurance"],
    color: "blue",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Hazmat Transportation",
    description: "DOT and EPA compliant hazmat handling with specialized drivers and advanced certifications.",
    icon: Shield,
    features: ["DOT certified", "EPA compliant", "Specialized fleet", "Expert drivers"],
    color: "red",
    gradient: "from-red-500 to-rose-500"
  },
  {
    title: "Flatbed Hauling",
    description: "Heavy-duty oversized loads including construction equipment and industrial machinery.",
    icon: Package,
    features: ["Heavy equipment", "Steel transport", "Load securement", "Route planning"],
    color: "green",
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    title: "Dry Van Logistics",
    description: "General freight transportation with climate-controlled options for cross-country hauls.",
    icon: Zap,
    features: ["Climate controlled", "Cross-country", "Last-mile delivery", "Secure transport"],
    color: "purple",
    gradient: "from-purple-500 to-indigo-500"
  }
];

const stats = [
  { number: "500+", label: "Successful Deliveries", icon: Truck, color: "blue" },
  { number: "24/7", label: "Customer Support", icon: Star, color: "yellow" },
  { number: "100%", label: "Fully Insured", icon: Shield, color: "green" },
  { number: "50+", label: "States Covered", icon: MapPin, color: "purple" }
];

export const Services = () => {
  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-gradient-to-br from-blue-50 to-blue-100 text-blue-700 border-blue-200/50",
      red: "bg-gradient-to-br from-red-50 to-red-100 text-red-700 border-red-200/50",
      green: "bg-gradient-to-br from-emerald-50 to-emerald-100 text-emerald-700 border-emerald-200/50",
      purple: "bg-gradient-to-br from-purple-50 to-purple-100 text-purple-700 border-purple-200/50",
      yellow: "bg-gradient-to-br from-yellow-50 to-yellow-100 text-yellow-700 border-yellow-200/50"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getStatGradient = (color: string) => {
    const gradients = {
      blue: "from-blue-500 to-cyan-500",
      yellow: "from-yellow-500 to-orange-500",
      green: "from-emerald-500 to-teal-500",
      purple: "from-purple-500 to-indigo-500"
    };
    return gradients[color as keyof typeof gradients] || gradients.blue;
  };

  return (
    <section className="relative py-20 sm:py-28 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-200/40 to-cyan-200/40 rounded-full opacity-60 animate-float blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-purple-200/40 to-blue-200/40 rounded-full opacity-50 animate-float blur-2xl" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-100/20 to-cyan-100/20 rounded-full opacity-30 animate-float blur-3xl" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-16 sm:mb-20 animate-fade-in">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 via-white to-cyan-50 border border-blue-200/50 luxury-shadow-xl backdrop-blur-sm mb-6 animate-shimmer">
            <Sparkles className="h-5 w-5 mr-3 text-blue-600 animate-pulse" />
            <span className="text-blue-700 font-bold text-sm tracking-wider uppercase">Premium Services</span>
            <div className="ml-3 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
            <span className="block bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
              Complete Freight
            </span>
            <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent mt-2 animate-shimmer">
              Solutions
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Comprehensive transportation services tailored to your specific logistics needs with Fortune 500 reliability and premium white-glove service
          </p>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="group animate-slide-up" style={{animationDelay: `${index * 0.15}s`}}>
                <div className="glass-effect rounded-3xl p-6 sm:p-8 luxury-shadow-2xl border border-white/40 luxury-card-hover text-center relative overflow-hidden">
                  {/* Animated background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${getStatGradient(stat.color)} opacity-5 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                  
                  <div className="relative z-10">
                    <div className={`${getColorClasses(stat.color)} w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 luxury-shadow-xl group-hover:scale-110 transition-all duration-500`}>
                      <Icon className="h-8 w-8 sm:h-10 sm:w-10" />
                    </div>
                    <div className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${getStatGradient(stat.color)} bg-clip-text text-transparent mb-2`}>
                      {stat.number}
                    </div>
                    <div className="text-sm sm:text-base text-gray-600 font-semibold tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title}
                className="group border-0 luxury-shadow-2xl glass-effect animate-slide-up relative overflow-hidden luxury-card-hover"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700 rounded-2xl`}></div>
                
                <CardHeader className="pb-4 relative z-10">
                  <div className="flex items-center space-x-5 mb-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center luxury-shadow-xl group-hover:scale-110 transition-all duration-500 ${getColorClasses(service.color)}`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-gray-900 tracking-tight mb-1">
                        {service.title}
                      </CardTitle>
                      <div className={`text-sm font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent uppercase tracking-wider`}>
                        Premium Service
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-base font-light">
                    {service.description}
                  </p>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <div className="space-y-4 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center group-hover:translate-x-2 transition-transform duration-300" style={{transitionDelay: `${idx * 50}ms`}}>
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center mr-4 flex-shrink-0 group-hover:rotate-12 transition-transform duration-300`}>
                          <CheckCircle2 className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700 font-medium tracking-wide">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full group/btn border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 rounded-2xl py-4 font-bold tracking-wide transition-all duration-500 luxury-shadow hover:luxury-shadow-xl"
                  >
                    <span className="mr-3">Learn More</span>
                    <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Enhanced CTA Section */}
        <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-700 rounded-3xl p-8 sm:p-12 lg:p-16 text-center text-white animate-fade-in luxury-shadow-2xl overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-3xl animate-pulse"></div>
            <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full animate-float blur-xl"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full animate-float blur-lg" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm mb-6">
              <Sparkles className="h-5 w-5 mr-3 animate-pulse" />
              <span className="font-bold text-sm tracking-wider uppercase">Get Started Today</span>
            </div>
            
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight leading-tight">
              Ready to Ship Your Freight?
            </h3>
            <p className="text-xl sm:text-2xl opacity-90 mb-10 max-w-3xl mx-auto text-blue-50 leading-relaxed font-light">
              Experience the Double R Transportation difference with our premium logistics solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white/95 hover:bg-white text-blue-600 hover:text-blue-700 rounded-2xl px-10 py-5 luxury-shadow hover:luxury-shadow-xl transition-all duration-500 group font-bold text-lg tracking-wide"
              >
                <Sparkles className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-500" />
                Get Premium Quote
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-500" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/80 bg-transparent text-white hover:bg-white hover:text-blue-600 rounded-2xl px-10 py-5 luxury-shadow hover:luxury-shadow-xl transition-all duration-500 group font-bold text-lg tracking-wide"
              >
                <Phone className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-500" />
                <span className="hidden sm:inline">(832) 282-3128</span>
                <span className="sm:hidden">Call Now</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
