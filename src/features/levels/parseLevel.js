import tilesetJson from './tileset.json'
import keyShardEntity from 'features/keyShard/keyShardEntity'
import playerEntity from 'features/player/playerEntity'
import wallEntity from 'features/wall/wallEntity'
import endSceneEntity from 'features/scene/endSceneEntity'
import blockEntity from 'features/block/blockEntity'
import lockEntity from 'features/lock/lockEntity'
import lockBlockEntity from 'features/lock/lockBlockEntity'
import lockHoleEntity from 'features/lock/lockHoleEntity'

export const entityKey = {
  player: playerEntity,
  wall: wallEntity,
  endLevel: endSceneEntity,
  key: blockEntity,
  lock: lockBlockEntity,
  keyHole: lockHoleEntity
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
  const room = {
    width: level.width,
    height: level.height
  }
  const base = level.layers.find(layer => layer.name === 'level')
  const keys = level.layers.filter(layer => layer.name === 'key')
  const locks = level.layers.filter(layer => layer.name === 'lock')

  return {
    room,
    actions: [
      ...(mapLevelData(
        base,
        ({type, position}) => entityKey[type](position)
      )),
      ...(keys.map((layer, index) => keyShardEntity(mapLevelData(layer, (({type, position}) => ({
        type,
        position,
        color: colors[index % colors.length]
      })))))),
      ...(locks.map((layer) => lockEntity(mapLevelData(layer, (({type, position}) => ({
        type,
        position,
      })))))),
    ],
    
  }
}

export default parseLevel
