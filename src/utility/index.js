export function inRange(x, min, max) {
  return ((x-min)*(x-max) <= 0);
}

export function clamp(value, min, max) {
  return Math.min(Math.max(parseInt(value), min), max)
}
