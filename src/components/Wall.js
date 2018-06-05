import React from 'react'

const Wall = ({corner, direction}) => {
  const [{x: x1, y: y1},{x: x2, y: y2}] = corner.walls[direction].endpoints
  return (
    <line x1={x1} y1={- y1} x2={x2} y2={- y2} className={direction}/>
  )
}

export default Wall