
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Zap, Package, Shield, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Auto Transport from Ports",
    description: "Port-to-dealer or direct-to-door service with enclosed or open carrier options. Nationwide coverage with real-time tracking.",
    icon: Truck,
    features: ["Port pickup service", "Enclosed/Open carriers", "Real-time tracking", "Dealer networks"]
  },
  {
    title: "Hazmat Transportation",
    description: "Certified Hazmat handling with full DOT and EPA compliance. Specialized drivers and vehicles for safe transport.",
    icon: Shield,
    features: ["DOT certified", "EPA compliant", "Specialized vehicles", "Expert drivers"]
  },
  {
    title: "Flatbed Hauling",
    description: "Oversized, heavy-duty loads including construction equipment, steel, and machinery with rigorous load securement.",
    icon: Package,
    features: ["Heavy equipment", "Steel transport", "Load securement", "Route planning"]
  },
  {
    title: "Dry Van Logistics",
    description: "General freight transportation with food-grade and climate-controlled options for cross-country hauls.",
    icon: Zap,
    features: ["Climate controlled", "Food-grade certified", "Cross-country", "Last-mile delivery"]
  }
];

export const Services = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive transportation solutions tailored to your specific logistics needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title}
                className="group hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-blue-100 rounded-xl group-hover:bg-blue-600 transition-colors duration-500">
                      <Icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-500" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-slate-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-700">
                        <ArrowRight className="h-4 w-4 text-blue-600 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
