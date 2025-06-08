import React from "react";
import kaaba from "../assets/islamic/kaaba_tawaf.jpg";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 ">
      <Header />
      <Hero
        title="منصة جو عمرة"
        description="خدمتكم... شرف وأجر"
        image={kaaba}
      />

      <Services />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Home;
