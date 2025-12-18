import Logo from "./logo";

const Footer = () => {
  return (
    <footer className="bg-gray w-full h-full relative overflow-hidden">
      {/* Large PropTryx Background Text */}
      <div className="absolute bottom-0 md:bottom-2 inset-x-0 flex items-center justify-center pointer-events-none opacity-30 md:opacity-40 lg:opacity-100">
        <img
          src="/logo-text-lg.svg"
          alt="PropTryx background"
          className="w-full md:w-[90%] lg:w-[75%] 2xl:w-[65%] h-auto object-contain select-none pointer-events-none"
          loading="lazy"
        />
      </div>

      <div className="mx-auto flex flex-col justify-between min-h-[30vh] md:min-h-[40vh] lg:min-h-[46vh] py-8 md:py-10 lg:py-12 relative z-10">
        {/* Top Section - Logo & Powered By */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-between items-start md:items-start px-6 md:px-14 2xl:px-64">
          <div className="flex items-center justify-start w-full md:w-auto">
            <Logo path={"/logo-b-b.png"} className="!w-56 h-auto" />
          </div>

          <div className="flex items-center md:self-center">
            <p className="text-sm md:text-base font-manrope text-black text-left md:text-right">
              Powered by{" "}
              <a
                href="https://xconics.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue font-semibold underline underline-offset-2 ml-1 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2 rounded-sm"
              >
                XCONICS
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Section - Copyright & Social */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-center px-6 md:px-14 2xl:px-64 mt-10 -mb-5">
          <p className="text-xs md:text-sm lg:text-base font-normal font-manrope text-black/80 text-center leading-relaxed">
            © 2025 PropTryx. All rights reserved.
          </p>

          {/* Social Links - Uncomment when ready */}
          {/* <div className="flex items-center gap-4 md:gap-5">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded-full p-1"
              aria-label="Follow us on Twitter"
            >
              <IconBrandTwitter className="size-5 md:size-6 stroke-[1.5px] shrink-0" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded-full p-1"
              aria-label="Follow us on Facebook"
            >
              <IconBrandFacebook className="size-5 md:size-6 stroke-[1.5px] shrink-0" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded-full p-1"
              aria-label="Follow us on Instagram"
            >
              <IconBrandInstagram className="size-5 md:size-6" stroke={1.5} />
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
