import { useContext } from "react";
import Dropdown from "../../ui/dropdown/Dropdown";
import styles from "./ThemeBox.module.scss";
import { RxMoon, RxSun } from "react-icons/rx";
import ThemeContext from "../../../context/ThemeContext";

const ThemeBox = () => {
  const themeContext = useContext(ThemeContext);
  const items = [
    { id: 1, label: "light" },
    { id: 2, label: "dark" },
  ];

  return (
    <Dropdown
      contentItems={items}
      dropdownBtn={{
        icon:
          themeContext.theme === "light" ? (
            <RxSun size="20px" />
          ) : (
            <RxMoon size="20px" />
          ),
      }}
      btnClasses={styles.themeBox_button}
      setSelectedItem={themeContext.toggleTheme}
    />
  );
};

export default ThemeBox;
