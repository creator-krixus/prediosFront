import Card from "../component/Card";
import Layout from "../component/Layout"
import styles from '../styles/Predios.module.css'
//importacion de la conexion y querys del backend mientras aprendo como hacerlo con redux 
import client from '../GraphQL/Graphql.client'
import { query } from "../GraphQL/Querys";


export const getStaticProps = async () => {
    const data = await client.request(query)    
    return {
        props: { data }
    }
}

export default function predios({data}) {
    return (
        <Layout>
            <div className={styles.predios}>
                {
                    data.GetPredios.map(predio => (
                    <Card key={predio.id} predio={predio}/>
                    ))
                }
            </div>
        </Layout>
  )
}
