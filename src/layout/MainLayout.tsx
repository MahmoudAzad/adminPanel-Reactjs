import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const MainLayout: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
