import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Shield, CheckCircle, FileText, Clock } from "lucide-react";

export default function DOTCompliance() {
  return (
    <>
      <Helmet>
        <title>DOT Compliance - Double R Transportation LLC</title>
        <meta name="description" content="Department of Transportation compliance information for Double R Transportation LLC - Our commitment to safety and regulatory standards." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="flex items-center mb-8">
              <Shield className="h-12 w-12 text-blue-600 mr-4" />
              <div>
                <h1 className="text-4xl font-bold text-gray-900">DOT Compliance</h1>
                <p className="text-gray-600">Department of Transportation Standards & Safety</p>
              </div>
            </div>
            
            <div className="space-y-8 text-gray-700">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">DOT Number & Certification</h2>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold text-blue-900">DOT Number:</p>
                      <p className="text-blue-800">Available upon request</p>
                    </div>
                    <div>
                      <p className="font-semibold text-blue-900">MC Number:</p>
                      <p className="text-blue-800">Available upon request</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Safety Standards</h2>
                <p className="mb-4">
                  Double R Transportation LLC maintains the highest safety standards in compliance with DOT regulations:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Driver Qualification</h3>
                      <p className="text-gray-600">All drivers undergo comprehensive background checks and maintain current CDL certifications</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Vehicle Maintenance</h3>
                      <p className="text-gray-600">Regular inspections and preventive maintenance programs ensure vehicle safety</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Hours of Service</h3>
                      <p className="text-gray-600">Strict compliance with federal hours of service regulations using electronic logging devices</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Drug & Alcohol Testing</h3>
                      <p className="text-gray-600">Comprehensive testing program in accordance with DOT requirements</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hazmat Certification</h2>
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex items-start space-x-3">
                    <Shield className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-red-900">EPA & DOT Hazmat Authorization</h3>
                      <p className="text-red-800">
                        Our drivers hold current hazmat endorsements and our company maintains all required certifications for the safe transportation of hazardous materials.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Insurance & Bonding</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <FileText className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Cargo Insurance</h3>
                      <p className="text-gray-600">$1,000,000 cargo coverage</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FileText className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Liability Insurance</h3>
                      <p className="text-gray-600">Full DOT required liability coverage</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FileText className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Environmental Coverage</h3>
                      <p className="text-gray-600">Specialized environmental liability for hazmat transport</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FileText className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Surety Bond</h3>
                      <p className="text-gray-600">BMC-84 freight broker bond on file</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact for Compliance Documentation</h2>
                <p className="mb-4">
                  For verification of our compliance documentation or to request certificates of insurance:
                </p>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-semibold">Double R Transportation LLC</p>
                  <p>Phone: (832) 282-3128</p>
                  <p>Email: info@doublerransport.com</p>
                  <div className="mt-4 flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>Compliance documentation available 24/7 upon request</span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}