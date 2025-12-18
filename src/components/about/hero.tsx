import { Link } from "react-router-dom";
import BlurFade from "../shared/blur-fade";
import { Button } from "../ui/button";

export const Hero = () => {
  return (
    <div className="w-full h-full bg-bg">
      <div className="w-full flex flex-col md:flex-row min-h-svh md:min-h-lvh about-bg">
        <div className="w-full md:w-[80%] px-6 md:pl-14 2xl:pl-64">
          <div className="w-full flex flex-col items-start justify-center h-full space-y-2 md:space-y-5">
            <BlurFade delay={0.2} inView>
              <h1 className="text-sm border mb-2 rounded-full bg-white/20 px-4 py-1 md:text-lg w-full backdrop-blur-md tracking-wide text-white font-manrope">
                Who we are
              </h1>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <h1 className="text-xl md:text-4xl capitalize lg:text-5xl font-medium w-full leading-9 md:leading-[70px] tracking-wide mb-2 text-white font-spaceGrotesk">
                Making commercial property discovery <br /> clear, fast &
                confident
              </h1>
            </BlurFade>
            <BlurFade delay={0.25} inView>
              <p className="w-full text-white md:w-[80%] text-md md:text-[1.1rem] leading-5 md:leading-[30px] font-manrope">
                PropTryx brings occupiers, tenants, developers and property
                owners into a single trusted platform — helping you explore
                properties, compare locations and review documents without
                noise.
              </p>
            </BlurFade>
            <div className="flex items-center gap-4">
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
              <BlurFade delay={0.3} inView>
                <Link to={"/contact"}>
                  <Button
                    size="lg"
                    variant={"outline"}
                    className="hover:opacity-90 transition mt-4 text-md md:text-lg"
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
