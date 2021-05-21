import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import { IPersons } from '../interface'
import { Link } from 'gatsby'

const Persions = ({ data }: IPersons) => {
  const dataPersions = data.allContentfulPerson.nodes

  return (
    <div>
      {dataPersions.map((persion) => {
        return (
          <div key={persion.slug}>
            <Link to={`/person/${persion.slug}`}>{persion.name}</Link>
          </div>
        )
      })}
    </div>
  )
}

export default Persions
