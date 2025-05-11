import { useState, useEffect } from "react";

import styles from "./Navbar.module.css";

import logo from "../assets/images/marketing_association_logo.jpg";

export default function Navbar() {
  // State to track if the hamburger menu is open
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
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
  
  //this use effect has to be above the inital set window size use effect.
  //this is because on page load it the hamburger menu is closed so it sets the navbar style to navMobileClosed making the navbar disappear  
  useEffect(() => {
    if (hamburgerMenuOpen) {
      setNavBarStyle(styles.navMobileOpen);
      setModalBackgroundStyle(styles.modalOpen);
    } else {
      setNavBarStyle(styles.navMobileClosed);
      setModalBackgroundStyle(styles.modalClosed);
    }
  }, [hamburgerMenuOpen]);

  // set the initial window size
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
      setNavBarStyle(styles.navDesktop);
      setHamburgerMenuOpen(false);
    } else {
      setNavBarStyle(styles.navMobileClosed);
    }
  }, [windowWidth]);

  // open mobile menu
  function openMobileMenu() {
    setHamburgerMenuOpen(true);
  }

  //close the hamburger menu
  function closeMobileMenu() {
    setHamburgerMenuOpen(false);
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
