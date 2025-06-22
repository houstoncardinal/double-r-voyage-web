
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Shield, Package, Zap, ArrowRight, CheckCircle2, MapPin, Phone, Clock, Award } from "lucide-react";

const services = [
  {
    title: "Auto Transport",
    description: "Professional port-to-dealer vehicle transportation with comprehensive tracking and insurance coverage.",
    icon: Truck,
    features: ["Port pickup service", "Real-time GPS tracking", "Nationwide dealer networks", "Full insurance coverage"],
    color: "blue"
  },
  {
    title: "Hazmat Transportation",
    description: "Certified hazmat handling with DOT and EPA compliance, operated by specially trained drivers.",
    icon: Shield,
    features: ["DOT certified operations", "EPA compliant handling", "Specialized equipment", "Expert certified drivers"],
    color: "red"
  },
  {
    title: "Flatbed Hauling",
    description: "Heavy-duty transportation for oversized loads, construction equipment, and industrial machinery.",
    icon: Package,
    features: ["Heavy equipment transport", "Steel and materials", "Professional load securement", "Route optimization"],
    color: "green"
  },
  {
    title: "Dry Van Logistics",
    description: "General freight transportation with climate-controlled options for cross-country deliveries.",
    icon: Zap,
    features: ["Climate controlled options", "Cross-country coverage", "Last-mile delivery", "Secure transportation"],
    color: "purple"
  }
];

const stats = [
  { number: "500+", label: "Successful Deliveries", icon: Truck },
  { number: "24/7", label: "Customer Support", icon: Clock },
  { number: "100%", label: "Fully Insured", icon: Shield },
  { number: "50+", label: "States Covered", icon: MapPin }
];

export const Services = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional Transportation Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive logistics solutions designed to meet your specific transportation needs with reliability and precision.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center">
                <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 border border-blue-100">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardHeader className="pb-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="bg-blue-600 w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </CardTitle>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-2 border-gray-200 hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 rounded-2xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our logistics experts today for a customized transportation solution
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold"
              >
                Get Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold"
              >
                <Phone className="mr-2 h-5 w-5" />
                (832) 282-3128
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
