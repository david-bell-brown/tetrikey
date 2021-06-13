import level1 from './level_1.json'
import level2 from './level_2.json'
import parseLevel from './parseLevel'

const levels = ([
  level1,
  level2
]).map(level => parseLevel(level))

export default levels
