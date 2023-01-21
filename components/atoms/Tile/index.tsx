import React from 'react'

import { CubicCoordinates } from '../../../interfaces/map'

import Button from '../Button'

interface Tile {
  coordinates: CubicCoordinates
  layout: any // TODO interface
  composition?: Array<any>
  temperature?: number
  sunshine?: number
  altitude?: number
  css?: object
}

const Tile = (props: Tile) => {
  const { coordinates, layout, css } = props

  const position = layout.hexToPixel(coordinates)
  const { x, y } = position


  return (
    <Button
      border='tile' 
      colors='tile' 
      onClick={() => console.log('Tile\'s coordinates:', coordinates)} 
      css={{ 
        position: 'absolute',
        height: '50px',
        width: '50px',
        left: x, 
        top: y, 
        ...css 
      }} 
    />
  )
}

export default Tile