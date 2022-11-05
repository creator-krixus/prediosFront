import Card from "../component/Card";
import {  GraphQLClient, gql } from 'graphql-request'
import Layout from "../component/Layout"
import styles from '../styles/Predios.module.css'

export const getStaticProps = async () => {
    const endpoint = 'http://localhost:3001/graphql'
    const client = new GraphQLClient(endpoint)
    const query = gql`
        query{
            GetPredios{
            id
            avaluo
            nombre
            departamento
            municipio
            }
        }`
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
