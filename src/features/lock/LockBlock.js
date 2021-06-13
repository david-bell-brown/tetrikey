import { useSelector } from "react-redux"
import { selectLockBlockEntity } from "./lockBlockEntity"
import {animated, useSpring} from 'react-spring'
import React from "react"

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
        fill="#ff0000"
        style={{
          transformOrigin: '.5px .5px',
          ...styles
        }}
      />
    </svg>
  )
}

const LockBlockRender = React.memo(({id, x, y, open}) => {
  return (
    <Sprite
      id={id}
      x={x}
      y={y}
      open={open}
    />
  )
})
const LockBlock = () => {
  const blocks = useSelector(selectLockBlockEntity)
  return blocks.map(block => <LockBlockRender
    key={block.id}
    id={block.id}
    x={block.position.x}
    y={block.position.y}
    open={block.open.value}
  />)
}

export default LockBlock
