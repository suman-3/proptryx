import { Link, useNavigate } from "react-router-dom";
import { cn } from "../../lib/utils";

const Logo = ({ path, className }: { path?: string; className?: string }) => {
  const navigate = useNavigate();

  const handleClick = (e: any, to: string) => {
    e.preventDefault();
    navigate(to);
    window.scrollTo(0, 0);
  };

  return (
    <Link className="w-full h-full" to="/" onClick={(e) => handleClick(e, "/")}>
      <img
        src={path ? path : "/logo.png"}
        alt="logo"
        loading="lazy"
        className={cn("w-10 md:w-16", className)}
      />
    </Link>
  );
};

export default Logo;
