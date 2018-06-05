import React from 'react'

const CurrentCorner = ({ corner }) => {
  console.log('ns wall',corner.walls.NorthSouth)
  const ns = corner.walls.NorthSouth
  const ew = corner.walls.EastWest
  const nsEnd = corner.walls.NorthSouth.endpoints[1]
  const ewEnd = corner.walls.EastWest.endpoints[1]
  return (
    <section className="currentCorner">
      <ul>
        <li>
          <h4>{corner.id} - {corner.orientation}</h4>
          [{corner.coordinate.x.toFixed(2)}, {corner.coordinate.y.toFixed(2)}, {corner.coordinate.z.toFixed(2)}]
        </li>
        <li className="NorthSouth">
          <h4>NorthSouth Wall to {ns.corners[1]}</h4>
          [ {nsEnd.x.toFixed(2)}, {nsEnd.y.toFixed(2)} ]<br />
          {corner.walls.NorthSouth.length.toFixed(2)}
        </li>
        <li className="EastWest">
          <h4>EastWest Wall to {ew.corners[1]}</h4>
          [ {ewEnd.x.toFixed(2)}, {ewEnd.y.toFixed(2)} ]<br />
          {corner.walls.EastWest.length.toFixed(2)}
        </li>
      </ul>

    </section>
  )
}

export default CurrentCorner