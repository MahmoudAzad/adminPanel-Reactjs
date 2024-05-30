import { useState, useRef, useEffect, ReactNode } from "react";
import styles from "./Dropdown.module.scss";

type TContentItems = {
  label: string;
  icon?: ReactNode;
};
interface Props {
  contentItems: TContentItems[];
  dropdownBtn: ReactNode;
  btnClasses: string;
  contentClasses?: string;
  setSelectedTheme: (label: string) => void;
}
const Dropdown: React.FC<Props> = ({
  contentItems,
  dropdownBtn,
  btnClasses,
  contentClasses,
  setSelectedTheme,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        event.target &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (label: string) => {
    setIsOpen(false);
    setSelectedTheme(label);
  };

  return (
    <div className={styles.dropdown_container} ref={dropdownRef}>
      <div className={btnClasses} onClick={toggleDropdown}>
        {dropdownBtn}
      </div>
      {isOpen && (
        <div className={`${styles.dropdown_content} ${contentClasses}`}>
          {contentItems.map((item, index) => (
            <div
              key={index}
              className={styles.item}
              onClick={() => handleItemClick(item.label)}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
