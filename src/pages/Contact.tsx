import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Send, Truck, Shield, Star, CheckCircle } from "lucide-react";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Double R Transportation - Get Your Free Quote Today</title>
        <meta name="description" content="Contact Double R Transportation for premium auto transport, hazmat shipping, and logistics services. Call (832) 282-3128 or get a free quote online. Houston, TX." />
        <meta name="keywords" content="contact Double R Transportation, get quote Houston auto transport, Houston logistics contact, transportation quote Houston, car shipping quote" />
        <meta property="og:title" content="Contact Double R Transportation - Get Your Free Quote Today" />
        <meta property="og:description" content="Ready for premium transportation services? Contact our Houston team for a free quote. Available 24/7 for emergency transport." />
        <link rel="canonical" href="https://www.doublertransportationllc.com/contact" />
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
            <Phone className="h-5 w-5 text-blue-600 mr-3" />
            <span className="text-blue-700 font-semibold text-lg tracking-wide">Get In Touch</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
              Contact
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
              Double R Transportation
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to experience premium transportation services? Get in touch with our team of logistics experts. 
            We're here to provide you with a customized quote and answer all your questions.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-100/30 to-cyan-100/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-purple-100/20 to-blue-100/15 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-200/30 shadow-xl">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Get Your Free Quote</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours with a personalized quote.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <Input 
                      type="text" 
                      placeholder="John" 
                      className="w-full"
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <Input 
                      type="text" 
                      placeholder="Doe" 
                      className="w-full"
                      required 
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full"
                    required 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <Input 
                    type="tel" 
                    placeholder="(555) 123-4567" 
                    className="w-full"
                    required 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Type
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Select a service</option>
                    <option value="auto-transport">Auto Transport</option>
                    <option value="hazmat">Hazmat Transportation</option>
                    <option value="dry-van">Dry Van Logistics</option>
                    <option value="flatbed">Flatbed Hauling</option>
                  </select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pickup Location
                    </label>
                    <Input 
                      type="text" 
                      placeholder="City, State" 
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Delivery Location
                    </label>
                    <Input 
                      type="text" 
                      placeholder="City, State" 
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your transportation needs..."
                    className="w-full min-h-[120px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 hover:from-blue-700 hover:via-blue-800 hover:to-cyan-700 text-white py-4 text-lg font-semibold rounded-xl shadow-lg"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="grid gap-6">
                <Card className="bg-white/80 backdrop-blur-sm border-blue-200/30 shadow-xl">
                  <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                    <Phone className="h-6 w-6 text-blue-600 mr-3" />
                    <div>
                      <CardTitle className="text-xl">Call Us</CardTitle>
                      <CardDescription>Speak directly with our team</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <a href="tel:8322823128" className="text-2xl font-bold text-blue-600 hover:text-blue-700">
                      (832) 282-3128
                    </a>
                    <p className="text-gray-600 mt-2">Available 24/7 for emergency transport</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm border-blue-200/30 shadow-xl">
                  <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                    <Mail className="h-6 w-6 text-blue-600 mr-3" />
                    <div>
                      <CardTitle className="text-xl">Email Us</CardTitle>
                      <CardDescription>Get a detailed response</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <a href="mailto:info@doublertransportationllc.com" className="text-xl font-semibold text-blue-600 hover:text-blue-700">
                      info@doublertransportationllc.com
                    </a>
                    <p className="text-gray-600 mt-2">We'll respond within 4 hours</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm border-blue-200/30 shadow-xl">
                  <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                    <MapPin className="h-6 w-6 text-blue-600 mr-3" />
                    <div>
                      <CardTitle className="text-xl">Service Area</CardTitle>
                      <CardDescription>Where we operate</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xl font-semibold text-slate-900">Houston, Texas</p>
                    <p className="text-gray-600 mt-2">Serving nationwide with Houston headquarters</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm border-blue-200/30 shadow-xl">
                  <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                    <Clock className="h-6 w-6 text-blue-600 mr-3" />
                    <div>
                      <CardTitle className="text-xl">Business Hours</CardTitle>
                      <CardDescription>When to reach us</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1">
                      <p className="font-semibold">Monday - Friday: 6:00 AM - 8:00 PM</p>
                      <p className="font-semibold">Saturday: 8:00 AM - 6:00 PM</p>
                      <p className="font-semibold">Sunday: Emergency Only</p>
                    </div>
                    <p className="text-gray-600 mt-2">24/7 emergency transport available</p>
                  </CardContent>
                </Card>
              </div>

              {/* Why Choose Us Quick Points */}
              <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Why Choose Double R Transportation?</h3>
                <div className="space-y-4">
                  {[
                    "15+ years of trusted service in Houston",
                    "Fully licensed, bonded & insured",
                    "Real-time GPS tracking on all shipments",
                    "Competitive pricing with no hidden fees"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
    </>
  );
}