import level1 from './level_1.json'
import parseLevel from './parseLevel'

const levels = ([
  level1
]).map(level => parseLevel(level))

export default levels
