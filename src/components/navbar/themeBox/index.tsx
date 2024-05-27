import { AiOutlineSun } from "react-icons/ai";
import styles from "./ThemeBox.module.scss";
const ThemeBox = () => {
  return (
    <div className={styles.themeBox_container}>
      <AiOutlineSun size="20px" />
    </div>
  );
};

export default ThemeBox;
