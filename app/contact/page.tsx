import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ContactForm } from "@/components/sections/contact/contact-form";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ContactForm />
      <Footer />
    </main>
  );
}
