import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Zap, Truck, Thermometer, MapPin, Phone, CheckCircle2, Star, ArrowRight, Sparkles, Package } from "lucide-react";
export const DryVanLogistics = () => {
  return <>
      <Helmet>
        <title>Dry Van Logistics Services | General Freight Transport | Double R Transportation</title>
        <meta name="description" content="Professional dry van logistics for general freight, climate-controlled transport, and cross-country deliveries. Last-mile delivery nationwide. Call (832) 282-3128." />
        <meta name="keywords" content="dry van logistics, general freight, climate controlled transport, cross country shipping, last mile delivery, Houston freight" />
        <meta property="og:title" content="Dry Van Logistics Services | Double R Transportation" />
        <meta property="og:description" content="Reliable dry van transportation for general freight with climate-controlled options." />
        <meta property="og:type" content="service" />
        <link rel="canonical" href="https://www.doublertransportationllc.com/services/dry-van-logistics" />
      </Helmet>

      <div className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-slate-50 via-white to-green-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-50 via-white to-green-50 border border-green-200/50 mb-8">
                <Zap className="h-5 w-5 text-green-600 mr-3" />
                <span className="text-green-700 font-semibold text-lg tracking-wide">Dry Van Excellence</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                  Dry Van Logistics
                </span>
                <br />
                <span className="bg-gradient-to-r from-green-600 via-green-500 to-green-700 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                Comprehensive dry van transportation for general freight with climate-controlled options. 
                From cross-country deliveries to last-mile services, we ensure your cargo arrives safely and on time.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/get-a-quote">
                  <Button size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 text-lg font-semibold rounded-xl">
                    <Sparkles className="mr-2 h-5 w-5" />
                    Get A Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <a href="tel:8322823128">
                  <Button size="lg" variant="outline" className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg font-semibold rounded-xl">
                    <Phone className="mr-2 h-5 w-5" />
                    (832) 282-3128
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Service Types */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our Dry Van Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Package className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">General Freight</h3>
                  <p className="text-gray-600 text-sm">Standard dry van transport for non-hazardous cargo and general merchandise</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Thermometer className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Climate Controlled</h3>
                  <p className="text-gray-600 text-sm">Temperature and humidity control for sensitive products and pharmaceuticals</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Cross-Country</h3>
                  <p className="text-gray-600 text-sm">Long-haul transportation across all 48 contiguous states with tracking</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Truck className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Last-Mile</h3>
                  <p className="text-gray-600 text-sm">Final delivery to distribution centers, retailers, and end customers</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Cargo Types */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Cargo We Transport</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[{
              category: "Consumer Goods",
              items: ["Electronics", "Clothing & textiles", "Home goods", "Retail merchandise", "E-commerce packages"]
            }, {
              category: "Industrial Products",
              items: ["Manufacturing supplies", "Raw materials", "Finished goods", "Industrial equipment", "Tools & machinery"]
            }, {
              category: "Food & Beverages",
              items: ["Non-perishable foods", "Beverages", "Canned goods", "Dry ingredients", "Packaged products"]
            }, {
              category: "Medical & Pharma",
              items: ["Medical devices", "Pharmaceuticals", "Lab equipment", "Healthcare supplies", "Research materials"]
            }, {
              category: "Automotive Parts",
              items: ["Auto parts", "Tires", "Accessories", "Tools", "Aftermarket products"]
            }, {
              category: "Paper & Printing",
              items: ["Paper products", "Printing materials", "Office supplies", "Books & publications", "Packaging materials"]
            }].map((category, index) => <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-green-600">{category.category}</h3>
                    <div className="space-y-2">
                      {category.items.map(item => <div key={item} className="flex items-center">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                          <span className="text-gray-600 text-sm">{item}</span>
                        </div>)}
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>

        {/* Equipment Specs */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Equipment Specifications</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">53'</div>
                  <div className="text-gray-600 font-semibold">Trailer Length</div>
                  <div className="text-sm text-gray-500 mt-1">Standard dry van size</div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">3,400</div>
                  <div className="text-gray-600 font-semibold">Cubic Feet</div>
                  <div className="text-sm text-gray-500 mt-1">Interior cargo space</div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">48,000</div>
                  <div className="text-gray-600 font-semibold">lbs Payload</div>
                  <div className="text-sm text-gray-500 mt-1">Maximum cargo weight</div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">26</div>
                  <div className="text-gray-600 font-semibold">Pallet Positions</div>
                  <div className="text-sm text-gray-500 mt-1">Standard 48x40 pallets</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features & Benefits */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Our Dry Van Services?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Reliable, efficient, and secure transportation solutions for all your general freight needs.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-6">Service Features</h3>
                <div className="space-y-3">
                  {["Real-time GPS tracking", "Climate-controlled options", "24/7 customer support", "Flexible scheduling", "Load optimization", "Electronic logging devices (ELD)"].map(feature => <div key={feature} className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-3" />
                      <span>{feature}</span>
                    </div>)}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6">Quality Assurance</h3>
                <div className="space-y-3">
                  {["DOT compliant operations", "Full cargo insurance coverage", "Professional driver network", "Equipment maintenance programs", "Safety performance monitoring", "Customer satisfaction guarantee"].map(assurance => <div key={assurance} className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-3" />
                      <span>{assurance}</span>
                    </div>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Climate Control Details */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Climate-Controlled Transportation</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Specialized equipment for temperature and humidity-sensitive cargo.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-4">
                    <Thermometer className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Temperature Control</h3>
                  <p className="text-gray-600 mb-4">Precise temperature management from -20°F to +70°F with continuous monitoring.</p>
                  <div className="text-sm text-gray-500">
                    • Multi-zone control • Backup systems • Data logging • Alerts
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center mb-4">
                    <Package className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Humidity Control</h3>
                  <p className="text-gray-600 mb-4">Humidity regulation to protect sensitive products from moisture damage.</p>
                  <div className="text-sm text-gray-500">
                    • 30-90% RH range • Desiccant systems • Vapor barriers • Monitoring
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Real-Time Monitoring</h3>
                  <p className="text-gray-600 mb-4">Continuous environmental monitoring with instant alerts and reporting.</p>
                  <div className="text-sm text-gray-500">
                    • Live tracking • Instant alerts • Data reports • Chain of custody
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Ship Your Freight?</h2>
            <p className="text-xl mb-8 opacity-90">Trust our dry van experts for reliable, secure freight transportation nationwide.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/get-a-quote">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
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