import React from 'react'
import Persons from '../components/Persons'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import { IPersons } from '../interface'

const IndexPage = ({ data }: IPersons) => {
  return (
    <Layout>
      <h2 className="text-3xl font-bold	mb-4">List of persons</h2>
      <Persons data={data} />
    </Layout>
  )
}
export default IndexPage

export const query = graphql`
  query loadPersionsQuery {
    allContentfulPerson(filter: { node_locale: { eq: "en-US" } }) {
      nodes {
        slug
        name
      }
    }
  }
`
