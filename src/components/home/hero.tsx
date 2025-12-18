import { Link } from "react-router-dom";
import BlurFade from "../shared/blur-fade";
import { Button } from "../ui/button";

export const Hero = () => {
  return (
    <div className="w-full h-full bg-bg">
      <div className="w-full flex flex-col md:flex-row min-h-svh md:min-h-lvh hero-bg">
        {/* Main Content Container */}
        <div className="w-full md:w-[80%] px-6 md:pl-14 2xl:pl-64 flex items-center justify-center min-h-svh md:min-h-0 mt-4 md:mt-2">
          <div className="w-full flex flex-col items-center md:items-start justify-center space-y-5 md:space-y-6 py-8 md:py-0">
            <BlurFade delay={0.2} inView>
              <h1 className="text-[12px] md:text-lg w-full leading-6 md:leading-[68px] tracking-wide text-white font-manrope text-center md:text-left">
                Smart Search &nbsp; | &nbsp; Verified Listings &nbsp; | &nbsp;
                Secure Docs
              </h1>
            </BlurFade>

            <BlurFade delay={0.2} inView>
              <h1 className="text-2xl md:text-4xl capitalize lg:text-5xl font-medium w-full leading-7 text-center md:text-left md:leading-[70px] tracking-wide text-white font-spaceGrotesk">
                Find the right commercial <br /> property faster & with
                confidence
              </h1>
            </BlurFade>

            <BlurFade delay={0.25} inView>
              <p className="w-full text-white mt-4 md:mt-0 text-center md:text-left md:w-[80%] text-base md:text-[1.1rem] leading-6 md:leading-[30px] font-manrope">
                PropTryx brings verified listings, smart search filters, secure
                document access and immersive tours into a single platform that
                helps occupiers, owners and developers make decisions with
                clarity.
              </p>
            </BlurFade>

            <BlurFade delay={0.3} inView>
              <div className="w-full flex justify-center md:justify-start">
                <Link to="https://app.proptryx.com" target="_blank">
                  <Button className="hover:opacity-90 transition mt-2 md:mt-4 text-base md:text-lg px-8">
                    Request Demo
                  </Button>
                </Link>
              </div>
            </BlurFade>
          </div>
        </div>

        {/* Scroll Down Indicator - Desktop Only */}
        <div className="hidden md:block md:absolute bottom-[8%] right-[4%] 2xl:right-[18%] text-white">
          <BlurFade delay={0.4} inView>
            <div
              className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity"
              role="button"
              tabIndex={0}
              onClick={() => window.scrollBy({ top: 200, behavior: "smooth" })}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  window.scrollBy({ top: 200, behavior: "smooth" });
                }
              }}
              aria-label="Scroll down"
            >
              <img
                src={"/home/scroll-down.svg"}
                alt="Scroll down indicator"
                loading="lazy"
                className="w-12 md:w-16"
              />
              <h1 className="text-sm font-normal font-manrope">Scroll Down</h1>
            </div>
          </BlurFade>
        </div>
      </div>
    </div>
  );
};
