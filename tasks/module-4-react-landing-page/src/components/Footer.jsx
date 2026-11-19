
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <h2>TechBridge Solutions</h2>

        <p>
          Connecting technology with possibilities.
          Building digital solutions for a better future.
        </p>

        <p className={styles.copyright}>
          &copy; 2026 TechBridge Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
