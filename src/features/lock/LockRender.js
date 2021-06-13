// import { selectBlockEntity } from 'features/block/blockEntity'
import { useSelector } from "react-redux"
import { selectLockBlockEntity } from "./lockBlockEntity"
import { selectLockHoleEntity } from "./lockHoleEntity"

const LockBlockRender = ({id, x, y, open}) => {
  return (
    <rect
      id={id}
      x={x}
      y={y}
      width={1}
      height={1}
      fill="#ff0000"
    />
  )
}

const LockHoleRender = ({id, x, y, open}) => {
  return (
    <rect
      id={id}
      x={x}
      y={y}
      width={1}
      height={1}
      fill="#aa0000"
    />
  )
}

const LockRender = ({id}) => {
  const blocks = useSelector(state => selectLockBlockEntity(state).filter(block => block.inGroup.groupId === id))
  const holes = useSelector(state => selectLockHoleEntity(state).filter(hole => hole.inGroup.groupId === id))
  return (
    <g id={id}>
      {blocks.map(block => <LockBlockRender key={block.id} id={block.id} x={block.position.x} y={block.position.y}/>)}
      {holes.map(hole => <LockHoleRender key={hole.id} id={hole.id} x={hole.position.x} y={hole.position.y}/>)}
    </g>
  )
}

export default LockRender
