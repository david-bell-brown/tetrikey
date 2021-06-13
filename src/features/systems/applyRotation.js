import { collisionGroup, inGroup, position, rotation, rotationTarget, solid } from "data/index";
import createSystem from "ecs/createSystem";
import { filterOtherSolids } from "./applyBumps";
import { checkIntersects } from "./getIntersections";

const applyRotation = createSystem(
  [
    [rotation, rotationTarget, position, inGroup, collisionGroup],
    [position, solid, inGroup, collisionGroup]
  ],
  ([blocks, solids]) => {
    const rotators = blocks.filter(r => r.rotationTarget.rotation)
    let intersections = []
    rotators.filter(r => r.rotationTarget.rotation).forEach(entity => {
      const others = filterOtherSolids(entity, solids)
      intersections = [
        ...intersections,
        ...checkIntersects({
          id: entity.id,
          position: {
            x: entity.rotationTarget.x,
            y: entity.rotationTarget.y,
          }
        }, others)
      ]
    })
    console.log(intersections)
    if (rotators.length > 0 && intersections.length === 0) {
      return rotators.map(e => ({
        ...e,
        rotation: e.rotation + e.rotationTarget.rotation,
        position: {x: e.rotationTarget.x, y: e.rotationTarget.y},
        rotationTarget: {rotation: null, x: null, y: null}
      }))
    } else if (rotators.length > 0) {
      return rotators.map(e => ({
        ...e,
        rotationTarget: {rotation: null, x: null, y: null}
      }))
    }
    return
  }
)

export default applyRotation
