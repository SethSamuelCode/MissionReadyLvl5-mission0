import { useState,useEffect } from "react";

import styles from "./Navbar.module.css";
import React from "react";

import logo from "../assets/images/marketing_association_logo.jpg";

export default function Navbar() {
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    function updateWidowWidth() {
     setWindowWidth(window.innerWidth);
    }
    
    window.addEventListener("resize",updateWidowWidth)

    return () => window.removeEventListener("resize",updateWidowWidth)
  }, [])
  


  let mobileNavMenuStyle=`style.mobileMenuClosed`

  function toggleMobileMenu() {
    setHamburgerMenuOpen(!hamburgerMenuOpen)

    if(hamburgerMenuOpen){
      mobileNavMenuStyle = mobileNavMenuStyle=`style.mobileMenuOpen`
    } else{
      mobileNavMenuStyle=`style.mobileMenuClosed`
    }
  }

  return (
    <nav className={styles.container}>
      {/* // ------------------------ LEFT ------------------------ // */}

      <div className={styles.left}>
        <img
          src={logo}
          alt="logo"
          className={styles.logo}
        />
        <h1>Marketing Association NZ </h1>
        {windowWidth}
      </div>

      {/* // ------------------------ RIGHT ----------------------- // */}

      <div className={styles.right}>
        <ul className={[styles.navLinks,mobileNavMenuStyle].join(' ') }>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <button className={styles.buttonLogin}>LOGIN</button>
          </li>
        </ul>
        <div className={styles.hamburger} onClick={toggleMobileMenu}>
          <div className={styles.hamburgerPatty}></div>
          <div className={styles.hamburgerPatty}></div>
          <div className={styles.hamburgerPatty}></div>
        </div>
      </div>
    </nav>
  );
}
