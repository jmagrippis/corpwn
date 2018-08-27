import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const query = gql`
  {
    victim(id: "dis guy") {
      name
      pwns {
        timestamp
        nickname
        comment
      }
    }
  }
`

const HallOfShame = () => (
  <Query query={query}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error :(</p>

      return <div>{JSON.stringify(data.victim)}</div>
    }}
  </Query>
)

export default HallOfShame
