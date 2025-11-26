import Header from "../../../components/Header";
import GuidesSection from "../../../components/GuidesSection";
import TemplatesSection from "../../../components/TemplatesSection";
import WebinarsSection from "../../../components/WebinarsSection";
import CaseStudiesSection from "../../../components/CaseStudiesSection";
import CompetitiveComparison from "../../../components/CompetitiveComparison";
import Footer from "../../../components/footer";

export default function ResourcesPage() {
  return (
    <>
    <Header/>
    <main className="pt-24">
      {/* Sections */}
      <GuidesSection />
      <TemplatesSection />
      <WebinarsSection />
      <CaseStudiesSection />
      <CompetitiveComparison />

      <div className="h-20" />
    </main>
    <Footer/>
    </>
    
  );
}
