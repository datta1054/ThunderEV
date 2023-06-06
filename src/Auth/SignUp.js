import React from "react";
import styles from "./SignUp.module.css";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
    phone: "",
  });
  let [address, setAddress] = useState("");
  let navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    let navLocation = () => {
      return new Promise((res, rej) => {
        navigator.geolocation.getCurrentPosition(res, rej);
      });
    };
    let latlong = await navLocation().then((res) => {
      let latitude = res.coords.latitude;
      let longitude = res.coords.longitude;
      return [latitude, longitude];
    });

    let [lat, long] = latlong;
    console.log(lat, long);
    const response = await fetch("http://localhost:8080/api/auth/getlocation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ latlong: { lat, long } }),
    });
    const { location } = await response.json();
    console.log(location);
    setAddress(location);
    setCredentials({ ...credentials, [e.target.name]: location });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.geolocation,
        phone: credentials.phone,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem("token", json.authToken);
      navigate("/login");
    } else {
      alert("Enter Valid Credentials");
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className={styles.container}>
      <h2>Signup</h2>
      <form className={styles.signupForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name : &nbsp; &nbsp; &nbsp; </label>
          <input
            name="name"
            type="text"
            id="name"
            placeholder="Enter your name"
            value={credentials.name}
            onChange={onChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="address">Address : &nbsp; </label>
          <input
            type="text"
            id="address"
            name="geolocation"
            placeholder='"Click below for fetching address"'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div>
          <button type="button" onClick={handleClick} name="geolocation">
            Click for current Location
          </button>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone : &nbsp;&nbsp;&nbsp; </label>
          <input
            type="number"
            id="phone"
            name="phone"
            placeholder="Enter your Phone"
            value={credentials.phone}
            onChange={onChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email : &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={credentials.email}
            onChange={onChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={credentials.password}
            onChange={onChange}
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>

      <div className={styles.footer}>
        <p>
          Already a user? <NavLink to="/login">Login here</NavLink>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
