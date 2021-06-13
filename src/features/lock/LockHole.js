import React from "react"
import { useSelector } from "react-redux"
import { selectLockHoleEntity } from "./lockHoleEntity"
import {animated, useSpring} from 'react-spring'

const Sprite = ({open, ...props}) => {
  const styles = useSpring({to: open ? {
    opacity: .5,
    scale: .8,
    rx: .15,
  } : {
    opacity: 1,
    scale: 1,
    rx: 0,
  }})
  return (
    <svg width="1" height="1" {...props}>
      <animated.rect
        width={1}
        height={1}
        fill="#aa0000"
        style={{
          transformOrigin: '.5px .5px',
          ...styles
        }}
      />
    </svg>
  )
}
const LockHoleRender = React.memo(({id, x, y, open}) => {
  return (
    <Sprite
      id={id}
      x={x}
      y={y}
      open={open}
    />
  )
})

const LockHole = () => {
  const holes = useSelector(selectLockHoleEntity)
  return holes.map(hole => <LockHoleRender
    key={hole.id}
    id={hole.id}
    x={hole.position.x}
    y={hole.position.y}
    open={hole.open.value}
  />)
}

export default LockHole
