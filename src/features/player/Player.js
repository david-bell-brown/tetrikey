import { useSelector } from "react-redux"
import { selectPlayerEntity } from "./playerEntity"
import PlayerRender from "./PlayerRender"

const Player = () => {
  const players = useSelector(selectPlayerEntity)
  return players.map(player => <PlayerRender
    key={player.id}
    id={player.id}
    x={player.position.x}
    y={player.position.y}
    rotation={player.rotation.value}
  />)
}

export default Player
