import Navbar from '../components/Navbar'
import styles from './Home.module.css'  
import Card from '../components/Card'

import logo from "../assets/images/marketing_association_logo.jpg";

export default function Home() {
  return (
    <div className={styles.container} >
        <Navbar/>
        test
// ---------------------- BIG IMAGE --------------------- //
// ---------------------- CARD AREA --------------------- //

<Card image={logo} title="test" subtitle="hello world" ></Card>

    </div>
  )
}
