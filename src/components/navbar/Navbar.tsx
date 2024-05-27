import { AiOutlineMenu } from "react-icons/ai";
import styles from "./Navbar.module.scss";
import ThemeBox from "./themeBox";
import ProfileBox from "./profileBox";
import LanguageBox from "./languageBox";
const Navbar: React.FC = () => {
  return (
    <div className={styles.navbar_container}>
      <div>
        <AiOutlineMenu size="20px" />
      </div>

      <div className={styles.rightbar}>
        <LanguageBox />
        <ProfileBox />
        <ThemeBox />
      </div>
    </div>
  );
};

export default Navbar;
