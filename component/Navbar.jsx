import Link from "next/link"
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles.navbar}>
        <div className="logo">
            <Link href="/">
                <h1>Catastro</h1>
            </Link>
        </div>
        <div className="styles.btns">
            <Link href="/predios">
                <button className={styles.btnRegistro}>Predios</button>
            </Link>
            <Link href="/singup">
                <button className={styles.btnRegistro}>Registrar</button>
            </Link>
        </div>
    </div>
  )
}
