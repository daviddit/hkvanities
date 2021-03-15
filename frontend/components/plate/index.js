import Link from 'next/link'
import styled from 'styled-components'
import { StyledPlate, StyledPlateFigure, StyledPlateImage, StyledPlateCaption, StyledPlateImageNoHover, StyledPlateText } from './styles'
import { useDrag } from 'react-dnd'

const Plate = ({ plate, showText, nohover, size }) => {
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


  return (
     <StyledPlate innerRef={drag} size={size}>
      <StyledPlateFigure>
	  { !showText && (<StyledPlateImage draggable={draggable} nohover={nohover} size={size} src={plate.thumbnail} alt={plate.text} /> )  }
	  { showText && (<StyledPlateText size={size}>({plate.text.split(" ").join("")})</StyledPlateText>) }
	  { !showText && (<StyledPlateCaption>{plate.text}</StyledPlateCaption>) }
      </StyledPlateFigure>
     </StyledPlate>
  )
}

Plate.defaultProps = {
  size: "M",
}

export default Plate
