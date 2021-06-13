import {useEffect} from 'react'
import {useSpring} from 'react-spring'

const useMovementSpring = ({x, y, rotation}) => {
  const [styles, api] = useSpring(() => ({config: {tension: 200, velocity: .02}, x: x, y: y, rotate: `${rotation}deg`}))
  useEffect(() => {
    api.start({x: x, y: y, rotate: `${rotation}deg`})
  }, [x, y, rotation, api])
  return styles
}

export default useMovementSpring
