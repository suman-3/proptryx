import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { NavmenuItems } from "../../constants/navmenu";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import { cn } from "../../lib/utils";

export function NavigationMenuDropDown({
  isScrolled,
}: {
  isScrolled?: boolean;
}) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e: any, to: string) => {
    e.preventDefault();

    if (to.startsWith("#")) {
      const element = document.querySelector(to);
      if (element) {
        // Element exists on current page, scroll to it
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        // Element doesn't exist, redirect to home page with hash
        navigate(`/${to}`);
        // Wait for navigation and then scroll
        setTimeout(() => {
          const targetElement = document.querySelector(to);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    } else {
      navigate(to);
      window.scrollTo(0, 0);
    }
  };

  return (
    <NavigationMenu className="hidden md:flex items-center justify-center gap-6">
      <NavigationMenuList className="">
        {NavmenuItems.map((item, index) => (
          <NavigationMenuItem key={index}>
            <NavLink
              to={item.path}
              className={cn(
                "text-md mx-7 hover:opacity-90 transition font-normal relative active: font-spaceGrotesk",
                isScrolled ? "text-black" : "text-white",
                location.pathname === item.path &&
                  "underline underline-offset-2"
              )}
              onClick={(e) => handleClick(e, item.path)}
            >
              {item.title}
            </NavLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
