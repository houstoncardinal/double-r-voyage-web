import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Package, Truck, Wrench, Shield, Phone, CheckCircle2, Star, ArrowRight, Sparkles, Weight } from "lucide-react";
export const FlatbedHauling = () => {
  return <>
      <Helmet>
        <title>Flatbed Hauling Services | Heavy Equipment Transport | Double R Transportation</title>
        <meta name="description" content="Professional flatbed hauling for heavy equipment, steel, machinery, and oversized loads. Expert load securement nationwide. Call (832) 282-3128 for flatbed transport." />
        <meta name="keywords" content="flatbed hauling, heavy equipment transport, steel transport, machinery shipping, oversized loads, Houston flatbed" />
        <meta property="og:title" content="Flatbed Hauling Services | Double R Transportation" />
        <meta property="og:description" content="Expert flatbed transportation for heavy equipment and oversized loads with professional securement." />
        <meta property="og:type" content="service" />
        <link rel="canonical" href="https://doublerransport.com/services/flatbed-hauling" />
      </Helmet>

      <div className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-slate-50 via-white to-orange-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-orange-50 via-white to-orange-50 border border-orange-200/50 mb-8">
                <Package className="h-5 w-5 text-orange-600 mr-3" />
                <span className="text-orange-700 font-semibold text-lg tracking-wide">Flatbed Specialists</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                  Heavy-Duty Flatbed
                </span>
                <br />
                <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-700 bg-clip-text text-transparent">
                  Hauling
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                Professional flatbed transportation for heavy equipment, steel, machinery, and oversized loads. 
                Expert load securement and route optimization for safe, efficient delivery nationwide.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact">
                  <Button size="lg" className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-8 py-4 text-lg font-semibold rounded-xl">
                    <Sparkles className="mr-2 h-5 w-5" />
                    Get Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <a href="tel:8322823128">
                  <Button size="lg" variant="outline" className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg font-semibold rounded-xl">
                    <Phone className="mr-2 h-5 w-5" />
                    (832) 282-3128
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Equipment Types */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">What We Transport</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[{
              icon: Wrench,
              title: "Construction Equipment",
              items: ["Excavators", "Bulldozers", "Cranes", "Loaders", "Compactors"]
            }, {
              icon: Weight,
              title: "Steel & Materials",
              items: ["Steel beams", "Rebar", "Pipes", "Coils", "Structural steel"]
            }, {
              icon: Package,
              title: "Industrial Machinery",
              items: ["Manufacturing equipment", "Generators", "Transformers", "Tanks", "Processing units"]
            }].map((category, index) => {
              const Icon = category.icon;
              return <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-700 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                      <div className="space-y-2">
                        {category.items.map(item => <div key={item} className="flex items-center">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                            <span className="text-gray-600">{item}</span>
                          </div>)}
                      </div>
                    </CardContent>
                  </Card>;
            })}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our Flatbed Capabilities</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">80,000</div>
                  <div className="text-gray-600 font-semibold">lbs Max Weight</div>
                  <div className="text-sm text-gray-500 mt-1">Gross vehicle weight</div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">53'</div>
                  <div className="text-gray-600 font-semibold">Trailer Length</div>
                  <div className="text-sm text-gray-500 mt-1">Standard flatbed size</div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">8.5'</div>
                  <div className="text-gray-600 font-semibold">Width Capacity</div>
                  <div className="text-sm text-gray-500 mt-1">Standard width limit</div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">13'6"</div>
                  <div className="text-gray-600 font-semibold">Height Clearance</div>
                  <div className="text-sm text-gray-500 mt-1">Standard height limit</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Load Securement */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Professional Load Securement</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Our expert team uses industry-leading techniques and equipment to secure your cargo safely.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-6">Securement Equipment</h3>
                <div className="space-y-3">
                  {["Heavy-duty chains and binders", "Straps and ratchet tie-downs", "Edge protection and padding", "Blocking and bracing materials", "Specialized cradles and fixtures", "Tarps and weather protection"].map(equipment => <div key={equipment} className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-3" />
                      <span>{equipment}</span>
                    </div>)}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6">Safety Protocols</h3>
                <div className="space-y-3">
                  {["DOT compliance inspections", "Weight distribution analysis", "Route planning for restrictions", "Load documentation and permits", "Driver training and certification", "Real-time monitoring during transport"].map(protocol => <div key={protocol} className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-3" />
                      <span>{protocol}</span>
                    </div>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialized Services */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Specialized Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-4">
                    <Truck className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Oversized Loads</h3>
                  <p className="text-gray-600 mb-4">Permit acquisition and pilot car coordination for loads exceeding standard dimensions.</p>
                  <div className="text-sm text-gray-500">
                    • Width over 8'6" • Height over 13'6" • Length over 53' • Weight over 80k lbs
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">High-Value Cargo</h3>
                  <p className="text-gray-600 mb-4">Enhanced security protocols and specialized insurance for valuable equipment and machinery.</p>
                  <div className="text-sm text-gray-500">
                    • GPS tracking • Security escorts • Enhanced insurance • Chain of custody
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mb-4">
                    <Wrench className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Custom Solutions</h3>
                  <p className="text-gray-600 mb-4">Tailored transport solutions for unique cargo requirements and specialized handling needs.</p>
                  <div className="text-sm text-gray-500">
                    • Custom fixtures • Special permits • Route surveys • Project management
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Move Heavy Equipment?</h2>
            <p className="text-xl mb-8 opacity-90">Trust our flatbed experts for safe, professional heavy equipment transport.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                  Get Quote Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="tel:8322823128">
                <Button size="lg" variant="outline" className="border-2 border-white hover:bg-white/10 px-8 py-4 text-lg font-semibold text-slate-50">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (832) 282-3128
                </Button>
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>;
};