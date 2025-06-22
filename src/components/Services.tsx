
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Shield, Package, Zap, ArrowRight, CheckCircle2, MapPin, Phone, Clock, Award } from "lucide-react";

const services = [
  {
    title: "Auto Transport",
    description: "Professional port-to-dealer vehicle transportation with comprehensive tracking and insurance coverage.",
    icon: Truck,
    features: ["Port pickup service", "Real-time GPS tracking", "Nationwide dealer networks", "Full insurance coverage"]
  },
  {
    title: "Hazmat Transportation",
    description: "Certified hazmat handling with DOT and EPA compliance, operated by specially trained drivers.",
    icon: Shield,
    features: ["DOT certified operations", "EPA compliant handling", "Specialized equipment", "Expert certified drivers"]
  },
  {
    title: "Flatbed Hauling",
    description: "Heavy-duty transportation for oversized loads, construction equipment, and industrial machinery.",
    icon: Package,
    features: ["Heavy equipment transport", "Steel and materials", "Professional load securement", "Route optimization"]
  },
  {
    title: "Dry Van Logistics",
    description: "General freight transportation with climate-controlled options for cross-country deliveries.",
    icon: Zap,
    features: ["Climate controlled options", "Cross-country coverage", "Last-mile delivery", "Secure transportation"]
  }
];

const stats = [
  { 
    number: "500+", 
    label: "Successful Deliveries", 
    icon: Truck,
    description: "Premium shipments completed"
  },
  { 
    number: "24/7", 
    label: "Customer Support", 
    icon: Clock,
    description: "Always available assistance"
  },
  { 
    number: "100%", 
    label: "Fully Insured", 
    icon: Shield,
    description: "Complete protection coverage"
  },
  { 
    number: "50+", 
    label: "States Covered", 
    icon: MapPin,
    description: "Nationwide reach & reliability"
  }
];

export const Services = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Professional Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-gray-200 bg-white shadow-sm mb-6">
            <Award className="h-4 w-4 text-gray-600 mr-2" />
            <span className="text-gray-700 font-medium text-sm">Professional Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">
            Transportation Solutions
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive logistics services designed for enterprise-level reliability, 
            precision, and operational excellence across every delivery.
          </p>
        </div>

        {/* Corporate Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="group">
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  {/* Professional icon container */}
                  <div className="w-16 h-16 rounded-xl bg-gray-900 flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-800 transition-colors duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-900 font-semibold text-lg mb-2">
                      {stat.label}
                    </div>
                    <div className="text-gray-600 text-sm leading-relaxed">
                      {stat.description}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Corporate Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="group border border-gray-200 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-2xl overflow-hidden">
                <CardHeader className="pb-6 pt-8 px-8">
                  <div className="flex items-start space-x-6 mb-6">
                    {/* Corporate icon design */}
                    <div className="w-16 h-16 rounded-xl bg-gray-900 flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-300">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-bold text-gray-900 mb-3">
                        {service.title}
                      </CardTitle>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="px-8 pb-8">
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center mr-3">
                          <CheckCircle2 className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white border-0 rounded-xl py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    Learn More
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Corporate CTA Section */}
        <div className="relative bg-gray-900 rounded-2xl p-12 lg:p-16 text-center text-white">
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Optimize Your Logistics?
            </h3>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Partner with industry professionals who deliver consistent results through 
              proven processes, advanced technology, and unwavering commitment to excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-0"
              >
                Get Quote
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg" 
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white/30 hover:border-white/50 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
              >
                <Phone className="mr-3 h-5 w-5" />
                (832) 282-3128
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
