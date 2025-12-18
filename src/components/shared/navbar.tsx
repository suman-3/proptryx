import { Link, NavLink, useLocation } from "react-router-dom";
import { NavmenuItems } from "../../constants/navmenu";
import { Button } from "../ui/button";
import Logo from "./logo";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "../../components/ui/sheet";
import { AlignJustify } from "lucide-react";
import { NavigationMenuDropDown } from "./nav-drop-down";
import { useState, useEffect } from "react";
import { cn } from "../../lib/utils";

// Define paths where navbar should be transparent by default
const TRANSPARENT_BG_PATHS = ["/", "/home", "/about"];

const NavContent = ({
  closeSheet,
  isScrolled,
}: {
  closeSheet?: any;
  isScrolled?: boolean;
}) => {
  return (
    <section className="flex h-full flex-col gap-6 pt-7">
      {NavmenuItems.map((item, index) => (
        <ul key={index}>
          <li>
            <SheetClose asChild>
              <NavLink
                to={item.path}
                className={`text-[1.1em] navlink hover:opacity-90 transition relative font-medium list-none ${
                  isScrolled ? "text-black" : ""
                }`}
                onClick={closeSheet}
              >
                {item.title}
              </NavLink>
            </SheetClose>
          </li>
        </ul>
      ))}
    </section>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Check if current path should have transparent background
  const shouldBeTransparent = TRANSPARENT_BG_PATHS.includes(location.pathname);

  // Handle scroll to top on route change and hash navigation
  useEffect(() => {
    const { hash } = location;

    if (hash) {
      // If there's a hash, scroll to that element
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 0);
    } else {
      // No hash, scroll to top
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Determine if navbar should have white background
  const hasWhiteBg = shouldBeTransparent ? isScrolled : true;

  return (
    <nav
      className={`w-full h-10 md:h-20 flex items-center justify-between px-5 md:px-10 lg:px-14 fixed top-0 z-50 2xl:px-64 transition-all duration-300 ${
        hasWhiteBg ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="flex items-center gap-2">
        <Logo
          path={hasWhiteBg ? "/logo-b-b.png" : "/logo-b-w.png"}
          className="!w-40 md:!w-64"
        />
      </div>

      <div className="flex items-center gap-4">
        <NavigationMenuDropDown isScrolled={hasWhiteBg} />

        <Button
          className={cn(
            "font-medium",
            hasWhiteBg &&
              "bg-black text-white hover:bg-black/90 hover:opacity-90"
          )}
          asChild
        >
          <Link to="/contact">Contact Us</Link>
        </Button>
      </div>

      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <AlignJustify
              className={`size-6 shrink-0 mt-2 ${
                hasWhiteBg ? "text-black" : ""
              }`}
            />
          </SheetTrigger>
          <SheetContent
            side="left"
            className="background-light900_dark200 border-none flex flex-col gap-2 max-w-[80vw]"
          >
            <div className="flex flex-col space-y-10">
              <Logo path={hasWhiteBg ? "/logo-b-b.png" : "/logo-b-w.png"} />
              <NavContent isScrolled={true} />
              <SheetClose asChild>
                <Button className="font-medium" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
