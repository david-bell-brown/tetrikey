import { grabbable, inGroup, player } from "data/index";
import createSystem from "ecs/createSystem";

const grabBlocks = createSystem(
  [[grabbable, inGroup], [player, inGroup]],
  ([grabbables, players], {input}) => {
    if (input === 'grab') {
      return grabbables
        .filter(block => block.grabbable.value)
        .map(block => ({
          ...block,
          inGroup: {groupId: players[0].inGroup.groupId}
        }))
    }
  }
)

export default grabBlocks
