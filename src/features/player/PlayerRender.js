import {ReactComponent as PlayerSvg} from './wizard.svg'

const Sprite = props => (
  <PlayerSvg width="1" height="1" {...props} />
)

const PlayerRender = ({id, x, y, color}) => {
  return (
    <Sprite id={id} x={x} y={y}/>
  )
}

export default PlayerRender
