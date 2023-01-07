import React from 'react'

import { Coordinates } from '../../../interfaces/map'

import Button from '../Button'

interface Tile {
  position: Coordinates
  composition?: Array<any>
  temperature?: number
  sunshine?: number
  altitude?: number
  css?: object
}

const Tile = (props: Tile) => {
  const { position, css } = props
  const { x, y } = position

  return (
    <Button 
      border='tile' 
      colors='tile' 
      onClick={() => console.log('Tile\'s position:', position)} 
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