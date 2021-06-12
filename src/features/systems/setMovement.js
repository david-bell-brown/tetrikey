import { inGroup, movement, player } from "data/index";
import createSystem from "ecs/createSystem";

const setMovement = createSystem(
  [[player, inGroup], [inGroup, movement]],
  ([players, movers], {input}) => {
    const movement = {
      'moveUp': {x: 0, y: -1},
      'moveDown': {x: 0, y: 1},
      'moveLeft': {x: -1, y: 0},
      'moveRight': {x: 1, y: 0},
    }[input] || {x: 0, y: 0}

    return movers
      .filter(mover => mover.inGroup.groupId === players[0].inGroup.groupId)
      .map(mover => ({
        ...mover,
        movement
      }))
  }
)

export default setMovement
