import { ContactForm } from "../components/contact/contact-us-form";
import { FaqSection } from "../components/shared/faq";
import { MaxWrapper } from "../components/shared/max-wrapper";

function Contact() {
  return (
    <MaxWrapper>
      <ContactForm />
      <FaqSection />
    </MaxWrapper>
  );
}

export default Contact;
