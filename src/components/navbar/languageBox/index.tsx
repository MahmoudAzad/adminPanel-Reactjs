import { MdLanguage } from "react-icons/md";
import styles from "./LanguageBox.module.scss";
import Dropdown from "../../ui/dropdown/Dropdown";
import { useEffect, useState } from "react";
import i18n from "../../../i18n";

const LanguageBox = () => {
  const [language, setLanguage] = useState<string>(() => {
    const storedValue = localStorage.getItem("lang");
    return storedValue ? JSON.parse(storedValue) : "en";
  });
  const items = [
    { id: 1, label: "en" },
    { id: 2, label: "fa" },
  ];
  useEffect(() => {
    localStorage.setItem("lang", JSON.stringify(language));
    document.documentElement.lang = language === "en" ? "en" : "fa";
    i18n.changeLanguage(language);
  }, [language]);
  return (
    <Dropdown
      dropdownBtn={{
        label: language,
        icon: <MdLanguage size="20px" />,
      }}
      contentItems={items}
      btnClasses={styles.languageBox_button}
      setSelectedItem={setLanguage}
    />
  );
};

export default LanguageBox;
