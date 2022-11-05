import styles from '../styles/Card.module.css'
// import Link from 'next/link';

export default function Card({predio}) {
  return (
    <div className={styles.card}>
        <h2>Identificador del predio: {predio.id}</h2>
        <p>Avaluo del predio: {predio.avaluo}</p>
        <p>Nombre del predio: {predio.nombre}</p>
        <p>Departamento donde esta ubicado: {predio.departamento}</p>
        <p>Municipio donde esta ubicado: {predio.municipio}</p>
    </div>
  )
}
