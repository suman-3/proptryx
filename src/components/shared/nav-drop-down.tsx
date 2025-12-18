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
        element.scrollIntoView({ behavior: "smooth" });
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
                location.pathname === item.path && "text-red"
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
