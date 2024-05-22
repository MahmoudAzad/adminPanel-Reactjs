import { useContext, useRef, useState } from "react";
import styles from "../../src/styles/Login.module.scss";
import { useNavigate } from "react-router-dom";
import LoginContext from "../components/context/LoginContext";

const Login = () => {
  const [username, setUername] = useState("mahmoud-azad");
  const [email, setEmail] = useState("azadmilad1993@gmail.com");
  const [password, setPassword] = useState("12345");
  const usernameErrorRef = useRef(null);
  const emailErrorRef = useRef(null);
  const passwordErrorRef = useRef(null);

  const loginContext = useContext(LoginContext);
  const navigate = useNavigate();

  const loginHandler = (e: React.FormEvent) => {
    e.preventDefault();
    let isValid;
    username === "mahmoud-azad" &&
      password === "12345" &&
      email === "azadmilad1993@gmail.com";
    if (isValid) {
      loginContext.toggleLogin();
      navigate("/");
    } else {
      if (username !== "mahmoud-azad") {
        usernameErrorRef.current?.setAttribute(
          "style",
          "display: inline-block;opacity: 1"
        );
      }
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={"images/logo.png"} alt="Login" />
      </div>

      <form className={styles.form_container} onSubmit={loginHandler}>
        <h1>Welcome !</h1>
        <h3>Sign into your account</h3>
        <input
          type="text"
          placeholder="username"
          id="username"
          name="username"
          value={username}
          onChange={(e) => {
            setUername(e.target.value);
          }}
        />
        <span ref={usernameErrorRef} className={styles.errorMessage}>
          Correct username is "milad"
        </span>
        <input
          type="email"
          placeholder="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <span ref={emailErrorRef} className={styles.errorMessage}>
          Correct email is "azadmilad1993@gmail.com"
        </span>

        <input
          type="password"
          placeholder="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <span ref={passwordErrorRef} className={styles.errorMessage}>
          Correct password is "12345"
        </span>

        <p>Forget password ?</p>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
