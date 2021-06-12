export default function mergeById(a1, a2) {
  return a1.map(itm => ({
    ...itm,
    ...a2.find((item) => (item.id === itm.id))
  }));
}
