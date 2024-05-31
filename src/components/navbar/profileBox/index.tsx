import { useEffect, useState } from "react";
import Dropdown from "../../ui/dropdown/Dropdown";
import styles from "./ProfileBox.module.scss";
import { useNavigate } from "react-router-dom";
const ProfileBox = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const selectedTo =
      items.find((item) => item.label === selectedItem)?.to || "";
    navigate(selectedTo);
  }, [selectedItem]);
  const items = [
    { id: 1, label: "Mahmoud Azad", to: "/miladazad" },
    { id: 2, label: "Profile", to: "/1" },
    { id: 3, label: "Billing", to: "/12" },
    { id: 4, label: "Settings", to: "/122" },
    { id: 5, label: "New Team", to: "/12222" },
    { id: 6, label: "Log out", to: "/122222" },
  ];
  return (
    <Dropdown
      contentItems={items}
      dropdownBtn={{ label: "M" }}
      btnClasses={styles.profileBox_button}
      setSelectedItem={setSelectedItem}
    />
  );
};

export default ProfileBox;
