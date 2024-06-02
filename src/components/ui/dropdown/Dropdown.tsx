import { useState, useRef, useEffect, ReactNode } from "react";
import styles from "./Dropdown.module.scss";

type TContentItems = {
  id: number;
  label: string;
  icon?: ReactNode;
};
type TDropdownBtn = {
  label?: string;
  icon?: ReactNode;
};
interface Props {
  contentItems: TContentItems[];
  dropdownBtn: TDropdownBtn;
  btnClasses: string;
  contentClasses?: string;
  setSelectedItem?: (label: string) => void;
}
const Dropdown: React.FC<Props> = ({
  contentItems,
  dropdownBtn,
  btnClasses,
  contentClasses,
  setSelectedItem,
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
    if (setSelectedItem) {
      setSelectedItem(label);
    }
  };

  return (
    <div className={styles.dropdown_container} ref={dropdownRef}>
      <div className={btnClasses} onClick={toggleDropdown}>
        {dropdownBtn.label}
        {dropdownBtn.icon}
      </div>
      {isOpen && (
        <div className={`${styles.dropdown_content} ${contentClasses}`}>
          {contentItems.map((item) => (
            <div
              key={item.id}
              className={styles.item}
              onClick={() => handleItemClick(item.label)}
            >
              {item.label}
              {item.icon}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
