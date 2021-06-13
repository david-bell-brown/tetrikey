import { useSelector } from 'react-redux'
import { selectEndSceneEntity } from './endSceneEntity'
import {ReactComponent as FlagSvg} from './flag.svg'

const Sprite = props => (
  <FlagSvg width="1" height="1" {...props} />
)

const EndScene = () => {
  const endScenes = useSelector(selectEndSceneEntity)
  return (
    endScenes.map(e => <Sprite key={e.id} id={e.id} x={e.position.x} y={e.position.y}/>)
  )
}

export default EndScene
