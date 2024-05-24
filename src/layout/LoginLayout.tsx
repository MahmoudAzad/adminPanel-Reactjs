import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import LoginContext from "../context/LoginContext";

const LoginLayout = () => {
  const loginState = useContext(LoginContext);

  return loginState.isLogin ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace={true} />
  );
};

export default LoginLayout;
