import keyShardEntity from 'features/keyShard/keyShardEntity'
import playerEntity from 'features/player/playerEntity'
import wallEntity from 'features/wall/wallEntity'
// import backgroundEntity from 'features/background/backgroundEntity'
// import endSceneEntity from './endSceneEntity'
// import lockEntity from 'features/lock/lockEntity'


const parseLevel = level => ({
  room: level.room,
  actions: [
    ...(level.walls.map(e => wallEntity({x: e.x, y: e.y}))),
    ...(level.keyShards.map(e => keyShardEntity(e.map(b => ({
      position: {x: b.x, y: b.y},
      color: b.color
    }))))),
    playerEntity({x: level.player.x, y: level.player.y}),
  ],
  
})

export default parseLevel
