import { useState, useEffect } from "react";

import styles from "./Navbar.module.css";

import logo from "../assets/images/marketing_association_logo.jpg";

export default function Navbar() {
  // State to track if the hamburger menu is open
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
  // State to track the current window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // State to control which navbar style is applied (desktop or mobile)
  const [navBarStyle,setNavBarStyle] = useState(styles.navDesktop)

  let timeoutId;
  const debounceDelay = 200;
  useEffect(() => {
    // Debounced window resize handler to update windowWidth
    function updateWidowWidth() {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
        setWindowWidth(window.innerWidth);
      }, debounceDelay);
    }

    window.addEventListener("resize", updateWidowWidth);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", updateWidowWidth);
  }, []);

  useEffect(() => {
    // Switch between desktop and mobile navbar styles based on window width
    if(windowWidth>768){
      setNavBarStyle(styles.navDesktop)
    } else{
      setNavBarStyle(styles.navMobileClosed)
    }
  }, [windowWidth])
  
  // Toggle the mobile menu open/closed
  function toggleMobileMenu() {
    setHamburgerMenuOpen(!hamburgerMenuOpen);
    if (hamburgerMenuOpen) {
      setNavBarStyle(styles.navMobileOpen)
    } else {
      setNavBarStyle(styles.navMobileClosed)
    }
  }

  return (
    // Main navigation container
    <nav className={styles.container}>
      {/* ------------------------ LEFT ------------------------ */}
      <div className={styles.left}>
        {/* Logo image */}
        <img
          src={logo}
          alt="logo"
          className={styles.logo}
        />
        {/* Site title */}
        <h1>Marketing Association NZ </h1>
      </div>

      {/* ------------------------ RIGHT ----------------------- */}
      <div className={styles.right}>
        {/* Navigation links (desktop or mobile) */}
        <ul className={navBarStyle}>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            {/* Login button */}
            <button className={styles.buttonLogin}>LOGIN</button>
          </li>
        </ul>
        {/* Hamburger menu icon for mobile */}
        <div
          className={styles.hamburger}
          onClick={toggleMobileMenu}>
          <div className={styles.hamburgerPatty}></div>
          <div className={styles.hamburgerPatty}></div>
          <div className={styles.hamburgerPatty}></div>
        </div>
      </div>
    </nav>
  );
}
