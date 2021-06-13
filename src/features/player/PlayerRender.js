import {animated} from 'react-spring'
import useMovementSpring from 'features/animations/useMovementSpring'
import {ReactComponent as PlayerSvg} from './player.svg'

const Sprite = props => (
  <PlayerSvg width="1" height="1" {...props} />
)

const PlayerRender = ({id, x, y, rotation}) => {
  const spring = useMovementSpring({x, y, rotation})
  return (
    <animated.svg id={id} x={spring.x} y={spring.y}>
      <animated.g style={{
        transformOrigin: '.5px .5px',
        transform: spring.transform
      }}>
        <Sprite />
      </animated.g>
    </animated.svg>
  )
}

export default PlayerRender
