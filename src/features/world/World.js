import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

// import StartScreen from 'features/menu/StartScreen'
// import GameOverScreen from 'features/menu/GameOverScreen'
// import cameraEntity from 'features/camera/cameraEntity'
import sceneEntity from 'features/scene/sceneEntity'
import Scenes from 'features/scene/Scene'

const WorldSvg = styled.svg`
  width: 100vw;
  height: 100vh;
`
const World = ({gameLoop, ...props}) => {
  const dispatch = useDispatch()
  const {route} = useSelector(state => state.game)
  
  useEffect(() => {
    if (route === 'scene') {
      dispatch(sceneEntity())
      gameLoop.start()
    } else {
      gameLoop.stop()
    }
  }, [route, dispatch, gameLoop])
  
  const routes = {
    // 'start': <StartScreen/>,
    'scene': <Scenes/>,
    // 'gameOver': <><Scenes/><GameOverScreen/></>
  }
  
  return (
    <WorldSvg>
      {routes[route]}
    </WorldSvg>
  )
}
export default World
