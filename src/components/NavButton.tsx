import { FC } from "react";
import { NavLink } from "react-router-dom";

interface INavButton {
  children: string;
  to: string;
}

const NavButton: FC<INavButton> = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive, isPending, isTransitioning }) =>
        [
          isPending ? "pending" : "",
          isActive ? "font-semibold" : "",
          isTransitioning ? "transitioning" : "",
        ].join(" ") + "border border-[--text] p-3 px-5 rounded-xl m-3"
      }
    >
      {children}
    </NavLink>
  );
};

export default NavButton;
