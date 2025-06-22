
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Shield, Package, Zap, ArrowRight, CheckCircle2, Phone, Award, Sparkles, Star, Clock } from "lucide-react";
import { CarTransportAnimation } from "./CarTransportAnimation";

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
    description: "Premium shipments completed"
  },
  { 
    number: "24/7", 
    label: "Customer Support", 
    description: "Always available assistance"
  },
  { 
    number: "100%", 
    label: "Fully Insured", 
    description: "Complete protection coverage"
  },
  { 
    number: "50+", 
    label: "States Covered", 
    description: "Nationwide reach & reliability"
  }
];

export const Services = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      {/* Background decoration matching your site aesthetic */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-200/40 to-cyan-200/40 rounded-full opacity-60 animate-float blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-blue-300/30 to-blue-100/30 rounded-full opacity-50 animate-float blur-2xl" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 via-white to-blue-50 border border-blue-200/50 luxury-shadow backdrop-blur-sm mb-8">
            <Award className="h-5 w-5 text-blue-600 mr-3" />
            <span className="text-blue-700 font-semibold text-lg tracking-wide">Professional Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
              Transportation Solutions
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive logistics services designed for enterprise-level reliability, 
            precision, and operational excellence across every delivery.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="group glass-effect border border-blue-200/30 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 rounded-2xl overflow-hidden luxury-card-hover">
                <CardHeader className="pb-6 pt-8 px-8">
                  <div className="flex items-start space-x-6 mb-6">
                    {/* Blue gradient icon design */}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center group-hover:from-blue-700 group-hover:to-blue-800 transition-all duration-500 luxury-shadow-xl">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
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
                        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center mr-3">
                          <CheckCircle2 className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-0 rounded-xl py-6 text-lg font-semibold luxury-shadow-xl hover:luxury-shadow-2xl transition-all duration-500 group tracking-wide"
                  >
                    Learn More
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section - Below service cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={stat.label} className="group">
              <div className="glass-effect rounded-2xl p-8 border border-blue-200/30 luxury-shadow hover:luxury-shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-3">
                    {stat.number}
                  </div>
                  <div className="text-slate-900 font-semibold text-lg mb-2">
                    {stat.label}
                  </div>
                  <div className="text-gray-600 text-sm leading-relaxed">
                    {stat.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Company Showcase - Clean and Professional Design */}
        <div className="relative group overflow-hidden rounded-3xl bg-white border border-blue-200/20 luxury-shadow-2xl">
          {/* Clean background with subtle gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-slate-50/30"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-blue-600/5"></div>
          
          <div className="relative z-10 p-12">
            {/* Professional Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 mb-6 luxury-shadow-xl">
                <Truck className="h-6 w-6 text-white mr-3" />
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Double R Transportation LLC
                </h3>
              </div>
              
              <h4 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">
                Premium Logistics Excellence
              </h4>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
                Delivering nationwide with uncompromising quality, precision timing, and complete transparency.
              </p>
            </div>
            
            {/* Professional Truck Animation Container */}
            <div className="relative bg-gradient-to-br from-slate-100/50 to-blue-50/30 rounded-2xl border border-blue-200/30 p-8 mb-10 luxury-shadow">
              <div className="relative h-64 overflow-hidden rounded-xl">
                <CarTransportAnimation />
              </div>
            </div>
            
            {/* Professional Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-200/30">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h5 className="font-bold text-slate-900 mb-2">Premium Service</h5>
                <p className="text-gray-600 text-sm">White-glove handling for every shipment</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-200/30">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h5 className="font-bold text-slate-900 mb-2">Fully Insured</h5>
                <p className="text-gray-600 text-sm">Complete protection and peace of mind</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-200/30">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h5 className="font-bold text-slate-900 mb-2">24/7 Support</h5>
                <p className="text-gray-600 text-sm">Always available when you need us</p>
              </div>
            </div>
            
            {/* Professional CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl px-8 py-4 text-lg font-bold tracking-wide transition-all duration-500 group/btn luxury-shadow-xl hover:luxury-shadow-2xl"
              >
                <Sparkles className="mr-3 h-5 w-5 group-hover/btn:rotate-12 transition-all duration-500" />
                Get Premium Quote
                <ArrowRight className="ml-3 h-5 w-5 group-hover/btn:translate-x-2 transition-all duration-500" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-blue-600 hover:border-blue-700 text-blue-600 hover:bg-blue-50 rounded-xl px-8 py-4 text-lg font-semibold tracking-wide transition-all duration-500"
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
