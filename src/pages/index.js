import React from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Innovation from "../components/home/Innovation";
import Specialists from "../components/home/Specialists";
import Reviews from "../components/home/Reviews";
import Newsletter from "../components/home/Newsletter";

export default function Home() {
  return (
    <main className="overflow-hidden">

      <Navbar />

      <Hero />

      <Services />

      <Innovation />

      <Specialists />

      <Reviews />

      <Newsletter />

      <Footer />

    </main>
  );
}