import { useSelector } from "react-redux"
import { selectWallEntity } from "./wallEntity"
import WallRender from "./WallRender"

const Wall = () => {
  const walls = useSelector(selectWallEntity)
  return walls.map(wall => <WallRender
    key={wall.id}
    id={wall.id}
    x={wall.position.x}
    y={wall.position.y}
  />)
}

export default Wall
