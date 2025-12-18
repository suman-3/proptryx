import BlurFade from "../../components/shared/blur-fade";
import BlurFadeImgUp from "../../components/shared/blur-fade-img-up";
import { cn } from "../../lib/utils";

interface GlobalSectionProps {
  flexDirection?: string;
  image: string;
  tag?: string;
  bgReverted?: boolean;
  title: string;
  description: string;
  description1?: string;
  description2?: string;
  description3?: string;
}

export const GlobalSection = ({
  flexDirection,
  image,
  tag,
  title,
  bgReverted,
  description,
  description1,
  description2,
  description3,
}: GlobalSectionProps) => {
  return (
    <div
      className={cn(
        "w-full h-full py-3 md:py-10 md:pl-10 2xl:px-64",
        bgReverted && "bg-gray"
      )}
    >
      <div
        className={cn(
          "w-full h-full md:h-[58vh] 2xl:h-[50vh] flex items-center justify-center",
          flexDirection
        )}
      >
        <div className="w-full md:w-1/2 h-full object-cover overflow-hidden p-5 md:p-0 flex items-center justify-center">
          <BlurFadeImgUp delay={0.1} inView className="overflow-hidden">
            <img
              src={image}
              alt="solution"
              className={cn(
                "object-cover pointer-events-none select-none w-full md:w-[80%] h-full overflow-hidden",
                flexDirection === "flex-col md:flex-row-reverse"
                  ? "md:mx-auto md:pr-3"
                  : "md:pl-5"
              )}
            />
          </BlurFadeImgUp>
        </div>
        {flexDirection === "flex-col md:flex-row-reverse" ? (
          <div className="w-full  md:w-1/2 h-full flex flex-col items-center justify-center md:pr-16 py-3">
            <div className="flex flex-col space-y-2 md:space-y-4 w-full items-start pl-4">
              <BlurFade delay={0.15} inView>
                <h1 className="text-sm md:text-[16px] font-bold text-black tracking-wider font-spaceGrotesk">
                  {tag}
                </h1>
              </BlurFade>

              <BlurFade delay={0.2} inView>
                <h1 className="text-2xl md:text-4xl font-medium text-left text-black font-spaceGrotesk">
                  {title}
                </h1>
              </BlurFade>

              <BlurFade delay={0.25} inView>
                <p className="text-sm md:text-lg  pt-1 font-manrope text-dull">
                  {description}
                </p>
              </BlurFade>
              {description1 && (
                <BlurFade delay={0.3} inView>
                  <p className="text-sm md:text-lg pt-1 font-manrope text-dull">
                    {description1}
                  </p>
                </BlurFade>
              )}
              {description2 && (
                <BlurFade delay={0.35} inView>
                  <p className="text-sm md:text-lg pt-1 font-manrope text-dull">
                    {description2}
                  </p>
                </BlurFade>
              )}
              {description3 && (
                <BlurFade delay={0.4} inView>
                  <p className="text-sm md:text-lg pt-1 font-manrope text-dull">
                    {description3}
                  </p>
                </BlurFade>
              )}
            </div>
          </div>
        ) : (
          <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-center py-3 md:pr-20">
            <div className="flex flex-col space-y-3 w-full items-start pl-4">
              <BlurFade delay={0.15} inView>
                <h1 className="text-sm md:text-[16px] font-bold text-black tracking-wider font-spaceGrotesk">
                  {tag}
                </h1>
              </BlurFade>

              <BlurFade delay={0.2} inView>
                <h1 className="text-2xl md:text-4xl font-medium text-left text-black font-spaceGrotesk">
                  {title}
                </h1>
              </BlurFade>
              <BlurFade delay={0.25} inView>
                <p className="text-sm md:text-lg  pt-1 font-manrope text-dull">
                  {description}
                </p>
              </BlurFade>
              {description1 && (
                <BlurFade delay={0.3} inView>
                  <p className="text-sm md:text-lg pt-1 font-manrope text-dull">
                    {description1}
                  </p>
                </BlurFade>
              )}
              {description2 && (
                <BlurFade delay={0.35} inView>
                  <p className="text-sm md:text-lg pt-1 font-manrope text-dull">
                    {description2}
                  </p>
                </BlurFade>
              )}
              {description3 && (
                <BlurFade delay={0.4} inView>
                  <p className="text-sm md:text-lg pt-1 font-manrope text-dull">
                    {description3}
                  </p>
                </BlurFade>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
