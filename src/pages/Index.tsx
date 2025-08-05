
import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Double R Transportation - Premium Auto Transport & Logistics | Houston</title>
        <meta name="description" content="Double R Transportation provides premium auto transport from ports, hazmat transportation, flatbed hauling, and dry van logistics nationwide. Based in Houston with 24/7 service. Call (832) 282-3128." />
        <meta name="keywords" content="auto transport Houston, port logistics, hazmat transportation, flatbed hauling, dry van logistics, vehicle shipping, freight transport, Houston transportation company" />
        <meta property="og:title" content="Double R Transportation - Premium Auto Transport & Logistics" />
        <meta property="og:description" content="Premium auto transport from ports, hazmat transportation, flatbed hauling, and dry van logistics nationwide. 24/7 service from Houston." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://doublerransport.com" />
        <link rel="canonical" href="https://doublerransport.com" />
      </Helmet>
      
      <div className="min-h-screen">
        <Navigation />
        <div id="home">
          <Hero />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Index;
