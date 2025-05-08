import { useState, useEffect } from "react";

import styles from "./Navbar.module.css";

import logo from "../assets/images/marketing_association_logo.jpg";

export default function Navbar() {
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  //navbar style
  const [navBarStyle,setNavBarStyle] = useState(styles.navDesktop)

  let timeoutId;
  const debounceDelay = 200;
  useEffect(() => {
    //debounce to reduce rerenders
    
    function updateWidowWidth() {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
        setWindowWidth(window.innerWidth);
      }, debounceDelay);
    }

    window.addEventListener("resize", updateWidowWidth);

    return () => window.removeEventListener("resize", updateWidowWidth);
  }, []);

  useEffect(() => {
    
  if(windowWidth>768){
    setNavBarStyle(styles.navDesktop)
  } else{
    setNavBarStyle(styles.navMobileClosed)
  }

  }, [windowWidth])
  

  function toggleMobileMenu() {
    setHamburgerMenuOpen(!hamburgerMenuOpen);

    if (hamburgerMenuOpen) {
      setNavBarStyle(styles.navMobileOpen)
    } else {
      setNavBarStyle(styles.navMobileClosed)
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
      </div>

      {/* // ------------------------ RIGHT ----------------------- // */}

      <div className={styles.right}>
        <ul className={navBarStyle}>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <button className={styles.buttonLogin}>LOGIN</button>
          </li>
        </ul>
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
