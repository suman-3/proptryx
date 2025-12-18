import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { FaqData } from "../../constants/faq-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export function FaqSection() {
  return (
    <div
      id="faq"
      className="w-full h-full mt-2 py-4 md:py-10 px-6 md:px-14 2xl:px-64 flex flex-col md:flex-row md:gap-8 lg:gap-12"
    >
      {/* Left Column - Header & CTA */}
      <div className="w-full md:w-[45%] lg:w-[40%] flex flex-col items-start gap-3 md:gap-4 mb-6 md:mb-0 md:sticky md:top-24 md:self-start">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-black font-medium font-spaceGrotesk leading-tight md:leading-snug">
          Frequently Asked <br /> Questions
        </h1>

        <p className="text-sm md:text-base lg:text-[17px] text-dull md:tracking-wide w-full md:w-[90%] font-manrope leading-relaxed">
          Everything you need to know about PropTryx
        </p>

        <Link to="/contact" className="mt-2 md:mt-4 w-full">
          <Button
            className="flex items-center gap-2 px-6 w-full md:w-fit"
            size="default"
            variant="black"
          >
            Contact Us
          </Button>
        </Link>
      </div>

      {/* Right Column - Accordion */}
      <div className="w-full md:w-[55%] lg:w-[60%] h-full flex items-start justify-center flex-col">
        <Accordion type="single" collapsible className="w-full space-y-2">
          {FaqData.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-neutral-200 rounded-xs px-4 md:px-5 transition-all"
            >
              <AccordionTrigger className="text-left text-sm md:text-base lg:text-md font-spaceGrotesk py-4 md:py-5 hover:no-underline">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base text-dull font-manrope leading-relaxed md:tracking-wide pb-4">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
