import { block, collisionGroup, inGroup, intersections, lock, lockBlock, lockHole, open, player } from "data/index";
import createSystem from "ecs/createSystem";

const openLocks = createSystem(
  [
    [lock],
    [lockBlock, intersections, open, inGroup, collisionGroup],
    [lockHole, intersections, open, inGroup, collisionGroup],
    [block, inGroup, collisionGroup],
    [player]
  ],
  ([locks, lockBlocks, lockHoles, blocks, players]) => {
    let draft = []
    locks.forEach(lock => {
      const blocksInGroup = lockBlocks.filter(e => e.inGroup.groupId === lock.id)
      const holesInGroup = lockHoles.filter(e => e.inGroup.groupId === lock.id)
      const blockIntersections = blocksInGroup.filter(e => !e.open.value && e.intersections.value.filter(id => !players.map(p => p.id).includes(id)).length > 0)
      const holeIntersections = holesInGroup.filter(e => e.intersections.value.length > 0).map(e => e.intersections.value)
      if (!holesInGroup[0].open.value && blockIntersections.length === 0 && holeIntersections.length >= holesInGroup.length) {
        const flatIntersections = holeIntersections.reduce((acc, curr) => ([...acc, ...curr]), [])
        draft = [
          ...draft,
          ...blocksInGroup.map(e => ({...e, open: {value: true}, collisionGroup: {value: []}})),
          ...holesInGroup.map(e => ({...e, open: {value: true}, collisionGroup: {value: []}})),
          ...blocks.filter(e => flatIntersections.includes(e.id)).map(e => ({...e, inGroup: {groupId: lock.id}, collisionGroup: {value: []}}))
        ]
      } else if (holeIntersections.length < holesInGroup.length) {
        draft = [
          ...draft,
          ...blocksInGroup.map(e => ({...e, open: {value: false}, collisionGroup: {value: ['player']}})),
          ...holesInGroup.map(e => ({...e, open: {value: false}, collisionGroup: {value: ['player']}})),
        ]
      }
    })
    
    return draft
  }
)

export default openLocks
