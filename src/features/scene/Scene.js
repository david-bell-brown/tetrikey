import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { createSelector } from '@reduxjs/toolkit'

import {sceneEntitySelector} from './sceneEntity'
import Player from '../player/Player'
import Block from '../block/Block'
// import Background from '../background/Background
import sceneInitialize from './sceneInitialize'
// import Hud from '.../hud/Hud'

const testLevel = {
  room: {
    width: 50,
    height: 50
  },
  walls: [
    {color: '#ccc', x: 5, y: 5},
    {color: '#333', x: 6, y: 5},
  ],
  keyShards: [
    [
      {x: 8, y: 1, color: '#ff0000'},
      {x: 8, y: 2, color: '#ff0000'},
      {x: 8, y: 3, color: '#ff0000'},
      {x: 8, y: 4, color: '#ff0000'},
    ],
    [
      {x: 15, y: 15, color: '#00ff00'},
      {x: 15, y: 16, color: '#00ff00'},
      {x: 16, y: 15, color: '#00ff00'},
      {x: 16, y: 16, color: '#00ff00'},
    ],
  ],
  player: {
    x: 3,
    y: 3
  }
}

const levels = [
  testLevel
]

const Scene = ({id, size}) => {
  const dispatch = useDispatch()
  const level = useSelector(state => state.game.level)
  useEffect(() => {
    sceneInitialize(dispatch, levels[level - 1])
  }, [dispatch, level])
  return (
    <svg id={id} viewBox={`0 0 ${size.width} ${size.height}`}>
      {/* <Background /> */}
      <Block />
      <Player />
      {/* <Hud/> */}
    </svg>
  )
}

const Scenes = () => {
  const scenes = useSelector(sceneEntitySelector)
  return scenes.map((scene) => <Scene key={scene.id} id={scene.id} size={scene.size} />)
}

export default Scenes