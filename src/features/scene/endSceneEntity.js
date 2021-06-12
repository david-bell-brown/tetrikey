import { addEntity } from "ecs/configureEcsStore";

const endSceneEntity = (position) => addEntity({
  sceneEnd: {},
  position,
  intersections: {},
  inScene: {value: true}
})

export default endSceneEntity
