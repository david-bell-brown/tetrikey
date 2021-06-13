import { addEntity } from "ecs/configureEcsStore";
import createEntitySelector from "ecs/createEntitySelector";

const endSceneEntity = (position) => addEntity({
  endScene: {},
  position,
  intersections: {},
  inScene: {value: true}
})

export const selectEndSceneEntity = createEntitySelector(['endScene', 'position'])

export default endSceneEntity
