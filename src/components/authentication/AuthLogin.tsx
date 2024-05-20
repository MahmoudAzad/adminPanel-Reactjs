import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import LoginContext from "../context/LoginContext";

const AuthLogin = () => {
  const loginState = useContext(LoginContext);
  const navigate = useNavigate();
  return <>{loginState.isLogin ? <Outlet /> : navigate("/login")}</>;
};

export default AuthLogin;
