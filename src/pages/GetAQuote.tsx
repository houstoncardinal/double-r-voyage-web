import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Truck, Shield, Package, Zap, Clock, CheckCircle, Phone, Mail, Calculator, Sparkles } from "lucide-react";
import { useState } from "react";

export default function GetAQuote() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "",
    pickupLocation: "",
    deliveryLocation: "",
    pickupDate: "",
    deliveryDate: "",
    cargoType: "",
    weight: "",
    dimensions: "",
    value: "",
    specialRequirements: "",
    insurance: false,
    tracking: false,
    expedited: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend or email service
    console.log("Quote request submitted:", formData);
    alert("Thank you! Your quote request has been submitted. We'll contact you within 24 hours.");
  };

  const services = [
    { value: "auto-transport", label: "Auto Transport", icon: Truck, color: "blue" },
    { value: "hazmat", label: "Hazmat Transportation", icon: Shield, color: "red" },
    { value: "flatbed", label: "Flatbed Hauling", icon: Package, color: "green" },
    { value: "dry-van", label: "Dry Van Logistics", icon: Zap, color: "purple" },
  ];

  return (
    <>
      <Helmet>
        <title>Get A Quote - Double R Transportation LLC</title>
        <meta name="description" content="Get a free quote for premium transportation services from Double R Transportation. Auto transport, hazmat shipping, flatbed hauling, and logistics solutions nationwide." />
        <meta name="keywords" content="transportation quote, auto transport quote, Houston shipping quote, hazmat transport quote, flatbed hauling quote, logistics quote" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-8">
              <Calculator className="h-5 w-5 mr-2" />
              <span className="font-semibold">Free Quote Calculator</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Get A Quote</h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              Professional transportation services tailored to your needs. Get your custom quote in minutes.
            </p>
            <div className="flex items-center justify-center space-x-8 text-lg">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>24-Hour Response</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Free & No Obligation</span>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
          <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold text-gray-900">Request Your Custom Quote</CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Fill out the form below and our transportation experts will provide you with a detailed quote within 24 hours.
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Information */}
                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-blue-600" />
                    Contact Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>
                </section>

                {/* Service Selection */}
                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Truck className="h-5 w-5 mr-2 text-blue-600" />
                    Service Type
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {services.map((service) => {
                      const Icon = service.icon;
                      const isSelected = formData.serviceType === service.value;
                      
                      const colorClasses = {
                        blue: {
                          border: isSelected ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300",
                          icon: "bg-gradient-to-br from-blue-600 to-blue-700"
                        },
                        red: {
                          border: isSelected ? "border-red-500 bg-red-50" : "border-gray-200 hover:border-gray-300",
                          icon: "bg-gradient-to-br from-red-600 to-red-700"
                        },
                        green: {
                          border: isSelected ? "border-green-500 bg-green-50" : "border-gray-200 hover:border-gray-300",
                          icon: "bg-gradient-to-br from-green-600 to-green-700"
                        },
                        purple: {
                          border: isSelected ? "border-purple-500 bg-purple-50" : "border-gray-200 hover:border-gray-300",
                          icon: "bg-gradient-to-br from-purple-600 to-purple-700"
                        }
                      };
                      
                      return (
                        <div
                          key={service.value}
                          className={`cursor-pointer p-4 rounded-xl border-2 transition-all duration-300 ${colorClasses[service.color as keyof typeof colorClasses].border}`}
                          onClick={() => handleInputChange("serviceType", service.value)}
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`w-10 h-10 ${colorClasses[service.color as keyof typeof colorClasses].icon} rounded-lg flex items-center justify-center`}>
                              <Icon className="h-5 w-5 text-white" />
                            </div>
                            <span className="font-semibold text-gray-900">{service.label}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* Location & Schedule */}
                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Location & Schedule</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="pickupLocation">Pickup Location *</Label>
                      <Input
                        id="pickupLocation"
                        value={formData.pickupLocation}
                        onChange={(e) => handleInputChange("pickupLocation", e.target.value)}
                        placeholder="City, State or ZIP"
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="deliveryLocation">Delivery Location *</Label>
                      <Input
                        id="deliveryLocation"
                        value={formData.deliveryLocation}
                        onChange={(e) => handleInputChange("deliveryLocation", e.target.value)}
                        placeholder="City, State or ZIP"
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="pickupDate">Preferred Pickup Date</Label>
                      <Input
                        id="pickupDate"
                        type="date"
                        value={formData.pickupDate}
                        onChange={(e) => handleInputChange("pickupDate", e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="deliveryDate">Required Delivery Date</Label>
                      <Input
                        id="deliveryDate"
                        type="date"
                        value={formData.deliveryDate}
                        onChange={(e) => handleInputChange("deliveryDate", e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>
                </section>

                {/* Cargo Details */}
                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Cargo Details</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="cargoType">Cargo Type/Description *</Label>
                      <Input
                        id="cargoType"
                        value={formData.cargoType}
                        onChange={(e) => handleInputChange("cargoType", e.target.value)}
                        placeholder="e.g., Vehicle make/model, Equipment type"
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="weight">Weight (lbs)</Label>
                      <Input
                        id="weight"
                        type="number"
                        value={formData.weight}
                        onChange={(e) => handleInputChange("weight", e.target.value)}
                        placeholder="Approximate weight"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="dimensions">Dimensions (L×W×H)</Label>
                      <Input
                        id="dimensions"
                        value={formData.dimensions}
                        onChange={(e) => handleInputChange("dimensions", e.target.value)}
                        placeholder="e.g., 20×8×8 ft"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="value">Cargo Value ($)</Label>
                      <Input
                        id="value"
                        type="number"
                        value={formData.value}
                        onChange={(e) => handleInputChange("value", e.target.value)}
                        placeholder="For insurance purposes"
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <Label htmlFor="specialRequirements">Special Requirements</Label>
                    <Textarea
                      id="specialRequirements"
                      value={formData.specialRequirements}
                      onChange={(e) => handleInputChange("specialRequirements", e.target.value)}
                      placeholder="Any special handling, permits, or requirements..."
                      className="mt-1"
                      rows={3}
                    />
                  </div>
                </section>

                {/* Additional Services */}
                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Additional Services</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="insurance"
                        checked={formData.insurance}
                        onCheckedChange={(checked) => handleInputChange("insurance", checked as boolean)}
                      />
                      <Label htmlFor="insurance" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Additional Cargo Insurance
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="tracking"
                        checked={formData.tracking}
                        onCheckedChange={(checked) => handleInputChange("tracking", checked as boolean)}
                      />
                      <Label htmlFor="tracking" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Real-time GPS Tracking
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="expedited"
                        checked={formData.expedited}
                        onCheckedChange={(checked) => handleInputChange("expedited", checked as boolean)}
                      />
                      <Label htmlFor="expedited" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Expedited Service
                      </Label>
                    </div>
                  </div>
                </section>

                {/* Submit Button */}
                <div className="text-center pt-8">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-12 py-4 text-lg rounded-xl luxury-shadow-xl hover:luxury-shadow-2xl transition-all duration-500 group font-semibold tracking-wide"
                  >
                    <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-500" />
                    Get My Quote
                    <Calculator className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform duration-500" />
                  </Button>
                  <p className="text-gray-600 text-sm mt-4">
                    By submitting this form, you agree to be contacted by our team regarding your quote request.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Need Help with Your Quote?</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="tel:8322823128" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
                <Phone className="h-5 w-5" />
                <span className="font-semibold">(832) 282-3128</span>
              </a>
              <a href="mailto:info@doublerransport.com" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
                <Mail className="h-5 w-5" />
                <span className="font-semibold">info@doublerransport.com</span>
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}