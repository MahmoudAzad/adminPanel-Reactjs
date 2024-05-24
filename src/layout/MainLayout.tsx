import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <div>
      <div>Side Bar</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
