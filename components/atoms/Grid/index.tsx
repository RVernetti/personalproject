import React from 'react'

import { Coordinates } from '../../../interfaces/map'

import Tile from '../Tile'

interface Grid {
  origin: Coordinates
  radius: number
}

const Grid = (props: Grid) => {
  return (
    <Tile position={{ x:500, y: 500 }}/>
  )
}

export default Grid