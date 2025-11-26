"use client";

import Header from "../../../components/Header";
import ProductOverview from "../../../components/ProductOverview";
import HowItWorks from "../../../components/HowItWorks";
import Footer from "../../../components/footer";
import PersonaFeatures from "../../../components/PersonaFeatures";
import CoreFeatures from "../../../components/CoreFeatures";
import ProductDemo from "../../../components/ProductDemo";

export default function ProductPage() {
  return (
    <>
      <Header />

      <main className="relative z-10">
        <ProductOverview />
        <HowItWorks/>
        <CoreFeatures/>
        <PersonaFeatures/>
        <ProductDemo/>
      </main>

      <Footer />
    </>
  );
}
