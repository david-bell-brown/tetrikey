const BlockRender = ({id, x, y, color}) => {
  return (
    <rect id={id} x={x} y={y} width={1} height={1} fill={color}/>
  )
}

export default BlockRender
