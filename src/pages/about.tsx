import { ForOwners } from "../components/about/for-owners";
import { Hero } from "../components/about/hero";
import { CtaSection } from "../components/shared/call-to-action";
import { GlobalSection } from "../components/shared/global-section";
import { MaxWrapper } from "../components/shared/max-wrapper";

function About() {
  return (
    <MaxWrapper>
      <Hero />
      <ForOwners />
      {/* <GlobalSection
        bgReverted
        title="About Us"
        description="PropTryx is a digital platform that makes discovering and evaluating commercial properties smarter and effortlessly clear. It brings real estate stakeholders such as occupiers, tenants, developers and property owners, in one reliable space where you can explore properties, compare locations, and review essential documents with clarity."
        image="/about/sections/1.png"
        flexDirection="flex-col md:flex-row-reverse"
      />
      <GlobalSection
        title="What We Do"
        description="PropTryx streamlines the journey for both property developers and occupiers, with smart search tools, verified listings, secure document access and immersive virtual tours."
        image="/about/sections/2.png"
        flexDirection="flex-col md:flex-row"
      /> */}
      <GlobalSection
        bgReverted
        title="How We Do It"
        description="By eliminating delays, miscommunication and hierarchy of middlemen, our platform offers a smoother, tech-driven process that helps you explore, assess and select commercial spaces with greater ease."
        image="/about/sections/3.png"
        flexDirection="flex-col md:flex-row-reverse"
      />
      <div className="w-full h-full flex flex-col mt-2 py-6 md:py-14 2xl:px-64">
        <img
          src="/about/sections/step-lg.svg"
          alt="steps"
          className="w-[85%] mx-auto pointer-events-none select-none hidden lg:block"
        />
        <img
          src="/about/sections/step-sm.svg"
          alt="steps"
          className="w-[90%] mx-auto pointer-events-none select-none lg:hidden mb-4"
        />
      </div>
      <GlobalSection
        bgReverted
        title="Our Mission"
        description="To empower customers with relevant information and clear insights through technology, ensuring a seamless and more confident commercial property experience."
        image="/about/sections/4.png"
        flexDirection="flex-col md:flex-row-reverse"
      />
      <GlobalSection
        title="Our Vision"
        description="To build a forward-looking organisation that embraces innovation and delivers consistent excellence across the commercial real estate arena."
        image="/about/sections/5.png"
        flexDirection="flex-col md:flex-row"
      />
      <CtaSection />
    </MaxWrapper>
  );
}

export default About;
