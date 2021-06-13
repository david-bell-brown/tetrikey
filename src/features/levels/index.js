import level1 from './level_1.json'
import level2 from './level_2.json'
import level3 from './level_3.json'
import level4 from './level_4.json'
import level5 from './level_5.json'
// lagfest
// import level6 from './level_6.json'
import level7 from './level_7.json'
import parseLevel from './parseLevel'
import {ReactComponent as level1Tutorial} from './level1Tutorial.svg'
import {ReactComponent as level3Tutorial} from './level3Tutorial.svg'
import {ReactComponent as level5Tutorial} from './level5Tutorial.svg'

export const tutorials = [
  level1Tutorial,
  null,
  level3Tutorial,
  null,
  level5Tutorial,
  null,
]

const levels = ([
  level1,
  level2,
  level3,
  level4,
  level5,
  // level6,
  level7
]).map(level => parseLevel(level))

export default levels
