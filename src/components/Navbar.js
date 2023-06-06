import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { FaBolt } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.title}>
        <h1>
          <FaBolt /> <span>ThunderBoltzz</span>
        </h1>
      </div>
      <div className={styles.menu}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Signup</NavLink>
          </li>
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
