
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Shield, Package, Zap, ArrowRight, Star, MapPin } from "lucide-react";

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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium mb-4">
            <Star className="h-4 w-4 mr-2" />
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Complete Freight Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive transportation services tailored to your specific logistics needs with Fortune 500 reliability
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="bg-white rounded-2xl p-6 shadow-sm card-hover">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title}
                className="card-hover border-0 shadow-lg bg-white animate-slide-up"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(service.color)}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </CardTitle>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-center text-white animate-fade-in">
          <h3 className="text-3xl font-bold mb-4">Ready to Ship Your Freight?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Get a quote today and experience the Double R Transportation difference
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Phone className="mr-2 h-5 w-5" />
              (832) 282-3128
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
