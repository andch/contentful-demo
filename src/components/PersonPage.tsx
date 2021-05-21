import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import { IPerson } from '../interface'

const PersionPage = ({ data }: IPerson) => {
  const { name, body } = data.contentfulPerson

  return (
    <Layout>
      <h1>{name}</h1>
      <p>{body && body.childMarkdownRemark.excerpt}</p>
    </Layout>
  )
}

export default PersionPage

export const query = graphql`
  query($slug: String!) {
    contentfulPerson(slug: { eq: $slug }) {
      name
      slug
      body {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 320)
        }
      }
    }
  }
`
