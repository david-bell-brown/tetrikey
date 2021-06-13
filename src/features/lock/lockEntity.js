import { addEntity } from "ecs/configureEcsStore";
import createEntitySelector from "ecs/createEntitySelector";

const lockEntity = (blocks) => addEntity({
  lock: {},
  blockGroup: {},
  addBlocksToGroup: {blocks},
  inScene: {value: true},
})

export const selectLockEntity = createEntitySelector(['lock'])

export default lockEntity
