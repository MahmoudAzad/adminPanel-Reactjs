import styles from "../../src/styles/Login.module.scss";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={"images/logo.png"} alt="Login" />
      </div>

      <form className={styles.form_container}>
        <h1>Welcome !</h1>
        <h3>Sign into your account</h3>
        <input placeholder="username" name="username" />
        <input placeholder="email" name="email" />
        <input placeholder="password" name="password" />
        <p>Forget password ?</p>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
