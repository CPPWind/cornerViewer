import React from 'react'
import Card from './Card'
import RoofFigure from './RoofFigure'
import RoofResult from './RoofResult'

const RoofCard = ({ roof }) => {
  const lh2 = false
  return (
    <Card title={roof.name} subtitle={lh2 ? 'l > h / 2' : 'l < h / 2'}>
      <RoofFigure roof={roof} />
      <RoofResult roof={roof} />
    </Card>
  )
}

export default RoofCard
