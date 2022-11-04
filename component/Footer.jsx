import styles from '../styles/Footer.module.css'
export default function Footer() {
  return (
    <footer className={styles.footer}>
    <a
      href="https://personal-page-wilson.herokuapp.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by{' '}
      <span className={styles.logo}>
        @Wilson Rueda
      </span>
    </a>
  </footer>
  )
}
