
import styles from './Contact.module.css'

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.contactContent}>
        <p className={styles.label}>GET IN TOUCH</p>

        <h2>Let's Work Together</h2>

        <p>
          Have a project in mind or need reliable technology solutions?
          We would love to hear from you.
        </p>

        <div className={styles.contactDetails}>
          <p>Email: info@techbridgesolutions.com</p>
          <p>Phone: +234 800 000 0000</p>
        </div>

        <a
          href="mailto:info@techbridgesolutions.com"
          className={styles.contactButton}
        >
          Send Us an Email
        </a>
      </div>
    </section>
  )
}

export default Contact
