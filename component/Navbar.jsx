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
        <div>
            <Link href="/singup">
                <button className={styles.btnRegistro}>Registrar</button>
            </Link>
        </div>
    </div>
  )
}
