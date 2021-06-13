import { useSelector } from "react-redux"
import { selectLockEntity } from "./lockEntity"
import LockRender from "./LockRender"

const Lock = () => {
  const locks = useSelector(selectLockEntity)
  return locks.map(lock => <LockRender
    key={lock.id}
    id={lock.id}
  />)
}

export default Lock
