import {addEntity, createEntitySelector} from 'ecs'

const lockBlockEntity = ({position, groupId}) => {
  return addEntity({
    lockBlock: {},
    inScene: {value: true},
    size: {},
    inGroup: {groupId},
    intersections: {},
    solid: {},
    collisionGroup: {value: ['player']},
    position,
    open: {value: false}
  })
}

export const selectLockBlockEntity = createEntitySelector(['lockBlock', 'size', 'position', 'inGroup', 'open'])

export default lockBlockEntity
