import React from "react";
import styles from "./Card.module.css";

export default function Card({ image, title, subtitle }) {
  return (
    <div className={styles.container}>
      <img
        src={image}
        alt=""
      />
      <div className={styles.bottomText}>
        <p className={styles.title}  >{title}</p>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </div>
  );
}
