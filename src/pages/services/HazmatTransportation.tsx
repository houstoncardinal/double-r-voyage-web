import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Shield, AlertTriangle, FileCheck, Users, Phone, CheckCircle2, Star, ArrowRight, Sparkles } from "lucide-react";

export const HazmatTransportation = () => {
  return (
    <>
      <Helmet>
        <title>Hazmat Transportation Services | DOT & EPA Certified | Double R Transportation</title>
        <meta name="description" content="Expert hazmat transportation with DOT & EPA certification. Specialized drivers, compliant handling, secure transport. Call (832) 282-3128 for hazardous materials shipping." />
        <meta name="keywords" content="hazmat transportation, hazardous materials shipping, DOT certified, EPA compliant, dangerous goods transport, Houston hazmat" />
        <meta property="og:title" content="Hazmat Transportation Services | Double R Transportation" />
        <meta property="og:description" content="Certified hazmat transportation with expert drivers and specialized equipment." />
        <meta property="og:type" content="service" />
        <link rel="canonical" href="https://doublerransport.com/services/hazmat-transportation" />
      </Helmet>

      <div className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-slate-50 via-white to-red-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-red-50 via-white to-red-50 border border-red-200/50 mb-8">
                <Shield className="h-5 w-5 text-red-600 mr-3" />
                <span className="text-red-700 font-semibold text-lg tracking-wide">Hazmat Certified</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                  Hazmat Transportation
                </span>
                <br />
                <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-700 bg-clip-text text-transparent">
                  Expertise
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                DOT and EPA certified hazardous materials transportation with specialized equipment, 
                expert-trained drivers, and full regulatory compliance for safe, secure delivery.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact">
                  <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 text-lg font-semibold rounded-xl">
                    <Sparkles className="mr-2 h-5 w-5" />
                    Get Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <a href="tel:8322823128">
                  <Button size="lg" variant="outline" className="border-2 border-red-600 text-red-600 hover:bg-red-50 px-8 py-4 text-lg font-semibold rounded-xl">
                    <Phone className="mr-2 h-5 w-5" />
                    (832) 282-3128
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our Certifications & Compliance</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">DOT Certified</h3>
                  <p className="text-gray-600 text-sm">Department of Transportation hazmat certification and compliance</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <FileCheck className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">EPA Compliant</h3>
                  <p className="text-gray-600 text-sm">Environmental Protection Agency standards and regulations</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Expert Drivers</h3>
                  <p className="text-gray-600 text-sm">Specialized training and hazmat endorsement certifications</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <AlertTriangle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Safety First</h3>
                  <p className="text-gray-600 text-sm">Rigorous safety protocols and emergency response procedures</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Hazmat Classes */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Hazmat Classes We Handle</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { class: "Class 1", name: "Explosives", desc: "Fireworks, ammunition, blasting agents" },
                { class: "Class 2", name: "Gases", desc: "Compressed, liquefied, dissolved gases" },
                { class: "Class 3", name: "Flammable Liquids", desc: "Gasoline, diesel, paint, adhesives" },
                { class: "Class 4", name: "Flammable Solids", desc: "Matches, sulfur, white phosphorus" },
                { class: "Class 5", name: "Oxidizers", desc: "Hydrogen peroxide, ammonium nitrate" },
                { class: "Class 6", name: "Toxic Materials", desc: "Pesticides, medical waste, infectious" },
                { class: "Class 7", name: "Radioactive", desc: "Medical isotopes, uranium, nuclear materials" },
                { class: "Class 8", name: "Corrosives", desc: "Acids, alkalies, battery fluid" },
                { class: "Class 9", name: "Miscellaneous", desc: "Dry ice, lithium batteries, asbestos" }
              ].map((item, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-white text-xs font-bold">{item.class.split(' ')[1]}</span>
                      </div>
                      <h3 className="text-lg font-bold">{item.class}</h3>
                    </div>
                    <h4 className="font-semibold text-red-600 mb-2">{item.name}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Safety Features */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Safety & Compliance Features</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Our comprehensive safety protocols ensure secure transport of hazardous materials with zero incidents.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Equipment & Technology</h3>
                <div className="space-y-3">
                  {[
                    "Specialized hazmat trailers",
                    "Temperature monitoring systems", 
                    "GPS tracking with alerts",
                    "Emergency response equipment",
                    "Leak detection systems",
                    "Fire suppression systems"
                  ].map((feature) => (
                    <div key={feature} className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-3" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Documentation & Compliance</h3>
                <div className="space-y-3">
                  {[
                    "Proper placarding and labeling",
                    "Shipping papers and manifests",
                    "Emergency response guides",
                    "Driver hazmat endorsements",
                    "Route planning and restrictions",
                    "24/7 emergency response team"
                  ].map((feature) => (
                    <div key={feature} className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-3" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Hazmat Transportation?</h2>
            <p className="text-xl mb-8 opacity-90">Trust our certified experts for safe, compliant hazardous materials transport.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact">
                <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                  Get Quote Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="tel:8322823128">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (832) 282-3128
                </Button>
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};