import {createSystem} from 'ecs'
import {position, movement} from 'data'

//apply movement to position, zero out movement
const updatePosition = createSystem([[position, movement]],
  ([movers]) => {
    return movers.map((mover) => {
      const newPos = {
        x: mover.position.x + mover.movement.x,
        y: mover.position.y + mover.movement.y,
      }
      return {...mover, position: newPos, movement: {x: 0, y: 0}}
    })
  }
)

export default updatePosition
