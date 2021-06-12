import tilesetJson from './tileset.json'
import keyShardEntity from 'features/keyShard/keyShardEntity'
import playerEntity from 'features/player/playerEntity'
import wallEntity from 'features/wall/wallEntity'
// import backgroundEntity from 'features/background/backgroundEntity'
import endSceneEntity from 'features/scene/endSceneEntity'
// import lockEntity from 'features/lock/lockEntity'

const entityKey = {
  player: playerEntity,
  wall: wallEntity,
  endLevel: endSceneEntity
}

const tileset = tilesetJson.tiles.reduce((acc, {id, type}) => ({
  ...acc,
  [id + 1]: type
}), {})

const mapLevelData = ({data, width, height}, callback) => (
  data.reduce((acc, curr, index) => curr !== 0 ? [
    ...acc,
    {
      type: tileset[curr],
      position: {
        x: index % width,
        y: Math.floor(index / width)
      }
    }
  ] : acc, []).map(callback)
)

const colors = [
  '#3866FF',
  '#FF38CA',
  '#FFD138',
  '#38FF6D',
]

const parseLevel = level => {
  console.log(level)
  const room = {
    width: level.width,
    height: level.height
  }
  const base = level.layers.find(layer => layer.name === 'level')
  const keys = level.layers.filter(layer => layer.name === 'key')
  // const locks = level.layers.filter(layer => layer.name === 'lock').data

  return {
    room,
    actions: [
      ...(mapLevelData(
        base,
        ({type, position}) => entityKey[type](position)
      )),
      ...(keys.map((layer, index) => keyShardEntity(mapLevelData(layer, (({position}) => ({
        position,
        color: colors[index % colors.length]
      })))))),
      // ...(level.walls.map(e => wallEntity({x: e.x, y: e.y}))),
    ],
    
  }
}

export default parseLevel
