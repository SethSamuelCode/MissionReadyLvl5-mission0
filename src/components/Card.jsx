// Import React and CSS module for styling
import React from "react";
import styles from "./Card.module.css";

// Card component displays an image, a title, and a subtitle
export default function Card({ image, title, subtitle }) {
  return (
    // Card container
    <div className={styles.container}>
      {/* Card image */}
      <img
        src={image}
        alt=""
      />
      {/* Bottom text area with title and subtitle */}
      <div className={styles.bottomText}>
        {/* Card title */}
        <p className={styles.title}>{title}</p>
        {/* Card subtitle */}
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </div>
  );
}
