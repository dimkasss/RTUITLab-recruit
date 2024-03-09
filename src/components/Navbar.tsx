import { useContext } from "react";
import Button from "./Button";
import { ThemeContext } from "./ThemeProvider";

import RTUITLabLogoBlack from "../assets/logo-black.svg";
import RTUITLabLogoLight from "../assets/logo-white.svg";
import ButtonLink from "./ButtonLink";

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
      <div className="*:p-3">
        <ButtonLink to="/">Main</ButtonLink>
        <ButtonLink to="/news">News</ButtonLink>
        <ButtonLink to="/weather">Weather</ButtonLink>
        <Button onClick={toggleTheme}>
          Toggle theme
        </Button>

      </div>
    </div>
  );
};

export default Navbar;
