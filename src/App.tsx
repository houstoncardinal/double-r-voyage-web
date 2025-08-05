import { Helmet, HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useScrollToTop } from "./hooks/useScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { AutoTransport } from "./pages/services/AutoTransport";
import { HazmatTransportation } from "./pages/services/HazmatTransportation";
import { FlatbedHauling } from "./pages/services/FlatbedHauling";
import { DryVanLogistics } from "./pages/services/DryVanLogistics";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import DOTCompliance from "./pages/DOTCompliance";
import GetAQuote from "./pages/GetAQuote";

const queryClient = new QueryClient();

const ScrollToTopWrapper = () => {
  useScrollToTop();
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <Helmet>
        <title>Double R Transportation - Premium Logistics & Auto Transport Services</title>
        <meta name="description" content="Double R Transportation provides premium auto transport from ports, hazmat transportation, flatbed hauling, and dry van logistics nationwide. Call (832) 282-3128 for a quote." />
        <meta name="keywords" content="auto transport, port logistics, hazmat transportation, flatbed hauling, dry van, freight transport, logistics, Houston transportation" />
        <meta name="author" content="Double R Transportation LLC" />
        <meta property="og:title" content="Double R Transportation - Premium Logistics Solutions" />
        <meta property="og:description" content="Driven by Precision. Delivered with Power. Premium transportation solutions from major ports nationwide." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.doublertransportationllc.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@doublerrtransport" />
        <link rel="canonical" href="https://www.doublertransportationllc.com" />
      </Helmet>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTopWrapper />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/auto-transport" element={<AutoTransport />} />
            <Route path="/services/hazmat-transportation" element={<HazmatTransportation />} />
            <Route path="/services/flatbed-hauling" element={<FlatbedHauling />} />
            <Route path="/services/dry-van-logistics" element={<DryVanLogistics />} />
            <Route path="/get-a-quote" element={<GetAQuote />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/dot-compliance" element={<DOTCompliance />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
