import ContactHero from "@/components/sections/ContactHero";
import ContactForm from "@/components/sections/ContactForm";

export const metadata = {
  title: "Contact - Mahran",
  description:
    "Get in touch with Mohamed Mahran for collaboration, opportunities, or inquiries.",
};

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactForm />
    </>
  );
}
