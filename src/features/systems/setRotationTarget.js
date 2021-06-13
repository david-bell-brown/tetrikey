import { inGroup, player, position, rotationTarget } from "data/index";
import createSystem from "ecs/createSystem";

const rotateAroundPoint = (rotation, origin, startPos) => {
  const relative = {x: startPos.x - origin.x, y: startPos.y - origin.y}
  let target
  if (rotation === 90) {
    target = {x: origin.x - relative.y, y: origin.y + relative.x}
  } else {
    target = {x: origin.x + relative.y, y: origin.y - relative.x}
  }
  return {rotation, x: target.x, y: target.y}
}

const setRotationTarget = createSystem(
  [[player, position, inGroup], [position, inGroup, rotationTarget]],
  ([players, blocks], {input}) => {
    if (input === 'rotateCW') {
      return blocks
        .filter(block => block.inGroup.groupId === players[0].inGroup.groupId)
        .map(block => ({
          ...block,
          rotationTarget: rotateAroundPoint(90, players[0].position, block.position)
        }))
    } else if (input === 'rotateCCW') {
      return blocks
        .filter(block => block.inGroup.groupId === players[0].inGroup.groupId)
        .map(block => ({
          ...block,
          rotationTarget: rotateAroundPoint(-90, players[0].position, block.position)
        }))
    }
    return false
  }
)

export default setRotationTarget
