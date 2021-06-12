import {addEntity, createEntitySelector} from 'ecs'

export const sceneEntitySelector = createEntitySelector(['scene', 'size', 'active'])

export const sceneEntity = (size = {width: 30, height: 30}, active = true) => {
  return addEntity({
    'scene': {},
    'size': size,
    'active': {value: active}
  })
}

export default sceneEntity
