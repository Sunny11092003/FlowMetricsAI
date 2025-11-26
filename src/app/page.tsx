import Header from "../../components/Header";
import Hero from "../../components/hero";
import ProblemSection from "../../components/Problem";
import ProductPreviewsection from "../../components/ProductPreview";
import Solutionsection from "../../components/Solution";
import Footer from "../../components/footer";
import SocialProofSection from "../../components/SocialProofSection";
import IntegrationsSection from "../../components/IntegrationsSection";
import ROICalculator from "../../components/ROICalculator";

export default function Home() {
  return (
    <>

      <Header />
        <main className="relative z-10">
        <Hero />
        <ProblemSection />
         <Solutionsection/>
        <ProductPreviewsection/>
        <ROICalculator/>
        <SocialProofSection/>
        <IntegrationsSection/>
        <Footer/>
         </main>   
    </>
  );
}
