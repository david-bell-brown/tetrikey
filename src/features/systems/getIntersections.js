import { intersections, position } from "data/index";
import createSystem from "ecs/createSystem";
import isEqual from "lodash.isequal";

const getIntersections = createSystem(
  [[intersections, position], [position]],
  ([intersectors, others]) => (
    intersectors.map(e => ({
      ...e,
      intersections: {
        value: others
          .filter(o => (o.id !== e.id && isEqual(o.position, e.position)))
          .map(o => o.id)
      }
    }))
  )
)

export default getIntersections
