import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import sceneEntity, {sceneEntitySelector} from './sceneEntity'
import Player from '../player/Player'
import Block from '../block/Block'
import levels from 'features/levels'
import Wall from 'features/wall/Wall'
import LockHole from 'features/lock/LockHole'
import LockBlock from 'features/lock/LockBlock'
import EndScene from './EndScene'
import { setRoute } from 'features/game/gameSlice'
import Hud from 'features/hud/Hud'
import { tutorials } from 'features/levels/index'

const Background = ({width, height}) => (
  <rect x="0" y="0" width={width} height={height} fill="#1f1414"/>
)

const Scene = ({id, size, gameLoop, level}) => {
  const Tutorial = tutorials[level - 1]
  return (
    <>
      <svg id={id} viewBox={`0 0 ${size.width} ${size.height}`}>
        <Background width={size.width} height={size.height} />
        <Wall />
        <LockHole />
        <LockBlock />
        <Block />
        {/* <Lock /> */}
        <EndScene />
        <Player />
      </svg>
      {Tutorial && <Tutorial style={{opacity: .5}}/>}
      <Hud gameLoop={gameLoop}/>
    </>
  )
}

const Scenes = ({gameLoop}) => {
  const dispatch = useDispatch()
  const scenes = useSelector(sceneEntitySelector)
  const level = useSelector(state => state.game.level)
  const retries = useSelector(state => state.game.retries)

  useEffect(() => {
    if (level > levels.length) {
      dispatch(setRoute('win'))
    } else {
      const {actions, room} = levels[level - 1]
      dispatch(sceneEntity({width: room.width, height: room.height}))
      actions.forEach(a => {dispatch(a)})
    }
  }, [dispatch, level, retries])

  return scenes.map((scene) => <Scene key={scene.id} id={scene.id} size={scene.size} gameLoop={gameLoop} level={level}/>)
}

export default Scenes