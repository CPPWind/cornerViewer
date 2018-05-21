import React from 'react'

export const CornerShape = ({corner,r = 6}) => (
  <circle r={r} cx={corner.point.x} cy={corner.point.y} className={corner.theme} />
)

export const RoofShape = ({corners, invertY}) => {
  const points = corners.map(({ point: { x, y } }) => `${x},${y}`).join(' ')
  return (
    <polygon points={points}/>
  )
}