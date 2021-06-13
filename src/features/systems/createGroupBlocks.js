import { addBlocksToGroup } from "data/index"
import { removeComponent } from "ecs/configureEcsStore"
import createSystem from "ecs/createSystem"
import { entityKey } from "features/levels/parseLevel"

const createGroupBlocks = createSystem(
  [[addBlocksToGroup]],
  ([groups], args, queue) => {
    groups.forEach((group) => {
      group.addBlocksToGroup.blocks.forEach(({type, ...args}) => {
        queue(entityKey[type]({...args, groupId: group.id}))
      })
      queue(removeComponent(group.id, addBlocksToGroup))
    })
  }
)

export default createGroupBlocks
