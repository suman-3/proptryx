import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { NavmenuItems } from "../../constants/navmenu";
import { Button } from "../ui/button";
import Logo from "./logo";
import { Sheet, SheetContent, SheetTrigger } from "../../components/ui/sheet";
import { AlignJustify } from "lucide-react";
import { NavigationMenuDropDown } from "./nav-drop-down";
import { useState, useEffect } from "react";
import { cn } from "../../lib/utils";

// Define paths where navbar should be transparent by default
const TRANSPARENT_BG_PATHS = ["/", "/home", "/about"];

const NavContent = ({
  closeSheet,
  isScrolled,
  showHome,
}: {
  closeSheet?: () => void;
  isScrolled?: boolean;
  showHome?: boolean;
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const items = showHome
    ? [{ title: "Home", path: "/" }, ...NavmenuItems]
    : NavmenuItems;

  const handleNavClick = (e: React.MouseEvent, path: string) => {
    // Check if path contains hash
    if (path.includes("#")) {
      e.preventDefault();

      const [pathname, hash] = path.split("#");
      const targetPath = pathname || "/";

      // Close sheet first
      if (closeSheet) {
        closeSheet();
      }

      // Small delay to allow sheet to close
      setTimeout(() => {
        // If we're already on the target page, just scroll
        if (location.pathname === targetPath) {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        } else {
          // Navigate to page with hash
          navigate(`${targetPath}#${hash}`);
        }
      }, 100);
    } else {
      // Close sheet for regular navigation
      if (closeSheet) {
        closeSheet();
      }
    }
  };

  return (
    <section className="flex h-full flex-col gap-6 pt-7">
      {items.map((item, index) => (
        <ul key={index}>
          <li>
            <NavLink
              to={item.path}
              className={`text-[1.1em] navlink hover:opacity-90 font-spaceGrotesk transition relative font-medium list-none ${
                isScrolled ? "text-black" : "text-white"
              }`}
              onClick={(e) => handleNavClick(e, item.path)}
            >
              {item.title}
            </NavLink>
          </li>
        </ul>
      ))}
    </section>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const location = useLocation();

  // Check if current path should have transparent background
  const shouldBeTransparent = TRANSPARENT_BG_PATHS.includes(location.pathname);

  // Close sheet on route change
  useEffect(() => {
    setIsSheetOpen(false);
  }, [location.pathname]);

  // Handle scroll to hash element
  useEffect(() => {
    const { hash } = location;

    if (hash) {
      // Remove the '#' symbol
      const id = hash.replace("#", "");

      // Function to scroll to element with retry
      const scrollToElement = (attempt = 0) => {
        const element = document.getElementById(id);

        if (element) {
          // Add small delay to ensure page is rendered
          setTimeout(() => {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 100);
        } else if (attempt < 10) {
          // Retry after 200ms if element not found
          setTimeout(() => {
            scrollToElement(attempt + 1);
          }, 200);
        }
      };

      scrollToElement();
    } else {
      // No hash, scroll to top
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [location.pathname, location.hash]);

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
      className={`w-full h-20 flex items-center justify-between px-5 md:px-10 lg:px-14 fixed top-0 z-50 2xl:px-64 transition-all duration-300 ${
        hasWhiteBg ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="flex items-center gap-2">
        <Logo
          path={hasWhiteBg ? "/logo-b-b.png" : "/logo-b-w.png"}
          className="!w-56"
        />
      </div>

      <div className="flex items-center gap-4">
        <NavigationMenuDropDown isScrolled={hasWhiteBg} />

        <Button
          className={cn(
            "font-medium hidden md:block",
            hasWhiteBg &&
              "bg-black text-white hover:bg-black/90 hover:opacity-90"
          )}
          asChild
        >
          <Link to="/contact">Contact Us</Link>
        </Button>
      </div>

      <div className="md:hidden">
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <button className="focus:outline-none" aria-label="Open menu">
              <AlignJustify
                className={`size-6 shrink-0 mt-2 ${
                  hasWhiteBg ? "text-black" : "text-white"
                }`}
              />
            </button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="background-light900_dark200 border-none flex flex-col gap-2 max-w-[80vw]"
          >
            <div className="flex flex-col space-y-6">
              <Logo path={"/logo-b-b.png"} className="!w-56" />
              <NavContent
                isScrolled={true}
                showHome={true}
                closeSheet={() => setIsSheetOpen(false)}
              />
              <Button
                variant="black"
                className="font-medium"
                asChild
                onClick={() => setIsSheetOpen(false)}
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
