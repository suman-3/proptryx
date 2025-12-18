import { Hero } from "../components/home/hero";
import { WhyChooseUs } from "../components/home/why-choose-us";
import { CtaSection } from "../components/shared/call-to-action";
import { FaqSection } from "../components/shared/faq";
import { MaxWrapper } from "../components/shared/max-wrapper";

function Home() {
  return (
    <MaxWrapper>
      <Hero />
      <WhyChooseUs />
      <CtaSection />
      <FaqSection />
    </MaxWrapper>
  );
}

export default Home;
