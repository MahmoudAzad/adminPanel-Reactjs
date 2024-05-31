import { MdLanguage } from "react-icons/md";
import styles from "./LanguageBox.module.scss";
import Dropdown from "../../ui/dropdown/Dropdown";
import { useState } from "react";
const LanguageBox = () => {
  const [selectedItems, setSelectedItem] = useState("EN");
  const items = [
    { id: 1, label: "EN" },
    { id: 2, label: "FA" },
  ];
  return (
    <Dropdown
      dropdownBtn={{
        label: selectedItems,
        icon: <MdLanguage size="20px" />,
      }}
      contentItems={items}
      btnClasses={styles.languageBox_button}
      setSelectedItem={setSelectedItem}
    />
  );
};

export default LanguageBox;
