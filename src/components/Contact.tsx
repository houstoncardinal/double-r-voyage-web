
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Get in <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to move your freight? Contact us for a personalized quote and experience 
            the Double R Transportation difference.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-900 flex items-center">
                  <Phone className="h-6 w-6 text-blue-600 mr-3" />
                  Call Us Now
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href="tel:8322823128" 
                  className="text-3xl font-bold text-blue-600 hover:text-blue-700 transition-colors duration-300"
                >
                  (832) 282-3128
                </a>
                <p className="text-slate-600 mt-2">Speak directly with our logistics experts</p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Mail className="h-5 w-5 text-blue-600 mr-3" />
                    <h4 className="font-semibold text-slate-900">Email</h4>
                  </div>
                  <p className="text-slate-600">info@doublerransport.com</p>
                  <p className="text-sm text-slate-500 mt-1">(Domain coming soon)</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Clock className="h-5 w-5 text-blue-600 mr-3" />
                    <h4 className="font-semibold text-slate-900">Hours</h4>
                  </div>
                  <p className="text-slate-600">Mon-Fri: 6AM-8PM</p>
                  <p className="text-slate-600">Sat-Sun: 8AM-6PM</p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                  <h4 className="font-semibold text-slate-900">Service Area</h4>
                </div>
                <p className="text-slate-600">
                  Nationwide coverage with specialized focus on major port cities and 
                  automotive dealership networks across the United States.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-slate-900">Request a Quote</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    First Name *
                  </label>
                  <Input placeholder="John" className="border-slate-300 focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Last Name *
                  </label>
                  <Input placeholder="Doe" className="border-slate-300 focus:border-blue-500" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Company
                </label>
                <Input placeholder="Your Company Name" className="border-slate-300 focus:border-blue-500" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email *
                  </label>
                  <Input 
                    type="email" 
                    placeholder="john@company.com" 
                    className="border-slate-300 focus:border-blue-500" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Phone *
                  </label>
                  <Input 
                    type="tel" 
                    placeholder="(555) 123-4567" 
                    className="border-slate-300 focus:border-blue-500" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Pickup Location
                  </label>
                  <Input placeholder="City, State" className="border-slate-300 focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Delivery Location
                  </label>
                  <Input placeholder="City, State" className="border-slate-300 focus:border-blue-500" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Service Needed
                </label>
                <select className="w-full px-3 py-2 border border-slate-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
                  <option>Select a service...</option>
                  <option>Auto Transport from Ports</option>
                  <option>Hazmat Transportation</option>
                  <option>Flatbed Hauling</option>
                  <option>Dry Van Logistics</option>
                  <option>Other Specialty Transport</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Additional Details
                </label>
                <Textarea 
                  placeholder="Tell us about your transportation needs..." 
                  className="border-slate-300 focus:border-blue-500 min-h-[120px]"
                />
              </div>

              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Get My Quote
              </Button>

              <p className="text-sm text-slate-500 text-center">
                * Required fields. We'll respond within 2 hours during business hours.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
