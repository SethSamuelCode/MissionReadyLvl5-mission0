import React from 'react'
import styles from './Page404.module.css'
import Navbar from '../components/Navbar'
export default function Page404() {
  return (
    <div className={styles.container}>
      <Navbar></Navbar>
      <p className={styles.message}>The page you are looking for cant be found.</p>
    </div>
  )
}
