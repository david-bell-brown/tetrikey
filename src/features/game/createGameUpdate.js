export const createGameUpdate = (store, systems=[]) => {
  let requestId
  let lastUpdate

  const runSystems = (dt) => {
    systems.forEach(s => {s.execute(store, {dt})})
  }
  const step = (timestamp) => {
    if (!lastUpdate) {
      lastUpdate = timestamp
    } else {
      runSystems(timestamp - lastUpdate)
    }
    requestId = window.requestAnimationFrame(step)
  }
  
  return {
    start: () => {
      requestId = window.requestAnimationFrame(step)
    },
    stop: () => {
      window.cancelAnimationFrame(requestId)
    }
  }
}
export default createGameUpdate
