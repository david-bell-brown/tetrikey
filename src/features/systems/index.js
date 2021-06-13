import createGameInputUpdate from 'features/game/createGameInputUpdate'
import createGameUpdate from 'features/game/createGameUpdate'
import advanceLevel from './advanceLevel'
import applyBumps from './applyBumps'
import applyRotation from './applyRotation'
import createGroupBlocks from './createGroupBlocks'
import createPlayerGroup from './createPlayerGroup'
import getAdjacents from './getAdjacents'
import getIntersections from './getIntersections'
import grabBlocks from './grabBlocks'
import markGrabbable from './markGrabbable'
import openLocks from './openLocks'
import retryLevel from './retryLevel'
import setMovement from './setMovement'
import setRotationTarget from './setRotationTarget'
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
    setRotationTarget,
    updatePosition,
    applyRotation,
    getAdjacents,
    getIntersections,
    openLocks,
    markGrabbable,
    grabBlocks,
    // clampPosition,
    advanceLevel,
    retryLevel,
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
    runInputSystems: inputStep.runSystems
  }
}

export default registerSystems
