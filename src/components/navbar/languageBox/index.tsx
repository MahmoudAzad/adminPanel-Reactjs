import { MdLanguage } from "react-icons/md";
import styles from "./LanguageBox.module.scss";
const LanguageBox = () => {
  return (
    <div className={styles.languageBox_container}>
      <MdLanguage size="20px" />
      <p>EN</p>
    </div>
  );
};

export default LanguageBox;
