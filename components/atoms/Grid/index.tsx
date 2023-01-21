import React from 'react'

import { Tile } from '../'

import { SquareCoordinates, Positions } from '../../../interfaces/map'
import { generateGrid } from '../../../helpers/map/grid'
import { Point, Layout, Hex } from '../../../helpers/map/old/hex'

interface Grid {
  radius: number
  origin?: SquareCoordinates
  hexSize?: SquareCoordinates
}

const Grid = (props: Grid) => {
  const { 
    radius,
    origin = new Point(720, 350), 
    hexSize = new Point(29, 29),
  } = props
  
  const layout = new Layout(Layout.flat, hexSize, origin)
  const positions: Positions = generateGrid(radius)

  console.log('Layout:', layout)

  const getGrid = () => positions.map((hex) => 
    <Tile 
      key={`[${hex.q}, ${hex.r}, ${hex.s}]`}
      coordinates={hex}
      layout={layout}
    />
  )

  return (
    <>
      {getGrid()}
    </>
  )
}

export default Grid