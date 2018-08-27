import React from 'react'
import { ApolloProvider } from 'react-apollo'

import { client } from '../graphql'
import HallOfShame from './HallOfShame/HallOfShame'

const App = () => (
  <ApolloProvider client={client}>
    <HallOfShame />
  </ApolloProvider>
)

export default App
