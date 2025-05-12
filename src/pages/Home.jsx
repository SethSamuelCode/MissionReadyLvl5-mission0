// Import React hooks and required components
import {useState} from "react";

import Navbar from "../components/Navbar";
import styles from "./Home.module.css";
import Card from "../components/Card";

// Import images
import logo from "../assets/images/marketing_association_logo.jpg";
import background from "../assets/images/bg.webp";

export default function Home() {
  // State for the search input
  const [inputSearch, setInputSearch] = useState(null)

  // Handle form submission
  function formSubmit(e) {
    e.preventDefault()
    console.log(inputSearch)
  }

  return (
    // Main container for the Home page
    <div className={styles.container}>
      {/* Navigation bar at the top */}
      <Navbar />
      {/* ---------------------- BIG IMAGE ---------------------  */}
      <div className={styles.imageArea}>
        {/* Hero background image */}
        <img
          src={background}
          alt="background"
        />
        {/* Overlayed heading text */}
        <h1 className={styles.imageWords} >words on a page</h1>

        {/* Search form overlayed on the image */}
        <div className={styles.formContainer}>
          <form onSubmit={formSubmit}>
            <input
              type="text"
              name="search"
              id="search"
              onChange={(e)=>setInputSearch(e.target.value)}
            />
            <button>Search</button>
          </form>
        </div>
      </div>

      {/* ---------------------- CARD AREA --------------------- */}
      <div className={styles.cardHolder}>
        {/* Example cards displayed below the hero image */}
        <Card
          image={logo}
          title="Card 1"
          subtitle="hello world"></Card>
        <Card
          image={logo}
          title="Card 2"
          subtitle="world hello"></Card>
        <Card
          image={logo}
          title="card 3"
          subtitle="Morning sunshine"></Card>
      </div>
    </div>
  );
}
