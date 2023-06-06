import React from "react";
import styles from "./Login.module.css";
import { useNavigate, NavLink } from "react-router-dom";
import { useState } from "react";
const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem("userEmail", credentials.email);
      localStorage.setItem("token", json.authToken);
      navigate("/");
    } else {
      alert("Enter Valid Credentials");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.container}>
      <h2>Login</h2>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email : &nbsp; &nbsp; &nbsp; &nbsp;</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            name="email"
            value={credentials.email}
            onChange={onChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password : </label>

          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={credentials.password}
            onChange={onChange}
            name="password"
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
      <div className={styles.bottom}>
        <p className={styles.login}>
          New user? <NavLink to="/signup">SignUp here</NavLink>
        </p>
        <p className={styles.forgot}>
          <NavLink to="/forgot">Forgot password?</NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
