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
            <Link
              className="underline text-gray-600 mb-1 block hover:no-underline hover:text-gray-900"
              to={`/person/${persion.slug}`}
            >
              {persion.name}
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Persions
