import React from 'react'
import CornerWalls from '../models/CornerWalls'
import Wall from './Wall'
import {CornerShape} from './Shape'

const extents = (corners) => {
  let minX = 0, minY = 0, maxX = 0, maxY = 0, allX = [], allY = []

  allX = corners.map(corner => corner.coordinate.x)
  allY = corners.map(corner => corner.coordinate.y)

  minX = Math.min(...allX)
  maxX = Math.max(...allX)
  minY = Math.min(...allY)
  maxY = Math.max(...allY)

  return [minX - 10, minY - 10, maxX + 10, maxY + 10, maxX - minX, maxY - minY]
}

const box = ([minX, minY, maxX, maxY]) => {
  return [minX, minY, (maxX - minX), (maxY - minY)].join(" ")
}

const polygon = (corners) => {
  return corners.map(({coordinate: {x,y}})=> {
    return `${x},${- y}`
  }).join(' ')
}


const BigRoof = ({corners, selectedCorner}) => {
  console.log(CornerWalls(corners))
  const boxExtents = extents(corners)
  const viewBox = box(boxExtents)
  const walls = CornerWalls(corners)
  return (
    <figure className={"bigRoof"}>
      <svg viewBox={viewBox} xmlns="http://www.w3.org/2000/svg" >
        <polygon points={polygon(corners)} />
        <Wall corner={selectedCorner} direction="NorthSouth" />
        <Wall corner={selectedCorner} direction="EastWest" />
        <circle r={2} cx={selectedCorner.coordinate.x} cy={- selectedCorner.coordinate.y} className={selectedCorner.theme} />
      </svg>
    </figure>
  )
}

export default BigRoof