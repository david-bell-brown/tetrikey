import { adjacents, grabbable, inGroup, intersections, player } from "data/index";
import createSystem from "ecs/createSystem";

const markGrabbable = createSystem(
  [[inGroup, adjacents], [player, inGroup, intersections], [inGroup, grabbable]],
  ([blocks, players, grabbables]) => {
    let draft = []
    players.forEach(player => {
      const adjacentGroups = new Set()
      const playerBlockAdjacents = blocks
        .filter(block => block.inGroup.groupId === player.inGroup.groupId)
        .reduce((acc, curr) => ([
          ...acc,
          ...(curr.adjacents.value)
        ]), [])
      blocks
        .filter(block => playerBlockAdjacents.includes(block.id))
        .forEach(block => {
          adjacentGroups.add(block.inGroup.groupId)
        })
      draft = [
        ...draft,
        ...(grabbables.map(block => ({
          ...block,
          grabbable: {value: player.intersections.value.length === 0 && adjacentGroups.has(block.inGroup.groupId)}
        })))
      ]
    })
    return draft.length > 0 ? draft : false
  }
)

export default markGrabbable
