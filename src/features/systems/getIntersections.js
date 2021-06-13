import { intersections, position } from "data/index";
import createSystem from "ecs/createSystem";
import isEqual from "lodash.isequal";

export const checkIntersects = (e, others) => others.filter(o => (o.id !== e.id && isEqual(o.position, e.position)))

const getIntersections = createSystem(
  [[intersections, position], [position]],
  ([intersectors, others]) => (
    intersectors.map(e => ({
      ...e,
      intersections: {
        value: checkIntersects(e, others).map(o => o.id)
      }
    }))
  )
)

export default getIntersections
