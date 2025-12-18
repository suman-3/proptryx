import BlurFade from "../shared/blur-fade";

export const Hero = () => {
  return (
    <div className="w-full h-full bg-bg">
      <div className="w-full flex flex-col md:flex-row h-[42vh] md:h-[50vh] apply-for-branch-hero-bg">
        <div className="w-full px-6 md:pl-14 2xl:pl-64 mt-24 md:mt-6">
          <div className="w-full flex flex-col items-center justify-center h-full space-y-2 md:space-y-3">
            <BlurFade delay={0.2} inView>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold w-full leading-9 md:leading-[70px] tracking-wide mb-2 text-white font-spaceGrotesk uppercase">
                Apply for Branch
              </h1>
            </BlurFade>
            <BlurFade delay={0.25} inView>
              <p className="w-full text-white text-center text-[15px] md:text-[1.3rem] md:w-[80%] mx-auto leading-5 md:leading-[30px] font-medium font-manrope">
                Start your own Megha Express branch in just a few simple steps
                and become part of a trusted logistics network that’s growing
                across India. Partner with Megha Express today and take the next
                step toward building a profitable and reliable logistics
                business.
              </p>
            </BlurFade>
          </div>
        </div>
      </div>
    </div>
  );
};
