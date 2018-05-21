import React from 'react'
import { CornerShape as Corner, RoofShape } from './Shape'

const RoofFigure = ({ roof }) => {
  const corners = roof
    .corners
    .map(corner => <Corner corner={corner} key={corner.key} />)

  return (
    <figure>
      <svg viewBox={roof.box} xmlns="http://www.w3.org/2000/svg">
        <RoofShape corners={roof.corners} />
        {corners}
      </svg>
    </figure>
  )
}

export default RoofFigure

