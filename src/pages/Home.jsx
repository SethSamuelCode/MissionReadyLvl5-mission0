import Navbar from "../components/Navbar";
import styles from "./Home.module.css";
import Card from "../components/Card";

import logo from "../assets/images/marketing_association_logo.jpg";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      {/*// ---------------------- BIG IMAGE ---------------------  */}
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
