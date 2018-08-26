import gql from 'graphql-tag'

import { client } from './graphql'

const div = document.createElement('div')
div.id = 'root'
document.body.appendChild(div)

client
  .query({
    query: gql`
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
  })
  .then(result => {
    div.innerHTML = JSON.stringify(result.data)
  })
