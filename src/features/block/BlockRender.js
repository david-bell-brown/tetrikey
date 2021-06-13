import {animated, useSpring} from 'react-spring'
import useMovementSpring from 'features/animations/useMovementSpring'
import React from 'react'
import {ReactComponent as BlockSvg} from './greyBlock.svg'

const Sprite = props => (
  <BlockSvg width="1" height="1" {...props} />
)

const BlockRender = React.memo(({id, x, y, rotation, color, grabbable, open}) => {
  const moveSpring = useMovementSpring({x, y, rotation})
  const openSpring = useSpring({to: open ? {
    opacity: .5,
    scale: .8,
  } : {
    opacity: 1,
    scale: 1,
  }})
  return (
    <animated.svg id={id} x={moveSpring.x} y={moveSpring.y}>
      <animated.g style={{
        transformOrigin: '.5px .5px',
        rotate: moveSpring.rotate,
        ...openSpring
      }}>
        <rect
          width="1"
          height="1"
          fill={color}
          stroke="#ffffff"
          strokeWidth={grabbable ? .05 : 0}
        />
        <Sprite/>
      </animated.g>
    </animated.svg>
  )
})

export default BlockRender
