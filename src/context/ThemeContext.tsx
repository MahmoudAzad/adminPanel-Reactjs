import { createContext, useEffect, useState } from "react";

type TypeThemeContext = {
  theme: string | undefined;
  toggleTheme: (label: string) => void;
};

const ThemeContext = createContext<TypeThemeContext>({
  theme: "",
  toggleTheme: () => {},
});

export const ThemeContextProvider: React.FC<{
  children: React.ReactNode;
}> = (props) => {
  const [theme, setTheme] = useState<string>(() => {
    const storedValue = localStorage.getItem("theme");
    return storedValue ? JSON.parse(storedValue) : "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);

  function toggleTheme(theme: string) {
    setTheme(theme);
  }

  const themeValue = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={themeValue}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
