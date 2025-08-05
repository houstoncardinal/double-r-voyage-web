import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Double R Transportation LLC</title>
        <meta name="description" content="Terms of Service for Double R Transportation LLC - Understanding our service agreements and policies." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
            <p className="text-gray-600 mb-8">Effective Date: January 1, 2025</p>
            
            <div className="space-y-8 text-gray-700">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Agreement</h2>
                <p className="mb-4">
                  By using Double R Transportation LLC services, you agree to these terms and conditions. Our transportation services are subject to the following terms:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Services are provided subject to availability and scheduling</li>
                  <li>All shipments must comply with DOT and EPA regulations</li>
                  <li>Accurate information must be provided for all shipments</li>
                  <li>Payment terms are net 30 days unless otherwise agreed</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Liability and Insurance</h2>
                <p className="mb-4">
                  Double R Transportation LLC maintains comprehensive insurance coverage including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Cargo insurance up to $1,000,000 per incident</li>
                  <li>General liability insurance</li>
                  <li>Auto liability insurance as required by DOT</li>
                  <li>Environmental liability for hazmat transportation</li>
                </ul>
                <p className="mt-4">
                  Liability is limited to the declared value of the shipment or actual cash value, whichever is less.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prohibited Items</h2>
                <p className="mb-4">The following items are prohibited from transportation:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Illegal substances or contraband</li>
                  <li>Hazardous materials without proper certification</li>
                  <li>Items exceeding weight or size limitations</li>
                  <li>Perishable goods without proper arrangements</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cancellation Policy</h2>
                <p>
                  Cancellations must be made at least 24 hours in advance. Late cancellations may be subject to fees. Emergency cancellations will be handled on a case-by-case basis.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Dispute Resolution</h2>
                <p>
                  Any disputes arising from our services will be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
                <p>
                  For questions about these terms or our services, please contact us:
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="font-semibold">Double R Transportation LLC</p>
                  <p>Phone: (832) 282-3128</p>
                  <p>Email: info@doublertransportationllc.com</p>
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