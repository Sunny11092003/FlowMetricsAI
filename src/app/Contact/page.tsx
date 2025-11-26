import ContactForm from "../../../components/ContactForm";
import Header from "../../../components/Header";
import Footer from "../../../components/footer";

export default function ContactPage() {
  return (
    <>
    <Header/>
    <main className="min-h-screen bg-gray-50">
      <ContactForm />
    </main>
    <Footer/>
    </>
  );
}
