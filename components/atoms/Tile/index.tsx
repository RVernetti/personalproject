import React from 'react'

import { Coordinates } from '../../../interfaces/map'

import Button from '../Button'

interface Tile {
  position: Coordinates
  temperature?: number
  altitude?: number
  sunsuhine?: number
  composition?: Array<any>
}

const Tile = (props: Tile) => {
  const { position } = props
  return (
    <Button border='tile' colors='tile' onClick={() => console.log(position)} />
  )
}

export default Tile