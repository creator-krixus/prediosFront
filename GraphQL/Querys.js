import { gql } from 'graphql-request'

export const query = gql`
    query{
        GetPredios{
        id
        avaluo
        nombre
        departamento
        municipio
        }
    }`
