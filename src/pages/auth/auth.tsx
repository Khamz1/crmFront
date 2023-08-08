import React from "react";
import styles from "./auth.module.scss";
import { authSignUp } from "../../features/authSlice/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";

function Auth() {
  const dispatch: AppDispatch = useDispatch();
  const authError = useSelector((state: RootState) => state.auth.error);
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  
  const handleSignUp = (e: any) => {
    e.preventDefault();
    dispatch(authSignUp({ email, password, fullName }));
    setEmail("");
    setPassword("");
    setFullName("");
  };
  return (
    <div className={styles.auth}>
      <form onSubmit={(e) => handleSignUp(e)} className={styles.form}>
        <div className="auth_title">
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="input_title">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
        </div>
        <div className="input_title">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </div>
        <button className={styles.button} role="button">Sign up</button>
        {authError && (
                <div style={{ color: "red" }} className={styles.auth_error}>
                    <hr />
                  {authError}
                </div>
              )}
      </form>
    </div>
  );
}

export default Auth;
