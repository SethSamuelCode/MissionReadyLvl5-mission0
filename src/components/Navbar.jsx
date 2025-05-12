import { useState, useEffect } from "react";

import styles from "./Navbar.module.css";

import logo from "../assets/images/marketing_association_logo.jpg";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  // State to track the current window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // State to control which navbar style is applied (desktop or mobile)
  const [navBarStyle, setNavBarStyle] = useState(styles.navDesktop);
  // state to control if the mobile navbar background is shown
  const [modalBackgroundStyle, setModalBackgroundStyle] = useState(styles.modalClosed);

  //to store the id of the timeout used for rate limiting the window width updates
  let timeoutId;
  // the wait time in ms the window with has to stay steady before it updates.
  // this is to prevent re-renders while the windows in being resized.
  const debounceDelay = 200;

  // set the initial window size, this is used for enabling and disabling the hamburger menu
  useEffect(() => {
    // Debounced window resize handler to update windowWidth
    function updateWidowWidth() {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWindowWidth(window.innerWidth);
      }, debounceDelay);
    }

    //event listener to detect when the window is resized
    window.addEventListener("resize", updateWidowWidth);
    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", updateWidowWidth);
  }, []);

  useEffect(() => {
    // Switch between desktop and mobile navbar styles based on window width
    if (windowWidth > 768) {
      setModalBackgroundStyle(styles.modalClosed);
      setNavBarStyle(styles.navDesktop);
    } else {
      setNavBarStyle(styles.navMobileClosed);
    }
  }, [windowWidth]);

  // open mobile menu
  function openMobileMenu() {
    // setHamburgerMenuOpen(true);
    setNavBarStyle(styles.navMobileOpen);
    setModalBackgroundStyle(styles.modalOpen);
  }

  //close the hamburger menu
  function closeMobileMenu() {
    // setHamburgerMenuOpen(false);
    setNavBarStyle(styles.navMobileClosed);
    setModalBackgroundStyle(styles.modalClosed);
  }
  //use css styles to open and close the hamburger menu

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
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li>
            {/* Login button */}
            <button className={styles.buttonLogin}>LOGIN</button>
          </li>
        </ul>
        {/* Hamburger menu icon for mobile */}
        <div
          className={styles.hamburger}
          onClick={openMobileMenu}>
          <div className={styles.hamburgerPatty}></div>
          <div className={styles.hamburgerPatty}></div>
          <div className={styles.hamburgerPatty}></div>
        </div>
        {/* the back ground so you can close the menu */}
        <div
          className={modalBackgroundStyle}
          onClick={closeMobileMenu}></div>
      </div>
    </nav>
  );
}
