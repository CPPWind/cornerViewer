import React from 'react'
import RoofCard from '../components/RoofCard'
import Roof from '../models/Roof';
import Rules from '../components/Rules';

const colors = [
  'white',
  'red',
  'blue',
  'green',
  'yellow',
  'aqua',
  'purple',
  'orange',
  'pink',
  'black',
]

const TestingPage = ({ data }) => {
  console.log(data)
  const roofs = data.allShapesJson.edges.map(edge => new Roof(edge.node).props)
  const cards = roofs.map(roof => <RoofCard roof={roof} key={roof.key} />)
  return (
    <main>
      <div className="cardGrid">
        {cards}
      </div>
    </main>
  )
}

export default TestingPage

export const testingPageQuery = graphql`
  query testingPageQuery {
    allShapesJson(sort: {fields: [sortOrder]}) {
      edges {
        node {
          name
          invertY
          box
          corners {
            id
            orientation
            coordinate {
              x
              y
            }
          }
          expected
        }
      }
    }
  }
`
