const path = require('path')
const moment = require('moment')

const templatePath = (dir, template) => {
  return path.resolve('src', 'templates', dir, template + '.js')
}

const BUILD_DATE = moment().format()
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        query {
          allResponsesJson {
            edges {
              node {
                name
              }
           }
          }
        }
    `)
        .then(({ errors, data }) => {
          if (errors) {
            reject(errors)
          }

          names = data.allResponsesJson.edges.map(edge => edge.node.name)
          return { names }
        }) // extract data from
        .then(result => {
          const template = path.resolve('src', 'templates', 'Roofs.js')
          result.names.forEach(name => {
            createPage({
              path: name.replace(/\W/g,''),
              component: template,
              context: {
                name
              },
            })
          })
          return result
        }), // generate pages
    )
  })
}
