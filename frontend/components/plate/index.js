import Link from 'next/link'
import styled from 'styled-components'
import { StyledPlate, StyledPlateFigure, StyledPlateImage, StyledPlateCaption, StyledPlateImageNoHover, StyledPlateText, StyledAddPlate } from './styles'
import { useDrag } from 'react-dnd'

const Plate = ({ plate, showText, nohover, size, handlePlates }) => {
const [over,setOver] =  React.useState(false)

let draggable = null

  let [, drag] = useDrag({
    item: {
      id: plate.image,
      value: plate,
      type: 'plate',
    },
  })


if(nohover)
{
 drag = null
 draggable = "false"
}

  const handleMouseLeave = () => {
	  //console.log('over','false')
	setOver(false)
  }


  const handleMouseEnter = () => {
	  //console.log('over','true')
	setOver(true)
  }



  return (
     <StyledPlate innerRef={drag} size={size} onContextMenu={(e) => e.preventDefault() } onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <StyledPlateFigure>
	  { !showText && (<StyledPlateImage draggable={draggable} nohover={nohover} size={size} src={plate.thumbnail} alt={plate.text} /> )  }
	  { showText && (<StyledPlateText size={size}>({plate.text.split(" ").join("")})</StyledPlateText>) }
	  { !showText && (<StyledPlateCaption>{plate.text}</StyledPlateCaption>) }
	  { handlePlates && (<StyledAddPlate src={plate.thumbnail} alt={plate.text} over={over} onClick={handlePlates.bind(this,plate)}><img src="/static/img/add.svg"/></StyledAddPlate>)}
      </StyledPlateFigure>
     </StyledPlate>
  )
}

Plate.defaultProps = {
  size: "M",
}

export default Plate
