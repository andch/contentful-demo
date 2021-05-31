import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import { IPerson } from '../interface'

const PersionPage = ({ data }: IPerson) => {
  const { name, body } = data.contentfulPerson

  return (
    <Layout>
      <h1 className="text-3xl font-bold	mb-4">{name}</h1>
      <p>{body && body.childMarkdownRemark.excerpt}</p>
      <Link
        className="mt-4 block underline text-gray-600 mb-1 block hover:no-underline hover:text-gray-900"
        to="/"
      >
        ❮ Back
      </Link>
    </Layout>
  )
}

export default PersionPage

export const query = graphql`
  query ($slug: String!) {
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
