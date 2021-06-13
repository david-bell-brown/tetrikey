import {animated, useSpring} from 'react-spring'
import useMovementSpring from 'features/animations/useMovementSpring'
import React from 'react'

const BlockRender = React.memo(({id, x, y, rotation, color, grabbable, open}) => {
  const moveSpring = useMovementSpring({x, y, rotation})
  const openSpring = useSpring({to: open ? {
    opacity: .5,
    scale: .8,
    rx: .15,
  } : {
    opacity: 1,
    scale: 1,
    rx: 0,
  }})
  return (
    <animated.svg id={id} x={moveSpring.x} y={moveSpring.y}>
      <animated.rect
        width={1}
        height={1}
        fill={color}
        stroke="#ffffff"
        strokeWidth={grabbable ? .05 : 0}
        style={{
          transformOrigin: '.5px .5px',
          rotate: moveSpring.rotate,
          ...openSpring
        }}
      />
    </animated.svg>
  )
})

export default BlockRender
