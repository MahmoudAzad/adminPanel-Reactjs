import { useEffect, useState } from "react";
import Dropdown from "../../ui/dropdown/Dropdown";
import styles from "./ThemeBox.module.scss";
import { RxMoon, RxSun } from "react-icons/rx";

const ThemeBox = () => {
  const [theme, setTheme] = useState<string>(() => {
    const storedValue = localStorage.getItem("theme");
    return storedValue ? JSON.parse(storedValue) : "light";
  });

  const items = [
    { id: 1, label: "light" },
    { id: 2, label: "dark" },
  ];

  useEffect(() => {
    console.log("selectedTheme =>", theme);
    localStorage.setItem("theme", JSON.stringify(theme));
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);

  return (
    <Dropdown
      contentItems={items}
      dropdownBtn={{
        icon:
          theme === "light" ? <RxSun size="20px" /> : <RxMoon size="20px" />,
      }}
      btnClasses={styles.themeBox_button}
      setSelectedItem={setTheme}
    />
  );
};

export default ThemeBox;
