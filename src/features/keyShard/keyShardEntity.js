import {addEntity, createEntitySelector} from 'ecs'

export const keyShardEntity = (blocks) => {
  return addEntity({
    keyShard: {},
    blockGroup: {},
    addBlocksToGroup: {blocks},
    inScene: {value: true},
    size: {},
    animationState: {},
    rotation: {},
  })
}

export const selectBlockEntity = createEntitySelector(['keyShard', 'blockGroup', 'size', 'position', 'rotation'])

export default keyShardEntity
