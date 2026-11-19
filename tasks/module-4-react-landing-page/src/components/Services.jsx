
import styles from './Services.module.css'

function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.heading}>
        <p>WHAT WE OFFER</p>
        <h2>Our Services</h2>
        <span>
          Practical technology solutions to help your business succeed.
        </span>
      </div>

      <div className={styles.serviceCards}>
        <div className={styles.card}>
          <h3>Web Development</h3>
          <p>
            We build modern, responsive, and user-friendly websites
            for businesses and organisations.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Digital Consulting</h3>
          <p>
            We help businesses identify digital opportunities and
            use technology to improve their operations.
          </p>
        </div>

        <div className={styles.card}>
          <h3>IT Support</h3>
          <p>
            We provide reliable technical support to help businesses
            maintain effective digital operations.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services
