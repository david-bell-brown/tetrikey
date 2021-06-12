import { inGroup, player } from "data/index";
import createSystem from "ecs/createSystem";

const createPlayerGroup = createSystem(
  [[player, inGroup]],
  ([players]) => {
    let draft = players
      .filter(player => !player.inGroup.groupId)
      .map(player => ({...player, inGroup: {groupId: player.id}}))
    return draft.length > 0 ? draft : false
  }
)

export default createPlayerGroup
