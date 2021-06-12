const BlockRender = ({id, x, y, color, grabbable}) => {
  return (
    <rect
      id={id}
      x={x}
      y={y}
      width={1}
      height={1}
      fill={color}
      stroke="#ffffff"
      strokeWidth={grabbable ? .05 : 0}
    />
  )
}

export default BlockRender
