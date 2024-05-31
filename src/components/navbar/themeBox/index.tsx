import { useEffect, useState } from "react";
import Dropdown from "../../ui/dropdown/Dropdown";
import styles from "./ThemeBox.module.scss";
import { AiOutlineSun } from "react-icons/ai";

const ThemeBox = () => {
  const [selectedItem, setSelectedItem] = useState("Light");
  const items = [
    { id: 1, label: "Light", icon: <AiOutlineSun size="20px" /> },
    { id: 2, label: "Dark", icon: <AiOutlineSun size="20px" /> },
  ];

  useEffect(() => {
    console.log("selectedTheme =>", selectedItem);
  }, [selectedItem]);

  return (
    <Dropdown
      contentItems={items}
      dropdownBtn={{ icon: <AiOutlineSun size="20px" /> }}
      btnClasses={styles.themeBox_button}
      setSelectedItem={setSelectedItem}
    />
  );
};

export default ThemeBox;
