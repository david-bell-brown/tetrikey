import { addBlocksToGroup } from "data/index"
import { removeComponent } from "ecs/configureEcsStore"
import createSystem from "ecs/createSystem"
import blockEntity from "features/block/blockEntity"

const createGroupBlocks = createSystem(
  [[addBlocksToGroup]],
  ([groups], args, queue) => {
    groups.forEach((group) => {
      group.addBlocksToGroup.blocks.forEach(block => {
        queue(blockEntity(block.position, block.color, group.id,))
      })
      queue(removeComponent(group.id, addBlocksToGroup))
    })
  }
)

export default createGroupBlocks
