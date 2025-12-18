import Logo from "./logo";
// import { useNavigate } from "react-router-dom";

const Footer = () => {
  // const navigate = useNavigate();

  // const handleClick = (e: any, to: string) => {
  //   e.preventDefault();
  //   navigate(to);
  //   window.scrollTo(0, 0);
  // };

  return (
    <>
      <footer className="bg-gray w-full h-full hidden lg:block relative overflow-hidden">
        {/* Large PropTryx Background Text */}
        <div className="absolute bottom-2 inset-x-0 flex items-center justify-center pointer-events-none">
          <img
            src="/logo-text-lg.svg"
            alt="PropTryx"
            className="w-[75%] h-full object-contain"
          />
        </div>

        <div className="mx-auto flex flex-col justify-between mt-4 min-h-[46vh] py-4 relative z-10">
          <div className="flex gap-10 justify-between items-start px-14 2xl:px-64">
            <div>
              <Logo path={"/logo-b-b.png"} className="!w-40 md:!w-56" />
            </div>
            <h1 className="w-fit text-md font-manrope text-black">
              Powered by{" "}
              <a
                href="https://xconics.com"
                target="_blank"
                rel="noreferrer"
                className="text-blue font-medium underline underline-offset-1 ml-1"
              >
                XCONICS
              </a>
            </h1>
          </div>

          <div className="flex gap-3 items-center justify-center px-14 2xl:px-64">
            <p className="text-sm md:text-md font-normal font-manrope text-black">
              © 2025 PropTryx. All rights reserved.
            </p>
            {/* <div className="flex items-center gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-black hover:opacity-70 transition-opacity"
                aria-label="Twitter"
              >
                <IconBrandTwitter className="size-5 stroke-[1.5px] shrink-0" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-black hover:opacity-70 transition-opacity"
                aria-label="Facebook"
              >
                <IconBrandFacebook className="size-5 stroke-[1.5px] shrink-0" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-black hover:opacity-70 transition-opacity"
                aria-label="Instagram"
              >
                <IconBrandInstagram size={24} stroke={1.5} />
              </a>
            </div> */}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
