// src/app/integrations/page.tsx
import Header from "../../../components/Header";
import Footer from "../../../components/footer";
import SupportedIntegrations from "../../../components/SupportedIntegrations";
import IntegrationHowItWorks from "../../../components/IntegrationHowItWorks";
import ComingSoonIntegrations from "../../../components/ComingSoonIntegrations";

export default function IntegrationsPage() {
  return (
    <>
      <Header />
      <main className="relative z-10">
        <SupportedIntegrations/>
        <IntegrationHowItWorks/>
        <ComingSoonIntegrations/>
      </main>
      <Footer />
    </>
  );
}
