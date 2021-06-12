// import {createSystem, removeComponent} from 'ecs'
import parseLevel from './parseLevel'

const sceneInitialize = (dispatch, level) => {
  const {actions} = parseLevel(level)
  actions.forEach(a => {dispatch(a)})
}

export default sceneInitialize
