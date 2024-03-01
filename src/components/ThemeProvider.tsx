import React, { PropsWithChildren, useEffect, useState } from "react";

type Theme = "light" | "dark";
type ThemeContext = { theme: Theme; toggleTheme: () => void };

export const ThemeContext = React.createContext<ThemeContext>(
  {} as ThemeContext
);

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
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
