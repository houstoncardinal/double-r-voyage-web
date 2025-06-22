
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Shield, Package, Zap, ArrowRight, Star, MapPin, Phone, Sparkles } from "lucide-react";

const services = [
  {
    title: "Auto Transport",
    description: "Port-to-dealer service with enclosed or open carrier options. Nationwide coverage with real-time GPS tracking.",
    icon: Truck,
    features: ["Port pickup", "GPS tracking", "Dealer networks", "Full insurance"],
    color: "blue"
  },
  {
    title: "Hazmat Transportation",
    description: "DOT and EPA compliant hazmat handling with specialized drivers and advanced certifications.",
    icon: Shield,
    features: ["DOT certified", "EPA compliant", "Specialized fleet", "Expert drivers"],
    color: "red"
  },
  {
    title: "Flatbed Hauling",
    description: "Heavy-duty oversized loads including construction equipment and industrial machinery.",
    icon: Package,
    features: ["Heavy equipment", "Steel transport", "Load securement", "Route planning"],
    color: "green"
  },
  {
    title: "Dry Van Logistics",
    description: "General freight transportation with climate-controlled options for cross-country hauls.",
    icon: Zap,
    features: ["Climate controlled", "Cross-country", "Last-mile delivery", "Secure transport"],
    color: "purple"
  }
];

const stats = [
  { number: "500+", label: "Successful Deliveries", icon: Truck },
  { number: "24/7", label: "Customer Support", icon: Star },
  { number: "100%", label: "Fully Insured", icon: Shield },
  { number: "50+", label: "States Covered", icon: MapPin }
];

export const Services = () => {
  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600 border-blue-200",
      red: "bg-red-100 text-red-600 border-red-200",
      green: "bg-green-100 text-green-600 border-green-200",
      purple: "bg-purple-100 text-purple-600 border-purple-200"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Enhanced for mobile */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-blue-100 via-white to-cyan-100 text-blue-700 font-semibold mb-4 sm:mb-6 luxury-shadow border border-blue-200/50">
            <Sparkles className="h-4 w-4 mr-2 animate-pulse" />
            <span className="text-sm sm:text-base tracking-wide">Our Services</span>
          </div>
          <h2 className="responsive-heading font-bold text-gray-900 mb-3 sm:mb-4 tracking-tight">
            Complete Freight Solutions
          </h2>
          <p className="responsive-body text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive transportation services tailored to your specific logistics needs with Fortune 500 reliability
          </p>
        </div>

        {/* Stats Grid - Enhanced for mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="glass-effect rounded-2xl sm:rounded-3xl p-4 sm:p-6 luxury-shadow card-hover">
                  <div className="bg-gradient-to-br from-blue-100 via-blue-50 to-blue-100 w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 luxury-shadow">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  </div>
                  <div className="text-lg sm:text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium tracking-wide">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Services Grid - Enhanced for mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title}
                className="card-hover border-0 luxury-shadow-xl glass-effect animate-slide-up"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-3 sm:mb-4">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center luxury-shadow-xl ${getColorClasses(service.color)}`}>
                      <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">
                      {service.title}
                    </CardTitle>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base font-medium tracking-wide">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full group border-2 hover:border-blue-300 hover:bg-blue-50 rounded-xl sm:rounded-2xl py-2 sm:py-3 font-semibold tracking-wide transition-all duration-300">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section - Enhanced for mobile */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-center text-white animate-fade-in luxury-shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-2xl sm:rounded-3xl animate-pulse"></div>
          <div className="relative z-10">
            <h3 className="responsive-subheading font-bold mb-3 sm:mb-4 tracking-tight">Ready to Ship Your Freight?</h3>
            <p className="text-base sm:text-xl opacity-90 mb-6 sm:mb-8 max-w-2xl mx-auto text-blue-50 leading-relaxed">
              Get a quote today and experience the Double R Transportation difference
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white/95 hover:bg-white text-blue-600 hover:text-blue-700 rounded-2xl px-6 sm:px-8 py-3 sm:py-4 luxury-shadow hover:luxury-shadow-xl transition-all duration-500 group font-semibold text-base sm:text-lg tracking-wide">
                <Sparkles className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform duration-500" />
                Get Free Quote
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-500" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white/80 text-white hover:bg-white hover:text-blue-600 rounded-2xl px-6 sm:px-8 py-3 sm:py-4 luxury-shadow hover:luxury-shadow-xl transition-all duration-500 group font-semibold text-base sm:text-lg tracking-wide">
                <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform duration-500" />
                <span className="hidden sm:inline">(832) 282-3128</span>
                <span className="sm:hidden">Call Us</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
