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
        ].join(" ") +
        " border border-[--text] p-2 py-3 md:p-3 md:px-5 rounded-xl hover:border-white hover:bg-[--btn] transition duration-75"
      }
    >
      {children}
    </NavLink>
  );
};

export default NavButton;
