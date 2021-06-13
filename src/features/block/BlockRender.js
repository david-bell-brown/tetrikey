import {animated} from 'react-spring'
import useMovementSpring from 'features/animations/useMovementSpring'

const BlockRender = ({id, x, y, rotation, color, grabbable}) => {
  const spring = useMovementSpring({x, y, rotation})
  return (
    <animated.svg id={id} x={spring.x} y={spring.y}>
      <animated.rect
        width={1}
        height={1}
        fill={color}
        stroke="#ffffff"
        strokeWidth={grabbable ? .05 : 0}
        style={{
          transformOrigin: '.5px .5px',
          transform: spring.transform
        }}
      />
    </animated.svg>
  )
}

export default BlockRender
