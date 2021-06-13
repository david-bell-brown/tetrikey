import React from "react"
import {ReactComponent as BlockSvg} from 'features/block/greyBlock.svg'

const WallRender = React.memo(({id, x, y}) => {
  return (
    <g id={id} >
      <rect x={x} y={y} width={1} height={1} fill="#ffffff"/>
      <BlockSvg x={x} y={y} width={1} height={1}/>
    </g>
  )
})

export default WallRender
