import {addEntity, createEntitySelector} from 'ecs'

const blockEntity = (position, color, groupId) => {
  return addEntity({
    block: {},
    inScene: {value: true},
    size: {},
    color: {value: color},
    animationState: {},
    inGroup: {groupId},
    adjacents: {},
    grabbable: {},
    movement: {},
    position,
  })
}

export const selectBlockEntity = createEntitySelector(['block', 'size', 'position', 'color'])

export default blockEntity
