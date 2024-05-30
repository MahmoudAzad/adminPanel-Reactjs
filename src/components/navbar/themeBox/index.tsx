import { useEffect, useState } from "react";
import Dropdown from "../../ui/dropdown/Dropdown";
import styles from "./ThemeBox.module.scss";
import { AiOutlineSun } from "react-icons/ai";

const ThemeBox = () => {
  const [selectedTheme, setSelectedTheme] = useState("Light");
  const items = [
    { label: "Light", icon: <AiOutlineSun size="20px" /> },
    { label: "Dark", icon: <AiOutlineSun size="20px" /> },
  ];

  useEffect(() => {
    console.log("selectedTheme =>", selectedTheme);
  }, [selectedTheme]);

  return (
    <div className={""}>
      <Dropdown
        contentItems={items}
        dropdownBtn={<AiOutlineSun size="20px" />}
        btnClasses={styles.themeBox_container}
        setSelectedTheme={setSelectedTheme}
      />
    </div>
  );
};

export default ThemeBox;
