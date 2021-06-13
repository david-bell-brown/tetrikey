import React from "react"

const WallRender = React.memo(({id, x, y}) => {
  return (
    <rect id={id} x={x} y={y} width={1} height={1} fill="#ffffff"/>
  )
})

export default WallRender
