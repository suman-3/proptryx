import { Link } from "react-router-dom";
import BlurFade from "../shared/blur-fade";
import { Button } from "../ui/button";

export const Hero = () => {
  return (
    <div className="w-full h-full bg-bg">
      <div className="w-full flex flex-col md:flex-row min-h-svh md:min-h-lvh hero-bg">
        <div className="w-full md:w-[80%] px-6 md:pl-14 2xl:pl-64 mt-4">
          <div className="w-full flex flex-col items-start justify-center h-full space-y-2 md:space-y-6">
            <BlurFade delay={0.2} inView>
              <h1 className="text-sm md:text-lg w-full leading-10 md:leading-[68px] tracking-wide text-white font-manrope">
                Smart Search &nbsp; | &nbsp; Verified Listings &nbsp; | &nbsp;
                Secure Docs
              </h1>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <h1 className="text-xl md:text-4xl capitalize lg:text-5xl font-medium w-full leading-9 md:leading-[70px] tracking-wide mb-2 text-white font-spaceGrotesk">
                Find the right commercial <br /> property faster & with
                confidence
              </h1>
            </BlurFade>
            <BlurFade delay={0.25} inView>
              <p className="w-full text-white md:w-[80%] text-md md:text-[1.1rem] leading-5 md:leading-[30px] font-manrope">
                PropTryx brings verified listings, smart search filters, secure
                document access and immersive tours into a single platform that
                helps occupiers, owners and developers make decisions with
                clarity.
              </p>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <Link to={"/"} target="_blank">
                <Button
                  size="lg"
                  className="hover:opacity-90 transition mt-4 text-md md:text-lg"
                >
                  Request Demo
                </Button>
              </Link>
            </BlurFade>
          </div>
        </div>
        <div className="absolute bottom-[8%] right-[4%] 2xl:right-[18%] text-white">
          <BlurFade delay={0.4} inView>
            <div
              className="flex items-center gap-4 cursor-pointer"
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
                alt="logo"
                loading="lazy"
                className="w-10 md:w-16"
              />
              <h1 className="text-sm font-normal font-manrope">Scroll Down</h1>
            </div>
          </BlurFade>
        </div>
      </div>
    </div>
  );
};
