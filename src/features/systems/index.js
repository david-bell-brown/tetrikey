import createGameInputUpdate from 'features/game/createGameInputUpdate'
import createGameUpdate from 'features/game/createGameUpdate'
import applyBumps from './applyBumps'
import createGroupBlocks from './createGroupBlocks'
import createPlayerGroup from './createPlayerGroup'
import getAdjacents from './getAdjacents'
import grabBlocks from './grabBlocks'
import markGrabbable from './markGrabbable'
import setMovement from './setMovement'
import updatePosition from './updatePosition'

const registerSystems = (store) => {
  //main loop
  const systems = [
    createGroupBlocks,
    createPlayerGroup
  ]
  const inputSystems = [
    setMovement,
    applyBumps,
    updatePosition,
    getAdjacents,
    markGrabbable,
    grabBlocks,
    // clampPosition,
    // setIntersections,
    // clearBumps,
    // endScene,
  ]
  const updateStep = createGameUpdate(store, systems)
  const inputStep = createGameInputUpdate(store, inputSystems)
  // const fixedStep = createGameFixedUpdate(store, systems)
  return {
    start: () => {
      inputStep.start()
      updateStep.start()
      // fixedStep.start(timeout)
    },
    stop: () => {
      inputStep.stop()
      updateStep.stop()
      // fixedStep.stop()
    },
  }
}

export default registerSystems
