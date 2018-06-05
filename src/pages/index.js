import React from 'react'
import Link from 'gatsby-link'

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

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedId: '1',
    }
    this.selectCorner = this.selectCorner.bind(this)
  }

  selectCorner(newCornerId) {
    this.setState({ selectedId: newCornerId })
  }

  render() {
    const names = this.props.data.allResponsesJson.edges
      .map(edge => {
        return {
          name: edge.node.name,
          slug: edge.node.name.replace(/\W/g, ''),
        }
      })
      .map(roof => (
        <Link to={roof.slug}>
          <div key={roof.slug} className="roofBadge ma0 br3 pa3 ba bg-blue">
            {roof.name}
          </div>
        </Link>
      ))
    return (
      <main className="IndexPage">
        <h1 className="tc ma0 bg-dark-blue near-white"> Welcome</h1>
        <section className="ma0 list">{names}</section>
      </main>
    )
  }
}

export default IndexPage

export const indexPageQuery = graphql`
    query indexPageQuery {
        allResponsesJson {
            edges {
                node {
                    name
                }
            }
        }
    }
`
