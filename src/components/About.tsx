
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Users, Clock } from "lucide-react";

export const About = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Excellence in <span className="text-blue-400">Transportation</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Double R Transportation stands as a premier logistics partner, delivering 
                unmatched precision and reliability in every shipment. Our commitment to 
                excellence has made us the trusted choice for dealerships, manufacturers, 
                and businesses nationwide.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Industry Leaders</h4>
                  <p className="text-gray-300 text-sm">Setting standards in logistics excellence</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Expert Team</h4>
                  <p className="text-gray-300 text-sm">Professional drivers and logistics specialists</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Proven Results</h4>
                  <p className="text-gray-300 text-sm">Consistent on-time delivery performance</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">24/7 Service</h4>
                  <p className="text-gray-300 text-sm">Round-the-clock support and monitoring</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  To provide reliable, safe, and efficient transportation solutions that exceed 
                  our clients' expectations while maintaining the highest standards of 
                  professionalism and integrity.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-400 mr-3" />
                    Safety first in every operation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-400 mr-3" />
                    Reliability you can count on
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-400 mr-3" />
                    Transparency in all communications
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-400 mr-3" />
                    Innovation in logistics solutions
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
