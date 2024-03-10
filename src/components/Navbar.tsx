import { useContext } from "react";
import Button from "./Button";
import { ThemeContext } from "./ThemeProvider";

import RTUITLabLogoBlack from "../assets/logo-black.svg";
import RTUITLabLogoLight from "../assets/logo-white.svg";
import NavButton from "./NavButton";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="flex justify-between border-b-2 p-3">
      <Link to="/" className="self-center">
        <img
          src={theme === "light" ? RTUITLabLogoBlack : RTUITLabLogoLight}
          alt="RTUITLab-recruit"
          width="50px"
          className="text-[--text]"
        ></img>
      </Link>

      <div className="flex flex-row justify-between">
        <NavButton to="/">Main</NavButton>
        <NavButton to="/news">News</NavButton>
        <Button onClick={toggleTheme}>
          Change theme to {theme === "light" ? "dark" : "light"}
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
