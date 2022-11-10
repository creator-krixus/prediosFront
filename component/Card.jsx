import styles from '../styles/Card.module.css'
import { gql } from 'graphql-request'
import { useState } from 'react'

export default function Card({predio}) {
  
  const [show, setShow] = useState(true)

  const showEditPredio = () => {
    setShow(false)
  }
  const cancelar = () => {
    setShow(true)
  }
  const editPredio = () => {
    
    const data = {
      id: predio.id,
      avaluo : document.getElementsByName('avaluo')[0].value,
      nombre: document.getElementsByName('nombre')[0].value,
      departamento: document.getElementsByName('departamento')[0].value,
      municipio: document.getElementsByName('municipio')[0].value
    }
    const query = gql `
      mutation{
        updatePredio(updatePredioInput:{
            id: "${data.id}"
            avaluo: ${data.avaluo}
            nombre: "${data.nombre}"
            departamento: "${data.departamento}"
            municipio: "${data.municipio}"
        }){
          id
          avaluo
        }
      }
    `
    const endpoint = 'http://localhost:3001/graphql'

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Accept": 'application/json'
      },
      body: JSON.stringify({ query: query })
    }

    const response = fetch(endpoint, options).then((response) => {
      if (response.status >= 400) {
        throw new Error("Error fetching data");
      } else {
        return response.json();
      }
    }).then((data) => data.data);
  }
  
  const deletePrdedio = () => {
    const query = gql `
      mutation {
        removePredio(id:"${predio.id}"){
        id 
        }
      }
    `
    const endpoint = 'http://localhost:3001/graphql'

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Accept": 'application/json'
      },
      body: JSON.stringify({ query: query })
    }

    const response = fetch(endpoint, options).then((response) => {
      if (response.status >= 400) {
        throw new Error("Error fetching data");
      } else {
        return response.json();
      }
    })
    .then((data) => data.data);

    window.location.reload(true)
  }

  return (
    <div className={styles.card}>
        <h2>Identificador del predio:<span className={styles.data}> {predio.id}</span></h2>
        <p className={styles.title}>Avaluo del predio:{show ? <span className={styles.data}> {predio.avaluo}</span> : <input className={styles.cajas} type="number" id="avaluo" name="avaluo" required /> } </p>
        <p className={styles.title}>Nombre del predio: {show ? <span className={styles.data}> {predio.nombre}</span> : <input className={styles.cajas} type="text" id="nombre" name="nombre" onChange={editPredio} required />} </p>
        <p className={styles.title}>Departamento donde esta ubicado: {show ? <span className={styles.data}> {predio.departamento}</span> : <input className={styles.cajas} type="text" id="departamento" name="departamento"  required />} </p>
        <div>
          <p className={styles.title}>Municipio donde esta ubicado: {show ? <span className={styles.data}> {predio.municipio}</span> : <input className={styles.cajas} type="text" id="municipio" name="municipio"  required />} </p>
          <div className={styles.icons}>
            <i className="fa-solid fa-trash" onClick={deletePrdedio}></i>
            <i className="fa-solid fa-pen-to-square" onClick={showEditPredio}></i>
          </div>
        </div>
        {!show && <div className={styles.btns}><button onClick={editPredio} className={styles.btnSave}>Editar</button><button onClick={cancelar} className={styles.btnCancel}>Cancelar</button></div>}
    </div>
  )
}
