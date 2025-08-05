import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Award, Truck, MapPin, Clock, Star, Sparkles, ArrowRight, Phone, Shield, Users, Target } from "lucide-react";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Double R Transportation - Houston's Premier Logistics Company</title>
        <meta name="description" content="Learn about Double R Transportation's 15+ years of excellence in Houston auto transport, hazmat shipping, and logistics. Driven by precision, delivered with power." />
        <meta name="keywords" content="about Double R Transportation, Houston logistics company, auto transport company Houston, transportation company history, logistics expertise Houston" />
        <meta property="og:title" content="About Double R Transportation - Houston's Premier Logistics Company" />
        <meta property="og:description" content="Discover our mission, values, and 15+ years of transportation excellence serving Houston and nationwide." />
        <link rel="canonical" href="https://doublerransport.com/about" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <Navigation />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-cyan-200/20 rounded-full opacity-60 animate-float blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-purple-200/20 to-blue-200/15 rounded-full opacity-40 animate-float blur-2xl" style={{animationDelay: '2s'}}></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.08)_1px,transparent_0)] bg-[length:32px_32px] opacity-30"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-50 border border-blue-200/50 shadow-lg mb-8">
            <Star className="h-5 w-5 text-blue-600 mr-3" />
            <span className="text-blue-700 font-semibold text-lg tracking-wide">About Double R Transportation</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
              Driven by Precision,
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
              Delivered with Power
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Since our founding, Double R Transportation has been the trusted partner for businesses across Houston and nationwide, 
            delivering precision logistics solutions with unmatched reliability and professional excellence.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-100/30 to-cyan-100/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-purple-100/20 to-blue-100/15 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mission and Why Choose Us */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-200/30 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                At Double R Transportation, we revolutionize logistics through precision engineering, 
                uncompromising safety standards, and customer-centric service excellence. Every mile 
                matters, every delivery counts.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We believe that transportation is more than moving goods from point A to point B—it's about 
                building trust, ensuring reliability, and exceeding expectations with every shipment.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-200/30 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center mr-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Why Choose Us</h2>
              </div>
              <div className="space-y-4">
                {[
                  "15+ years of transportation excellence in Houston and nationwide",
                  "DOT certified and fully insured operations with comprehensive coverage", 
                  "Real-time GPS tracking on all shipments for complete transparency",
                  "24/7 customer support and communication for peace of mind",
                  "Specialized expertise in port logistics and auto transport",
                  "Hazmat certified drivers for safe dangerous goods transportation"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Company Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
            {[
              { number: "15+", label: "Years of Excellence", icon: Award, color: "blue" },
              { number: "1000+", label: "Successful Deliveries", icon: Truck, color: "green" },
              { number: "48", label: "States Covered", icon: MapPin, color: "purple" },
              { number: "24/7", label: "Customer Support", icon: Clock, color: "orange" }
            ].map((stat, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-semibold text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Our Values */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Safety First",
                  description: "Every decision we make prioritizes the safety of our drivers, your cargo, and the communities we serve.",
                  icon: Shield
                },
                {
                  title: "Reliability",
                  description: "When we commit to a delivery, you can count on us. Our track record speaks for itself.",
                  icon: CheckCircle2
                },
                {
                  title: "Excellence",
                  description: "We don't just meet expectations—we exceed them. Quality service is our standard, not our exception.",
                  icon: Star
                }
              ].map((value, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-200/30 shadow-xl hover:shadow-2xl transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 rounded-3xl p-12 text-white text-center shadow-2xl">
            <h3 className="text-4xl font-bold mb-4">Ready to Experience Excellence?</h3>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Join hundreds of satisfied customers who trust Double R Transportation for their premium logistics needs. 
              Let us show you what true transportation excellence looks like.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="tel:8322823128">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (832) 282-3128
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
    </>
  );
}