import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import sceneEntity, {sceneEntitySelector} from './sceneEntity'
import Player from '../player/Player'
import Block from '../block/Block'
import levels from 'features/levels'
import Wall from 'features/wall/Wall'
import Lock from 'features/lock/Lock'
import EndScene from './EndScene'
// import Hud from '.../hud/Hud'

const Background = ({width, height}) => (
  <rect x="0" y="0" width={width} height={height} fill="#111111"/>
)

const Scene = ({id, size}) => {
  return (
    <svg id={id} viewBox={`0 0 ${size.width} ${size.height}`}>
      <Background width={size.width} height={size.height} />
      <Wall />
      <Lock />
      <Block />
      <EndScene />
      <Player />
      {/* <Hud/> */}
    </svg>
  )
}

const Scenes = () => {
  const dispatch = useDispatch()
  const scenes = useSelector(sceneEntitySelector)
  const level = useSelector(state => state.game.level)

  useEffect(() => {
    const {actions, room} = levels[level - 1]
    dispatch(sceneEntity({width: room.width, height: room.height}))
    actions.forEach(a => {dispatch(a)})
  }, [dispatch, level])

  return scenes.map((scene) => <Scene key={scene.id} id={scene.id} size={scene.size} />)
}

export default Scenes