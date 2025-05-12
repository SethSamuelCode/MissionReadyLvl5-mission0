import React from "react";
import styles from "./About.module.css";
import Navbar from "../components/Navbar";

export default function About() {
  return(

    <div className={styles.container}>
    <Navbar></Navbar>
    <p className={styles.message}>About page</p>
  </div>
  )
}
