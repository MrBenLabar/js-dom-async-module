
import styles from './About.module.css'

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.aboutContent}>
        <p className={styles.label}>ABOUT US</p>

        <h2>Technology That Moves Your Business Forward</h2>

        <p>
          TechBridge Solutions is a technology-focused company
          committed to helping businesses and organisations solve
          problems through practical digital solutions.
        </p>

        <p>
          We combine creativity, technical knowledge, and reliable
          support to help our clients work smarter and achieve
          sustainable growth.
        </p>
      </div>
    </section>
  )
}

export default About
