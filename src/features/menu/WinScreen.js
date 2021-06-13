import styled from "styled-components"
import {ReactComponent as FlagSvg} from '../scene/flag.svg'
import {ReactComponent as PlayerSvg} from '../player/player.svg'

const WinTitle = styled.text`
  fill: white;
  font-size: 200px;
`
const WinText = styled.text`
  fill: white;
  font-size: 75px;
`

const WinScreen = () => (
  <svg viewBox="0 0 1000 600">
    <rect width="1000" height="600" fill="#222222"/>
    <WinTitle
      x="500"
      y="220"
      textAnchor="middle"
    >You win!</WinTitle>
    <WinText
      x="500"
      y="320"
      textAnchor="middle"
    >Thanks for playing!</WinText>
    <PlayerSvg x="300" y="350" width="200" height="200" />
    <FlagSvg x="500" y="350" width="200" height="200"/>
  </svg>
)

export default WinScreen
