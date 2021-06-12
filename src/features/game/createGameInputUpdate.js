const inputMap = {
  ArrowLeft: 'moveLeft',
  ArrowRight: 'moveRight',
  ArrowUp: 'moveUp',
  ArrowDown: 'moveDown',

  KeyA: 'moveLeft',
  KeyD: 'moveRight',
  KeyW: 'moveUp',
  KeyS: 'moveDown',

  KeyZ: 'grab',
  KeyX: 'rotateCCW',
  KeyY: 'rotateCW',
}

const createGameInputUpdate = (store, systems=[]) => {
  const runSystems = (input) => {
    systems.forEach(s => {s.execute(store, {input})})
  }
  const onDown = event => runSystems(inputMap[event.code])
  return {
    start: () => {
      window.addEventListener('keydown', onDown)
    },
    stop: () => {
      window.removeEventListener('keydown', onDown)
    }
  }
}
export default createGameInputUpdate
