import { endScene, inScene, intersections, player, scene } from 'data/index'
import {createSystem, removeEntity} from 'ecs'
import {nextLevel} from 'features/game/gameSlice'

const advanceLevel = createSystem(
  [[endScene, intersections], [player], [scene], [inScene]],
  ([sceneEnders, players, scenes, entsInScene], args, queue) => {
    if (!players[0] || !sceneEnders[0] || !scenes[0]) {
      return
    }
    if(sceneEnders[0].intersections.value.includes(players[0].id)) {
      entsInScene.forEach(e => queue(removeEntity(e.id)))
      queue(nextLevel())
      queue(removeEntity(scenes[0].id))
    }
  }
)

export default advanceLevel
