import React from 'react'

const CornersList = ({ corners, selectCorner }) => {
  const list = corners.map(corner => {
    if (!corner.orientation) return null
    return (<li key={`CornersList-${corner.id}`}>
        <a href="#" onClick={() => selectCorner(corner.id)}>
          {corner.id.padStart(2, '0')} - {corner.orientation || 'Interior'}
          </a>
      </li>
    )
  })

  return (
    <ul>
      {list}
    </ul>
  )
}

export default CornersList
