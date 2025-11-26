import Header from "../../../components/Header";
import CompanyOverview from "../../../components/CompanyOverview";
import MissionSection from "../../../components/MissionSection";
import TeamSection from "../../../components/TeamSection";
import ValuesSection from "../../../components/ValuesSection";
import Footer from "../../../components/footer";

export default function AboutPage() {
  return (
    <>
    <Header/>
    <main className="relative z-10">
      <CompanyOverview />
      <MissionSection />
      <TeamSection />
      <ValuesSection />
      </main>
      <Footer/>
    </>
  );
}
