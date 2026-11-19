
import styles from './Hero.module.css'

function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroContent}>
        <p className={styles.tagline}>WELCOME TO TECHBRIDGE SOLUTIONS</p>

        <h1>
          Connecting Technology
          <span> With Possibilities</span>
        </h1>

        <p className={styles.description}>
          We help businesses grow through innovative technology,
          reliable digital solutions, and professional support.
        </p>

        <a href="#services" className={styles.heroButton}>
          Explore Our Services
        </a>
      </div>
    </section>
  )
}

export default Hero
