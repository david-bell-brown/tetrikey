import React from "react"
import { useSelector } from "react-redux"
import { selectLockBlockEntity } from "./lockBlockEntity"
import {animated, useSpring} from 'react-spring'
import {ReactComponent as LockBlockSvg} from './lockBlock.svg'

const Sprite = ({open, ...props}) => {
  const styles = useSpring({to: open ? {
    opacity: .5,
    scale: .8,
  } : {
    opacity: 1,
    scale: 1,
  }})
  return (
    <svg {...props}>
      <animated.g style={{
        transformOrigin: '.5px .5px',
        ...styles
      }}>
        <LockBlockSvg width={1} height={1}/>
      </animated.g>
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
