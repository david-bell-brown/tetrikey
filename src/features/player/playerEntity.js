import {addEntity, createEntitySelector} from 'ecs'

export const playerEntity = (position) => {
  return addEntity({
    player: {},
    inScene: {value: true},
    size: {},
    animationState: {},
    rotation: {},
    movement: {x: 0, y: 0},
    inGroup: {groupId: false},
    addBlockGroup: {},
    blockGroup: {},
    adjacents: {},
    bumps: {},
    intersections: {},
    collisionGroup: {value: ['player', 'block']},
    position,
  })
}

export const selectPlayerEntity = createEntitySelector(['player', 'size', 'position', 'rotation'])

export default playerEntity
