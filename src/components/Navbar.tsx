import { useContext } from "react";
import Button from "./Button";
import { ThemeContext } from "./ThemeProvider";

import RTUITLabLogoBlack from "../assets/logo-black.svg";
import RTUITLabLogoLight from "../assets/logo-white.svg";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="flex justify-between border-b-2 p-3">
      <img
        src={theme === "light" ? RTUITLabLogoBlack : RTUITLabLogoLight}
        alt="RTUITLab-recruit"
        width="50px"
        className="text-[--text]"
      ></img>
      <Button onClick={toggleTheme}>
        Change theme to {theme === "light" ? "dark" : "light"}
      </Button>
    </div>
  );
};

export default Navbar;
