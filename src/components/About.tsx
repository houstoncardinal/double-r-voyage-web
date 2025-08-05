import { Button } from "@/components/ui/button";
import { CheckCircle2, Award, Truck, MapPin, Clock, Star, Sparkles, ArrowRight, Phone, Users } from "lucide-react";
export const About = () => {
  return <section className="py-8 bg-white relative overflow-hidden">
      {/* Sophisticated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-100/30 to-cyan-100/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-purple-100/20 to-blue-100/15 rounded-full blur-2xl animate-float" style={{
        animationDelay: '2s'
      }}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.08)_1px,transparent_0)] bg-[length:32px_32px] opacity-30"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-50 border border-blue-200/50 shadow-lg mb-8">
            <Star className="h-5 w-5 text-blue-600 mr-3" />
            <span className="text-blue-700 font-semibold text-lg tracking-wide">About Our Company</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
              Driven by Precision,
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
              Delivered with Power
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Double R Transportation stands as a premier logistics partner, delivering unmatched precision 
            and reliability in every shipment across America's highways.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-200/30 shadow-xl hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              At Double R Transportation, we revolutionize logistics through precision engineering, 
              uncompromising safety standards, and customer-centric service excellence. Every mile 
              matters, every delivery counts.
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-200/30 shadow-xl hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Why Choose Us</h3>
            <div className="space-y-3">
              {["15+ years of transportation excellence", "DOT certified and fully insured operations", "Real-time GPS tracking on all shipments", "24/7 customer support and communication", "Specialized expertise in port logistics"].map((item, index) => <div key={index} className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>)}
            </div>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 rounded-3xl p-12 text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">Ready to Experience Excellence?</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust Double R Transportation for their premium logistics needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg">
                <Sparkles className="mr-2 h-5 w-5" />
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="tel:8322823128">
              <Button size="lg" variant="outline" className="border-2 border-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl text-slate-950">
                <Phone className="mr-2 h-5 w-5" />
                Call (832) 282-3128
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>;
};