import {addEntity, createEntitySelector} from 'ecs'

const blockEntity = ({position, color, groupId}) => {
  return addEntity({
    block: {},
    inScene: {value: true},
    size: {},
    color: {value: color},
    animationState: {},
    inGroup: {groupId},
    adjacents: {},
    bumps: {},
    grabbable: {},
    movement: {},
    solid: {},
    collisionGroup: {value: ['block']},
    position,
  })
}

export const selectBlockEntity = createEntitySelector(['block', 'size', 'position', 'color', 'grabbable'])

export default blockEntity
