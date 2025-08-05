
import React, { Suspense, lazy } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useScrollToTop } from "./hooks/useScrollToTop";
import { CompactMobileToolbar } from "./components/CompactMobileToolbar";
import { OptimizedLoadingSpinner } from "./components/OptimizedLoadingSpinner";

// Lazy load pages with better chunking
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const GetAQuote = lazy(() => import("./pages/GetAQuote"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const DOTCompliance = lazy(() => import("./pages/DOTCompliance"));

// Service pages with better loading
const AutoTransport = lazy(() => 
  import("./pages/services/AutoTransport").then(module => ({ 
    default: module.AutoTransport 
  }))
);
const HazmatTransportation = lazy(() => 
  import("./pages/services/HazmatTransportation").then(module => ({ 
    default: module.HazmatTransportation 
  }))
);
const FlatbedHauling = lazy(() => 
  import("./pages/services/FlatbedHauling").then(module => ({ 
    default: module.FlatbedHauling 
  }))
);
const DryVanLogistics = lazy(() => 
  import("./pages/services/DryVanLogistics").then(module => ({ 
    default: module.DryVanLogistics 
  }))
);

// Optimized QueryClient with better defaults
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * 60 * 1000, // 10 minutes
      gcTime: 15 * 60 * 1000, // 15 minutes
      refetchOnWindowFocus: false,
      retry: (failureCount, error) => failureCount < 2,
      retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
    },
  },
});

// Memoized scroll wrapper
const ScrollToTopWrapper = React.memo(() => {
  useScrollToTop();
  return null;
});
ScrollToTopWrapper.displayName = 'ScrollToTopWrapper';

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
        
        {/* Preload critical fonts */}
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" as="style" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&display=swap" as="style" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </Helmet>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTopWrapper />
          <Suspense fallback={<OptimizedLoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/get-a-quote" element={<GetAQuote />} />
              <Route path="/services/auto-transport" element={<AutoTransport />} />
              <Route path="/services/hazmat-transportation" element={<HazmatTransportation />} />
              <Route path="/services/flatbed-hauling" element={<FlatbedHauling />} />
              <Route path="/services/dry-van-logistics" element={<DryVanLogistics />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/dot-compliance" element={<DOTCompliance />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <CompactMobileToolbar />
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
