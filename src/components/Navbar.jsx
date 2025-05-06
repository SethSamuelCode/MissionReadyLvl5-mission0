import styles from "./Navbar.module.css";
import React from "react";

import logo from "../assets/images/marketing_association_logo.jpg";

export default function Navbar() {
  return (

      <nav className={styles.container}>
{/* // ------------------------ LEFT ------------------------ // */}

        <div className={styles.left}>
          <img
            src={logo}
            alt="logo"
            className={styles.logo}
          />
          <h1>Marketing NZ</h1>
        </div>

{/* // ------------------------ RIGHT ----------------------- // */}

        <div className={styles.right}>
          <ul className={styles.navLinks}>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>

  );
}
