import { Link } from "react-router-dom";
import BlurFade from "../shared/blur-fade";
import { Button } from "../ui/button";

export const Hero = () => {
  return (
    <div className="w-full h-full bg-bg">
      <div className="w-full flex flex-col md:flex-row min-h-svh md:min-h-lvh about-bg">
        <div className="w-full md:w-[80%] px-6 md:pl-14 2xl:pl-64 flex items-center justify-center min-h-svh md:min-h-0">
          <div className="w-full flex flex-col items-start justify-center space-y-4 md:space-y-5 py-8 md:py-0">
            {/* Badge */}
            <BlurFade delay={0.2} inView>
              <h1 className="text-xs md:text-sm border border-white/30 mb-1 md:mb-2 rounded-full bg-white/20 px-3 md:px-4 py-1.5 md:py-1 w-fit backdrop-blur-md tracking-wide text-white font-manrope">
                Who we are
              </h1>
            </BlurFade>

            {/* Main Heading */}
            <BlurFade delay={0.2} inView>
              <h1 className="text-2xl md:text-4xl capitalize lg:text-5xl font-medium w-full leading-8 md:leading-[60px] lg:leading-[70px] tracking-wide text-white font-spaceGrotesk">
                Making commercial property discovery{" "}
                <br className="hidden md:block" />
                clear, fast & confident
              </h1>
            </BlurFade>

            {/* Description */}
            <BlurFade delay={0.25} inView>
              <p className="w-full text-white md:w-[85%] lg:w-[80%] text-sm md:text-base lg:text-[1.1rem] leading-6 md:leading-7 lg:leading-[30px] font-manrope">
                PropTryx brings occupiers, tenants, developers and property
                owners into a single trusted platform — helping you explore
                properties, compare locations and review documents without
                noise.
              </p>
            </BlurFade>

            {/* Button Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4 w-full sm:w-auto pt-2 md:pt-0">
              <BlurFade delay={0.3} inView className="w-full sm:w-auto">
                <Link
                  to="https://www.proptryx.app"
                  target="_blank"
                  className="w-full sm:w-auto block"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto hover:opacity-90 transition text-sm md:text-base lg:text-lg px-6 md:px-8"
                  >
                    Request Demo
                  </Button>
                </Link>
              </BlurFade>

              <BlurFade delay={0.3} inView className="w-full sm:w-auto">
                <Link to={"/contact"} className="w-full sm:w-auto block">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto hover:opacity-90 hover:bg-white/10 transition text-sm md:text-base lg:text-lg px-6 md:px-8 border-white text-white"
                  >
                    Contact Us
                  </Button>
                </Link>
              </BlurFade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
