import { bumps, collisionGroup, inGroup, movement, player, position, solid } from "data/index"
import createSystem from "ecs/createSystem"
// import {inRange} from 'utility'

const getBumps = (ePos, eMovement, others) => {
  // const ePos1 = ePos
  const ePos2 = {
    x: ePos.x + eMovement.x,
    y: ePos.y + eMovement.y
  }
  let xBumps = []
  let yBumps = []
  others.forEach(o => {
    if (eMovement.x !== 0 && o.position.x === ePos2.x && o.position.y === ePos2.y) {
      xBumps.push(o)
    }
    if (eMovement.y !== 0 && o.position.y === ePos2.y && o.position.x === ePos2.x) {
      yBumps.push(o)
    }
  })
  return [xBumps, yBumps]
}

export const filterOtherSolids = (entity, others) => (
  others
    //filter out solids in the same group
    .filter(solid => solid.inGroup.groupId !== entity.inGroup.groupId)
    //only check solids that share a common collision group tag
    .filter(solid => solid.collisionGroup.value.filter(c => entity.collisionGroup.value.includes(c)).length > 0) 
)

const applyBumps = createSystem(
  [
    [position, movement, collisionGroup, inGroup, bumps],
    [position, solid, inGroup, collisionGroup],
    [player, movement, inGroup]
  ],
  ([movers, solids, players]) => {
    let draft = []
    //only check movers that are in player block groups
    players.forEach(player => {
      let sharedMovement = player.movement
      const playerBlocks = movers
        .filter(mover => mover.inGroup.groupId === player.inGroup.groupId)
        .map(mover => {
          const others = filterOtherSolids(mover, solids)
          let moverDraft = {...mover}
          let bumps = getBumps(moverDraft.position, sharedMovement, others)
          if (bumps[0].length > 0) {
            sharedMovement.x = 0
          }
          if (bumps[1].length > 0) {
            sharedMovement.y = 0
          }
          // let lastBumps = {x: bumps[0], y: bumps[1]}
          // while (
          //   (bumps[0].length > 0 && sharedMovement.x !== 0)
          //   || (bumps[1].length > 0 && sharedMovement.y !== 0)
          // ) {
          //   lastBumps = {x: bumps[0].map(b => b.id), y: bumps[1].map(b => b.id)}
          //   sharedMovement = {
          //     x: sharedMovement.x > 0 ? sharedMovement.x-- : sharedMovement.x++,
          //     y: sharedMovement.y > 0 ? sharedMovement.y-- : sharedMovement.y++,
          //   }
          //   bumps = getBumps(moverDraft.position, sharedMovement, others)
          // }
          moverDraft.bumps = {x: bumps[0], y: bumps[1]}
          return moverDraft
        })
      const updates = playerBlocks.map(block => ({...block, movement: sharedMovement}))
      draft = [...draft, ...updates]
    })
    return draft
  }
)

export default applyBumps
