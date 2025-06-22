
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Zap, Package, Shield, ArrowRight, Star } from "lucide-react";

const services = [
  {
    title: "Auto Transport from Ports",
    description: "Fortune 500 trusted port-to-dealer service with white-glove enclosed or open carrier options. Nationwide coverage with real-time GPS tracking and dedicated account management.",
    icon: Truck,
    features: ["Premium port pickup", "Enclosed/Open carriers", "Real-time GPS tracking", "Fortune 500 dealer networks"],
    badge: "Most Popular"
  },
  {
    title: "Hazmat Transportation",
    description: "Elite certified Hazmat handling with full DOT and EPA compliance. Specialized drivers with advanced certifications and state-of-the-art vehicles for maximum safety.",
    icon: Shield,
    features: ["DOT certified elite", "EPA compliant", "Specialized fleet", "Master-certified drivers"],
    badge: "Premium"
  },
  {
    title: "Flatbed Hauling",
    description: "Heavy-duty oversized loads including construction equipment, steel, and industrial machinery with military-grade load securement and precision route planning.",
    icon: Package,
    features: ["Heavy equipment specialist", "Industrial steel transport", "Military-grade securement", "Precision route planning"],
    badge: "Specialty"
  },
  {
    title: "Dry Van Logistics",
    description: "Executive-level general freight transportation with pharmaceutical-grade and climate-controlled options for cross-country hauls and last-mile precision delivery.",
    icon: Zap,
    features: ["Climate controlled", "Pharmaceutical-grade", "Cross-country express", "Last-mile precision"],
    badge: "Executive"
  }
];

export const Services = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-100 text-blue-700 font-semibold mb-8 shadow-lg">
            <Star className="h-5 w-5 mr-2" />
            Fortune 500 Trusted Services
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight">
            Premium <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-2xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
            Comprehensive transportation solutions tailored to your specific logistics needs with Fortune 500 reliability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title}
                className="group hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-700 transform hover:-translate-y-4 border-0 bg-gradient-to-br from-white to-slate-50/50 backdrop-blur-sm relative overflow-hidden"
              >
                {/* Premium badge */}
                <div className="absolute top-6 right-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  {service.badge}
                </div>
                
                <CardHeader className="pb-6 relative">
                  <div className="flex items-center space-x-6 mb-6">
                    <div className="relative p-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-700 shadow-xl">
                      <Icon className="h-10 w-10 text-blue-600 group-hover:text-white transition-colors duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-black text-slate-900 group-hover:text-blue-700 transition-colors duration-500 tracking-tight">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-slate-600 text-lg leading-relaxed font-medium">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-slate-700 group-hover:text-slate-800 transition-colors duration-300">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-4 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300"></div>
                        <span className="font-semibold tracking-wide">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-blue-700 group-hover:text-white group-hover:border-blue-600 transition-all duration-500 py-4 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-3xl"></div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
