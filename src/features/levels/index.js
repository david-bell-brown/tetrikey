import level1 from './level_1.json'
import level2 from './level_2.json'
import level3 from './level_3.json'
import level4 from './level_4.json'
import parseLevel from './parseLevel'

const levels = ([
  level1,
  level2,
  level3,
  level4,
]).map(level => parseLevel(level))

export default levels
