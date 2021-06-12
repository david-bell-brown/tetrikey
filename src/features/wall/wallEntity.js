import {addEntity, createEntitySelector} from 'ecs'

export const wallEntity = (position, color) => {
  return addEntity({
    wall: {},
    inScene: {value: true},
    size: {},
    color: {value: color},
    solid: {value: true},
    position,
  })
}

export const selectWallEntity = createEntitySelector(['wall', 'size', 'position'])

export default wallEntity
