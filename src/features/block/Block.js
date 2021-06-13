import { useSelector } from "react-redux"
import { selectBlockEntity } from "./blockEntity"
import BlockRender from "./BlockRender"

const Block = () => {
  const blocks = useSelector(selectBlockEntity)
  return blocks.map(block => <BlockRender
    key={block.id}
    id={block.id}
    x={block.position.x}
    y={block.position.y}
    rotation={block.rotation.value}
    color={block.color.value}
    grabbable={block.grabbable.value}
    open={block.collisionGroup.value.length === 0}
  />)
}

export default Block
