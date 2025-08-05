
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
        <title>Double R Transportation - Houston Auto Transport & Logistics Services</title>
        <meta name="description" content="Double R Transportation provides premium auto transport, hazmat shipping, flatbed hauling, and freight logistics in Houston, TX and nationwide. Licensed, insured, GPS tracking. Call (832) 282-3128." />
        <meta name="keywords" content="Houston auto transport, Houston car shipping, Houston freight logistics, Houston hazmat transportation, Houston flatbed hauling, Texas auto transport, vehicle shipping Houston, car transport Houston" />
        <meta property="og:title" content="Double R Transportation - Houston Auto Transport & Logistics Services" />
        <meta property="og:description" content="Houston's trusted auto transport and logistics company. Premium vehicle shipping, hazmat transportation, flatbed hauling nationwide. Licensed, insured, GPS tracking." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://doublerransport.com" />
        <meta name="geo.region" content="US-TX" />
        <meta name="geo.placename" content="Houston, Texas" />
        <meta name="geo.position" content="29.7604;-95.3698" />
        <meta name="ICBM" content="29.7604, -95.3698" />
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
