import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import styles from "./auth.module.scss";
import { directorDataType } from "../../types/login";
import { fetchLogin } from "../../features/authSlice/loginSlice";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { error, token } = useSelector((state: RootState) => state.login);
console.log(token,"TOKIN");

  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const useData = { email, password } as directorDataType;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(fetchLogin(useData));
    setEmail("");
    setPassword("");
  };
  React.useEffect(() => {
    if (token) {
      navigate("/");
      location.reload();
    }
  }, [navigate, token]);
  return (
    <div className={styles.auth}>
      
      <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
      <div className={styles.auth_title}>
      <p>АВТОРИЗАЦИЯ</p>
      <button onClick={() => navigate("/")} className={styles.btn_close}>&#10006;</button>
      </div>
        <div className="input_title">
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            placeholder="Email"
          />
        </div>
        <div className="input_title">
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
          />
        </div>
        {/* <button className={styles.button} type="submit">Sign in</button> */}
        <button className={styles.button} role="button">
          Sign in
        </button>

        {error && (
          <div style={{ color: "red" }} className={styles.auth_error}>
            <hr />
            {error}
          </div>
        )}
        <div className={styles.block_link_auth}>
          <Link className={styles.link_login} to="/login">
            АВТОРИЗАЦИЯ
          </Link>
          <Link className={styles.link_auth} to="/auth">
            РЕГИСТРАЦИЯ
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
