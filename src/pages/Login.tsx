import { useContext, useState } from "react";
import styles from "../../src/styles/Login.module.scss";
import { useNavigate } from "react-router-dom";
import LoginContext from "../context/LoginContext";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "mahmoud-azad",
    email: "azadmilad1993@gmail.com",
    password: "12345",
  });
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const loginContext = useContext(LoginContext);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const loginHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { username, email, password } = formData;
    const validUsername = "mahmoud-azad";
    const validEmail = "azadmilad1993@gmail.com";
    const validPassword = "12345";

    if (
      username === validUsername &&
      email === validEmail &&
      password === validPassword
    ) {
      loginContext.toggleLogin();
      navigate("/");
    } else {
      setErrors({
        username: username !== validUsername,
        email: email !== validEmail,
        password: password !== validPassword,
      });
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
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && (
          <span className={styles.errorMessage}>
            Correct username is "mahmoud-azad"
          </span>
        )}

        <input
          type="text"
          placeholder="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && (
          <span className={styles.errorMessage}>
            Correct email is "azadmilad1993@gmail.com"
          </span>
        )}

        <input
          type="password"
          placeholder="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && (
          <span className={styles.errorMessage}>
            Correct password is "12345"
          </span>
        )}

        <p>Forget password ?</p>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
