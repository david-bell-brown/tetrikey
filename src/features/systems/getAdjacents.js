import { adjacents, inGroup, position } from "data/index";
import createSystem from "ecs/createSystem";

const checkAdjacent = (pos1, pos2) => (
  (Math.abs(pos1.x - pos2.x) === 1 && pos1.y === pos2.y) || 
  (Math.abs(pos1.y - pos2.y) === 1 && pos1.x === pos2.x)
)

const getAdjacents = createSystem(
  [[position, inGroup, adjacents]],
  ([blocks]) => blocks.map(block => {
    const adjacents = blocks
      .filter(other => other.inGroup.groupId !== block.inGroup.groupId)
      .filter(other => checkAdjacent(block.position, other.position))
      .map(b => b.id)
    return {
      ...block,
      adjacents: {value: adjacents}
    }
  })
)

export default getAdjacents
