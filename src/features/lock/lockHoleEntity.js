import {addEntity, createEntitySelector} from 'ecs'

const lockHoleEntity = ({position, groupId}) => {
  return addEntity({
    lockHole: {},
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

export const selectLockHoleEntity = createEntitySelector(['lockHole', 'size', 'position', 'inGroup', 'open'])

export default lockHoleEntity
