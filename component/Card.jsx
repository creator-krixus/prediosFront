import styles from '../styles/Card.module.css'

export default function Card({predio}) {
  return (
    <div className={styles.card}>
        <h2>Identificador del predio:<span className={styles.data}> {predio.id}</span></h2>
        <p className={styles.title}>Avaluo del predio: <span className={styles.data}> {predio.avaluo}</span></p>
        <p className={styles.title}>Nombre del predio: <span className={styles.data}> {predio.nombre}</span></p>
        <p className={styles.title}>Departamento donde esta ubicado: <span className={styles.data}> {predio.departamento}</span></p>
        <p className={styles.title}>Municipio donde esta ubicado: <span className={styles.data}> {predio.municipio}</span></p>
    </div>
  )
}
