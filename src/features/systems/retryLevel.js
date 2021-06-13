import { inScene, scene } from 'data/index'
import {createSystem, removeEntity} from 'ecs'
import { retryLevel as retryLevelAction } from 'features/game/gameSlice'

const retryLevel = createSystem(
  [[scene], [inScene]],
  ([scenes, entsInScene], {input}, queue) => {
    if (input === 'retry') {
      entsInScene.forEach(e => queue(removeEntity(e.id)))
      queue(removeEntity(scenes[0].id))
      queue(retryLevelAction())
    }
  }
)

export default retryLevel
