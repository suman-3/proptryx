import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export const CtaSection = () => {
  return (
    <div className="w-full h-full bg-transparent flex flex-col items-center justify-start relative overflow-hidden py-8 md:py-10 max-w-screen-2xl mx-auto px-4 md:px-14 2xl:px-64 md:mb-6">
      <div className="w-full bg-gray z-10 relative rounded-xs px-4 md:px-16 py-8 md:py-12 min-h-[280px] md:min-h-[300px] flex items-center justify-center">
        <div className="flex flex-col items-center justify-center w-full gap-4 md:gap-5 max-w-4xl">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-black font-medium font-spaceGrotesk text-center leading-tight md:leading-snug">
            Try our platform today!
          </h1>

          <p className="text-sm md:text-base lg:text-[17px] text-dull md:tracking-wide w-full md:w-[85%] lg:w-[85%] text-center font-manrope leading-relaxed md:leading-normal">
            PropTryx brings verified listings, smart search filters, secure
            document access and immersive tours into a single platform that
            helps occupiers, owners and developers make decisions with clarity.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 w-full sm:w-auto mt-2 md:mt-0">
            <Link to="/demo" className="w-full sm:w-auto">
              <Button
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 md:px-8"
                size="default"
                variant="secondary"
              >
                Request Demo
              </Button>
            </Link>

            <Link to="/contact" className="w-full sm:w-auto">
              <Button
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 md:px-8"
                size="default"
                variant="black"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
