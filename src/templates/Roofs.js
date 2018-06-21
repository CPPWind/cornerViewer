import React from 'react'
import CornersList from '../components/CornersList'
import BigRoof from '../components/BigRoof'
import CurrentCorner from '../components/CurrentCorner'

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

class Roofs extends React.Component {
  constructor(props) {
    super(props)
    const roof = this.props.data.allResponsesJson.edges[0].node.roof

    this.state = {
      selectedId: roof.corners.filter(c => c.orientation)[0].id,
    }
    this.selectCorner = this.selectCorner.bind(this)
  }

  selectCorner(newCornerId) {
    this.setState({ selectedId: newCornerId })
  }

  render() {
    const roof = this.props.data.allResponsesJson.edges[0].node.roof
    const corners = roof.corners
    const selected = corners.find(c => c.id === this.state.selectedId)
    return (
      <main className="response">
        <section className="cornersList">
          <CornersList corners={corners} selectCorner={this.selectCorner} />
        </section>
        <section className="double">
          <BigRoof corners={corners} selectedCorner={selected} />
        </section>
        <CurrentCorner corner={selected} />
      </main>
    )
  }
}

export default Roofs

export const roofQuery = graphql`
    query RoofQuery($name: String) {
        allResponsesJson(
            limit: 1
            filter: {name: {eq: $name}}
        ) {
            edges {
                node {
                    name
                    roof {
                        corners {
                            id
                            orientation
                            coordinate {
                                x
                                y
                                z
                            }
                            walls {
                                NorthSouth {
                                    id
                                    corners
                                    length
                                }
                                EastWest {
                                    id
                                    corners
                                    length
                                }
                            }
                        }
                    }
                }
            }
        }
    }

`
