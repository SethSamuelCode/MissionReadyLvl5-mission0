import React from "react";
import styles from "./Contact.module.css";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div className={styles.container}>
      <Navbar></Navbar>
      <div>Contact</div>
    </div>
  );
}
