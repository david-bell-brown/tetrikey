import { createComponent } from "ecs"

export const scene = createComponent('scene')
export const position = createComponent('position', {x: 0, y: 0})
export const rotation = createComponent('rotation', {value: 0})
export const active = createComponent('active', {value: false})
export const size = createComponent('size', {width: 1, height: 1})
export const movement = createComponent('movement', {x: 0, y: 0})
// export const collision = createComponent('collision', {intersections: [], bumps: [], adjacents: []})
export const bumps = createComponent('bumps', {value: []})
export const adjacents = createComponent('adjacents', {value: []})
export const intersections = createComponent('intersections', {value: []})
export const solid = createComponent('solid')
export const inScene = createComponent('inScene', {value: false})
export const endScene = createComponent('endScene')
export const animationState = createComponent('animationState', {value: false})
export const player = createComponent('player')
export const block = createComponent('block')
export const blockGroup = createComponent('blockGroup')
export const inGroup = createComponent('inGroup', {groupId: null})
export const addBlocksToGroup = createComponent('addBlocksToGroup', {blocks: []})
export const color = createComponent('color', {value: '#fff'})
export const keyShard = createComponent('keyShard')
export const grabbable = createComponent('grabbable', {value: false})
export const wall = createComponent('wall')
