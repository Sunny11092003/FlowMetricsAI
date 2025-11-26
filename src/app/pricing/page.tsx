// src/app/pricing/page.tsx
"use client";

import Header from "../../../components/Header";
import Footer from "../../../components/footer";
import PricingPlans from "../../../components/PricingPlans";
import FeatureComparisonTable from "../../../components/FeatureComparisonTable";
import PlanSelector from "../../../components/PlanSelector";
import PricingCTA from "../../../components/PricingCTA";

export default function PricingPage() {
  return (
    <>
      <Header />

      <main className="relative z-10">
        {/* Pricing Plans */}
        <PricingPlans />
        <FeatureComparisonTable/>
        <PlanSelector/>
        <PricingCTA/>
      </main>

      <Footer />
    </>
  );
}
