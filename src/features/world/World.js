import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

// import StartScreen from 'features/menu/StartScreen'
// import GameOverScreen from 'features/menu/GameOverScreen'
import WinScreen from 'features/menu/WinScreen'
// import cameraEntity from 'features/camera/cameraEntity'
import Scenes from 'features/scene/Scene'

const WorldSvg = styled.svg`
  width: 100vw;
  height: 100vh;
`
const World = ({gameLoop, ...props}) => {
  const {route} = useSelector(state => state.game)
  
  useEffect(() => {
    if (route === 'scene') {
      gameLoop.start()
    } else {
      gameLoop.stop()
    }
  }, [route, gameLoop])
  
  const routes = {
    // 'start': <StartScreen/>,
    'scene': <Scenes gameLoop={gameLoop}/>,
    'win': <WinScreen/>
    // 'gameOver': <><Scenes/><GameOverScreen/></>
  }
  
  return (
    <WorldSvg>
      {routes[route]}
    </WorldSvg>
  )
}
export default World
