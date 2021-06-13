import React from "react"
import { useSelector } from "react-redux"
import { selectLockHoleEntity } from "./lockHoleEntity"
import {animated, useSpring} from 'react-spring'
import {ReactComponent as LockHoleSvg} from './lockHole.svg'

const Sprite = ({open, ...props}) => {
  const styles = useSpring({to: open ? {
    opacity: 0,
    scale: .8,
  } : {
    opacity: .5,
    scale: 1,
  }})
  return (
    <svg {...props}>
      <animated.g style={{
        transformOrigin: '.5px .5px',
        ...styles
      }}>
        <LockHoleSvg width={1} height={1}/>
      </animated.g>
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
