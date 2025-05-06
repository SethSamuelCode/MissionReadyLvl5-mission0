import {useState} from "react";

import Navbar from "../components/Navbar";
import styles from "./Home.module.css";
import Card from "../components/Card";


import logo from "../assets/images/marketing_association_logo.jpg";
import background from "../assets/images/backgroundHero.png";

export default function Home() {
  const [inputSearch, setInputSearch] = useState(null)

  function formSubmit(e) {
    e.preventDefault()
    console.log(inputSearch)
  }

  return (
    <div className={styles.container}>
      <Navbar />
      {/*// ---------------------- BIG IMAGE ---------------------  */}
      <div className={styles.imageArea}>
        <img
          src={background}
          alt="background"
        />
        <h1>words on a page</h1>

        <div>
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

      {/* // ---------------------- CARD AREA --------------------- // */}

      <div className={styles.cardHolder}>
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
