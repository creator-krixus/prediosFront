import Layout from "../component/Layout"
import styles from '../styles/Singup.module.css'
import Image from 'next/image'

export default function singup() {
    const handleSubmit = async (event) => {
      event.preventDefault()
    
      const crearId = () => {
        let id = new Date().getTime();
        let uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            let res = (id + Math.random() * 16) % 16 | 0;
            id = Math.floor(id / 16);
            return (c == 'x' ? res : (res & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    }
  
      // Get data from the form.
      const data = {
        id: crearId(),
        avaluo: parseInt(event.target.avaluo.value),
        nombre: event.target.nombre.value,
        departamento: event.target.departamento.value,
        municipio: event.target.municipio.value,
        propietarios: [
          {
            propietario:event.target.propietario1.value,
            tipoPropietario:event.target.tipoPropietario1.value,
            tipoDocumento:event.target.tipoDocumento1.value,
            numeroDocumento:event.target.documentoNumero1.value,
            nombres:event.target.nombreNumero1.value,
            apellidos:event.target.apellidoNumero1.value,
            direccion:event.target.direccionNumero1.value,
            email:event.target.emailNumero1.value,
            phone:event.target.phoneNumero1.value
          },
          {
            propietario2:event.target.propietario2.value,
            tipoPropietario:event.target.tipoPropietario2.value,
            tipoDocumento:event.target.tipoDocumento2.value,
            numeroDocumento:event.target.documentoNumero2.value,
            nombres:event.target.nombreNumero2.value,
            apellidos:event.target.apellidoNumero2.value,
            direccion:event.target.direccionNumero2.value,
            email:event.target.emailNumero2.value,
            phone:event.target.phoneNumero2.value
          },
          {
            propietario3:event.target.propietario3.value,
            tipoPropietario:event.target.tipoPropietario3.value,
            tipoDocumento:event.target.tipoDocumento3.value,
            numeroDocumento:event.target.documentoNumero3.value,
            nombres:event.target.nombreNumero3.value,
            apellidos:event.target.apellidoNumero3.value,
            direccion:event.target.direccionNumero3.value,
            email:event.target.emailNumero3.value,
            phone:event.target.phoneNumero3.value
          },
        ],
        construcciones:[{
          contrucciones:event.target.construcciones.value,
          pisos:event.target.pisos.value,
          area:event.target.area.value,
          construccion:event.target.construccion.value
        }],
        terreno:{
          ubicacion:event.target.terreno.value,
          fuentesAgua:event.target.fuenteAgua.value,
          valorComercial:event.target.valorComercial.value
        }
      }
      
      const query = `
      mutation {
        createPredio (createPredioInput:{
          id: "2bba43d6cb45410295f9f25c070fbe87"
          avaluo: 123131231
          nombre: "Eliana"
          departamento: "antioquia"
          municipio: "marinilla"
        }){
          id
          avaluo
          nombre
          departamento
          municipio
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
  
    }
  return (
    <Layout>
    <div className={styles.container}>
      <div className={styles.containerImage}>
      <Image src="/images/reu.png" alt="oficinas" width={750} height={1200} className={styles.imagenTwo}/>
      </div>
      <div className={styles.containerForm}>
      <form className={styles.formulario} onSubmit={handleSubmit}>
        <label htmlFor="avaluo">Avaluo</label>
        <input className={styles.cajas} type="number" id="avaluo" name="avaluo" required />

        <label htmlFor="nombre">Nombre</label>
        <input className={styles.cajas} type="text" id="nombre" name="nombre" required />

        <label htmlFor="departamento">Departamento</label>
        <input className={styles.cajas} type="text" id="departamento" name="departamento" required />

        <label htmlFor="municipio">Municipio</label>
        <input className={styles.cajas} type="text" id="municipio" name="municipio" required />

        <label htmlFor="propietarios">Propietarios</label>
        {/* propietario1================================================== */}
          <div>
            <label htmlFor="propietario1">propietario 1</label>
            <input type="radio" id="propietario1" name="propietario1" value="uno" required />
          </div>
          <div className={styles.propietarios}>
            <select id="tipoPropietario1" name="tipoPropietario1" className={styles.select}>
              <option disabled="disabled" selected>Tipo de persona</option>
              <option value="Persona Juridica">Persona Juridica</option>
              <option value="Persona natural">Persona natural</option>
            </select>
            <select id="tipoDocumento1" name="tipoDocumento1" className={styles.select}>
              <option disabled="disabled" selected>Tipo de documento</option>
              <option value="Nit">NIT</option>
              <option value="Cedula">Cedula</option>
            </select>
            <input className={styles.cajas} type="number" id="documentoNumero1" name="documentoNumero1" placeholder="Numero de documento" required />
            <input className={styles.cajas} type="text" id="nombreNumero1" name="nombreNumero1" placeholder="Nombres" required/>
            <input className={styles.cajas} type="text" id="apellidoNumero1" name="apellidoNumero1" placeholder="Nombres" required/>
            <input className={styles.cajas} type="text" id="direccionNumero1" name="direccionNumero1" placeholder="Direccion" required/>
            <input className={styles.cajas} type="text" id="emailNumero1" name="emailNumero1" placeholder="Correo electronico" required/>
            <input className={styles.cajas} type="number" id="phoneNumero1" name="phoneNumero1" placeholder="Telefono" required/>
          </div>
          {/* propietario2================================================== */}
          <div>
            <label htmlFor="propietario2">propietario 2</label>  
            <input type="radio" id="propietario2" name="propietario2" value="dos"/>
          </div>
          <div className={styles.propietarios}>
            <select id="tipoPropietario2" name="tipoPropietario2" className={styles.select}>
              <option disabled="disabled" selected>Tipo de persona</option>
              <option value="Persona Juridica">Persona Juridica</option>
              <option value="Persona natural">Persona natural</option>
            </select>
            <select id="tipoDocumento2" name="tipoDocumento2" className={styles.select}>
              <option disabled="disabled" selected>Tipo de documento</option>
              <option value="Nit">NIT</option>
              <option value="Cedula">Cedula</option>
            </select>
            <input className={styles.cajas} type="number" id="documentoNumero2" name="documentoNumero2" placeholder="Numero de documento"/>
            <input className={styles.cajas} type="text" id="nombreNumero2" name="nombreNumero2" placeholder="Nombres"/>
            <input className={styles.cajas} type="text" id="apellidoNumero2" name="apellidoNumero2" placeholder="Apellidos" />
            <input className={styles.cajas} type="text" id="direccionNumero2" name="direccionNumero2" placeholder="Direccion" />
            <input className={styles.cajas} type="text" id="emailNumero2" name="emailNumero2" placeholder="Correo electronico" />
            <input className={styles.cajas} type="number" id="phoneNumero2" name="phoneNumero2" placeholder="Telefono"/>
          </div>
          {/* propietario3======================================== */}
          <div>
            <label htmlFor="propietario3">propietario 3</label>  
            <input type="radio" id="propietario3" name="propietario3" value="tres"/>
          </div>
          <div className={styles.propietarios}>
            <select id="tipoPropietario3" name="tipoPropietario3" className={styles.select}>
              <option disabled="disabled" selected>Tipo de persona</option>
              <option value="Persona Juridica">Persona Juridica</option>
              <option value="Persona natural">Persona natural</option>
            </select>
            <select id="tipoDocumento3" name="tipoDocumento3" className={styles.select}>
              <option disabled="disabled" selected>Tipo de documento</option>
              <option value="Nit">NIT</option>
              <option value="Cedula">Cedula</option>
            </select>
            <input className={styles.cajas} type="number" id="documentoNumero3" name="documentoNumero3" placeholder="Numero de documento"/>
            <input className={styles.cajas} type="text" id="nombreNumero3" name="nombreNumero3" placeholder="Nombres"/>
            <input className={styles.cajas} type="text" id="apellidoNumero3" name="apellidoNumero3" placeholder="Apellidos" />
            <input className={styles.cajas} type="text" id="direccionNumero3" name="direccionNumero3" placeholder="Direccion" />
            <input className={styles.cajas} type="text" id="emailNumero3" name="emailNumero3" placeholder="Correo electronico" />
            <input className={styles.cajas} type="number" id="phoneNumero3" name="phoneNumero3" placeholder="Telefono"/>
          </div>
        <div className={styles.construcciones}>
            <div>
              <label htmlFor="construcciones">Construcciones</label>
              <input className={styles.radios} type="radio" id="construcciones" name="construcciones" value="Si" required />
              <label htmlFor="construcciones">Si</label>
              <input className={styles.radios} type="radio" id="construcciones" name="construcciones" value="No" required />
              <label htmlFor="construcciones">No</label>
            </div>
            <div className={styles.dataConstrucciones}>
              <label htmlFor="pisos">Numero de pisos</label>
              <input className={styles.cajas} type="number" id="pisos" name="pisos" required />
              <label htmlFor="area">Area total</label>
              <input className={styles.cajas} type="number" id="area" name="area" required />
              <label htmlFor="direccion">Direccion</label>
              <input className={styles.cajas} type="text" id="direccion" name="direccion" required />
              <div>
                <label htmlFor="construccion">Construccion</label>
                <div>
                  <input className={styles.radios} type="radio" id="construccion" name="construccion" value="Industrial" required />
                  <label htmlFor="construccion">Industrial</label>
                  <input className={styles.radios} type="radio" id="construccion" name="construccion" value="Comercial" required />
                  <label htmlFor="construccion">Comercial</label>
                  <input className={styles.radios} type="radio" id="construccion" name="construccion" value="Residencial" required />
                  <label htmlFor="construccion">Residencial</label>
                </div>
            </div>
            </div>
        </div>
        <div className={styles.terreno}>
            <div>
              <label htmlFor="terreno">Terreno</label>
              <input className={styles.radios} type="radio" id="terreno" name="terreno" value="Rural" required />
              <label htmlFor="terreno">Rural</label>
              <input className={styles.radios} type="radio" id="terreno" name="terreno" value="Urbano" required />
              <label htmlFor="terreno">Urbano</label>
            </div>
            <div>
              <label htmlFor="fuenteAgua">Fuentes de agua</label>
              <input className={styles.radios} type="radio" id="fuenteAgua" name="fuenteAgua" value="Si" required />
              <label htmlFor="fuenteAgua">Si</label>
              <input className={styles.radios} type="radio" id="fuenteAgua" name="fuenteAgua" value="No" required />
              <label htmlFor="fuenteAgua">No</label>
            </div>
              <label htmlFor="valorComercial">Valor comercial</label>
              <input className={styles.cajas} type="number" id="valorComercial" name="valorComercial" required />
        </div>

        <button className={styles.btn} type="submit">Submit</button>
      </form>
      </div>
    </div>
    </Layout>

  )
}
