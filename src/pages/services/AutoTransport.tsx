import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Truck, Shield, MapPin, Clock, Phone, CheckCircle2, Star, ArrowRight, Sparkles } from "lucide-react";
export const AutoTransport = () => {
  return <>
      <Helmet>
        <title>Auto Transport Services | Port to Dealer Vehicle Transportation | Double R Transportation</title>
        <meta name="description" content="Professional auto transport from major ports to dealerships nationwide. GPS tracking, full insurance, white-glove handling. Call (832) 282-3128 for premium vehicle transportation." />
        <meta name="keywords" content="auto transport, vehicle shipping, port to dealer, car transport, vehicle logistics, automotive shipping, Houston auto transport" />
        <meta property="og:title" content="Auto Transport Services | Double R Transportation" />
        <meta property="og:description" content="Premium auto transport from ports to dealerships with GPS tracking and full insurance coverage." />
        <meta property="og:type" content="service" />
        <link rel="canonical" href="https://doublerransport.com/services/auto-transport" />
      </Helmet>

      <div className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 via-white to-blue-50 border border-blue-200/50 mb-8">
                <Truck className="h-5 w-5 text-blue-600 mr-3" />
                <span className="text-blue-700 font-semibold text-lg tracking-wide">Auto Transport Excellence</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                  Professional Auto
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
                  Transportation
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                Seamless vehicle transportation from major ports to dealerships nationwide. 
                Experience premium logistics with real-time tracking, full insurance coverage, and white-glove handling.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/get-a-quote">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold rounded-xl">
                    <Sparkles className="mr-2 h-5 w-5" />
                    Get A Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <a href="tel:8322823128">
                  <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-xl">
                    <Phone className="mr-2 h-5 w-5" />
                    (832) 282-3128
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Auto Transport?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Port Pickup Service</h3>
                  <p className="text-gray-600">Direct pickup from major ports including Houston, Long Beach, Newark, and Savannah with streamlined customs clearance.</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Full Insurance Coverage</h3>
                  <p className="text-gray-600">Comprehensive cargo insurance up to $1M per vehicle with additional liability coverage for complete peace of mind.</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Real-Time GPS Tracking</h3>
                  <p className="text-gray-600">24/7 GPS monitoring with live updates, delivery notifications, and transparent communication throughout transport.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our Transport Process</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[{
              step: "1",
              title: "Port Pickup",
              desc: "Secure vehicle retrieval from designated port facilities"
            }, {
              step: "2",
              title: "Pre-Transport Inspection",
              desc: "Detailed condition assessment and documentation"
            }, {
              step: "3",
              title: "Secure Loading",
              desc: "Professional loading with specialized equipment"
            }, {
              step: "4",
              title: "Dealership Delivery",
              desc: "On-time delivery to your specified location"
            }].map((item, index) => <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>)}
            </div>
          </div>
        </section>

        {/* Coverage Areas */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Nationwide Coverage</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">We serve all 50 states with specialized routes connecting major ports to dealership networks across America.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Major Port Facilities</h3>
                <div className="space-y-2">
                  {["Port of Houston", "Port of Long Beach", "Port of Newark", "Port of Savannah", "Port of Charleston", "Port of Baltimore"].map(port => <div key={port} className="flex items-center">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                      <span>{port}</span>
                    </div>)}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Service Benefits</h3>
                <div className="space-y-2">
                  {["Door-to-door delivery", "Expedited shipping options", "Multiple vehicle handling", "Dealership coordination", "Custom scheduling", "Insurance documentation"].map(benefit => <div key={benefit} className="flex items-center">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                      <span>{benefit}</span>
                    </div>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transport Your Vehicles?</h2>
            <p className="text-xl mb-8 opacity-90">Get a custom quote for your auto transport needs. Professional service guaranteed.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/get-a-quote">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                  Get A Quote Now
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