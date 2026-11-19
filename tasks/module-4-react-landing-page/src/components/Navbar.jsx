
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        TechBridge<span>Solutions</span>
      </div>

      <ul className={styles.navLinks}>
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
      </ul>

      <a href="#contact" className={styles.contactButton}>
        Contact Us
      </a>
    </nav>
  )
}

export default Navbar
