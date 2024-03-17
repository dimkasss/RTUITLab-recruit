import React, { PropsWithChildren, useEffect, useState } from "react";

type Theme = "light" | "dark";
type ThemeContext = { theme: Theme; toggleTheme: () => void };

export const ThemeContext = React.createContext<ThemeContext>(
  {} as ThemeContext
);

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");
  const toggleTheme = () => {
    const toSwap = theme === "light" ? "dark" : "light";
    setTheme(toSwap);
    localStorage.setItem("theme", toSwap);
  };

  useEffect(() => {
    if (
      theme != localStorage.getItem("theme") &&
      localStorage.getItem("theme") !== undefined
    ) {
      setTheme(localStorage.getItem("theme") as Theme);
    }
    theme === "light"
      ? document.body.classList.remove("dark")
      : document.body.classList.add("dark");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
