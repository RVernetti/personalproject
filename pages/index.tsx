import React from 'react'

import Tile from '../components/atoms/Tile'

const HomePage = () => {
  return (
    <>
      <Tile position={{ x: 0, y: 0 }}/>
      <Tile position={{ x: 500, y: 500 }}/>
      <Tile position={{ x: 600, y: 600 }}/>
    </>
  )
}

export default HomePage
