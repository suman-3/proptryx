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
      className="w-full h-full mt-2 py-6 px-6 md:px-14 2xl:px-64 flex flex-col md:flex-row md:justify-between"
    >
      <div className="w-full md:w-1/2 flex flex-col items-start gap-4 mt-4">
        <h1 className="text-[14px] md:text-4xl text-black font-medium font-spaceGrotesk">
          Frequently Asked <br /> Questions
        </h1>
        <p className="text-[14px] hidden md:inline-block md:text-[17px] text-dull md:tracking-wide w-full md:w-[80%] font-manrope">
          Everything you need to know about PropTryx
        </p>
        <Link to="/contact">
          <Button
            className="flex items-center gap-1 mt-4"
            size="sm"
            variant={"black"}
          >
            Contact Us
          </Button>
        </Link>
      </div>
      <div className="w-[92%] md:w-[60%] h-full flex items-center justify-center flex-col pb-4 md:pb-6">
        <Accordion type="single" collapsible className="w-full">
          {FaqData.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-md font-spaceGrotesk">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-dull font-manrope tracking-wide">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
