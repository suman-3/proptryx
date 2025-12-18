import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export const CtaSection = () => {
  return (
    <div className="w-full h-full bg-transparent flex flex-col space-y-6 items-center justify-start relative overflow-hidden py-8 md:py-10 max-w-screen-2xl mx-auto px-6 md:px-14 2xl:px-64">
      <div className="w-full bg-gray z-10 relative px-4 md:px-16 h-[160px] md:h-[300px] object-contain">
        <div className="absolute top-4 md:top-12 left-0 flex flex-col items-center justify-center w-full md:gap-3 mt-2 md:mt-4">
          <h1 className="text-[14px] md:text-4xl text-black font-medium font-spaceGrotesk text-center">
            Try our platform today!
          </h1>
          <p className="text-[14px] hidden md:inline-block md:text-[17px] text-dull md:tracking-wide w-full md:w-[80%] text-center font-manrope">
            PropTryx brings verified listings, smart search filters, secure
            document access and immersive tours into a single platform that
            helps occupiers, owners and developers make decisions with clarity.
          </p>
          <div className="flex items-center gap-4 md:gap-6">
            <Link to="/demo">
              <Button
                className="flex items-center gap-1 mt-4"
                size="sm"
                variant={"secondary"}
              >
                Request Demo
              </Button>
            </Link>
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
        </div>
      </div>
    </div>
  );
};
