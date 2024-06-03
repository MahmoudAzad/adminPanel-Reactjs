import { useContext } from "react";
import { MdLanguage } from "react-icons/md";
import styles from "./LanguageBox.module.scss";
import Dropdown from "../../ui/dropdown/Dropdown";
import LanguageContext from "../../../context/LanguageContext";

const LanguageBox = () => {
  const LangContext = useContext(LanguageContext);
  const language = LangContext.language;

  const items = [
    { id: 1, label: "en" },
    { id: 2, label: "fa" },
  ];

  return (
    <Dropdown
      dropdownBtn={{
        label: language,
        icon: <MdLanguage size="20px" />,
      }}
      contentItems={items}
      btnClasses={styles.languageBox_button}
      setSelectedItem={LangContext.toggleLanguage}
    />
  );
};

export default LanguageBox;
