import React from "react";
import styles from "./Navbar.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBolt } from "react-icons/fa";
const Navbar = () => {
  localStorage.setItem("temp", "first");
  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.title}>
        <h1>
          <NavLink className={styles.companyName}>
            <FaBolt /> <span>ThunderBoltzz</span>
          </NavLink>
        </h1>
      </div>
      <div className={styles.menu}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/product">Products</NavLink>
          </li>
          {/* <li>
            <NavLink to="/repair">Repair</NavLink>
          </li> */}
          <li>
            <NavLink to="/about">About</NavLink>
          </li>

          {localStorage.getItem("token") ? (
            <>
              <li>
                <NavLink to="/contact">Contact Us &nbsp;</NavLink>
              </li>
              <button onClick={handleLogout} className={styles.logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <li className={styles.loginButton}>
                <NavLink to="/login">Login </NavLink>
              </li>
              <li className={styles.registerButton}>
                <NavLink to="/signup">Register</NavLink>
              </li>
            </>
          )}
          {/* {!localStorage.getItem("token") ? "Present" : "Not there"} */}

          {/* <li>
            <div className={styles.search}>
              <input type="text" placeholder="Search..." />
              <button type="submit">Search</button>
            </div>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
