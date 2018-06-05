const CornerWalls = (corners) => {
  const indexed = {}
  let ns, ew

  corners.forEach(corner => {
    indexed[corner.id] = corner
  })

  return corners.map(corner => {
    if (! corner.orientation) return corner
    ns = corner.walls.NorthSouth
    ew = corner.walls.EastWest
    ns.endpoints = ns.corners.map((corner_id) => indexed[corner_id].coordinate)
    ew.endpoints = ew.corners.map((corner_id) => indexed[corner_id].coordinate)

    return corner
  })
}

export default CornerWalls