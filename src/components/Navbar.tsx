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
    <div className="flex justify-between border-b-2 p-1 md:p-3">
      <Link to="/" className="self-center">
        <img
          src={theme === "light" ? RTUITLabLogoBlack : RTUITLabLogoLight}
          alt="RTUITLab-recruit"
          className="text-[--text] w-[40px] md:w-[50px]"
        ></img>
      </Link>

      <div className="flex flex-row justify-between *:m-1 md:*:m-2">
        <NavButton to="/">Main</NavButton>
        <NavButton to="/news">News</NavButton>
        <NavButton to="/weather">Weather</NavButton>
        <NavButton to="/clock">Clock</NavButton>
        <Button onClick={toggleTheme}>
          {theme === "light" ? (
            <img
              src="src/assets/lightmode.png"
              className="w-[20px] md:w-[25px]"
            />
          ) : (
            <img
              src="src/assets/nightmode.png"
              className="w-[20px] md:w-[25px]"
            />
          )}
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
