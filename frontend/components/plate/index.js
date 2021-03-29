import Link from 'next/link'
import styled from 'styled-components'
import { StyledPlate, StyledPlateFigure, StyledPlateImage, StyledPlateImageContainer, StyledPlateCaption, StyledPlateImageNoHover, StyledPlateText, StyledAddPlate } from './styles'
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
	  //console.log('leave => over:','false')
	setOver(false)
  }


  const handleMouseEnter = () => {
	  //console.log('enter => over:','true')
	setOver(true)
  }



   let addImgSize = '8rem'

   if(showText) 
   {
	switch(size)
	   {
		   case 'S': addImgSize = '3rem'; break;
		   case 'L': addImgSize = '8rem'; break;
		   default: addImgSize = '6rem'
	   }
   }


    //width: ${props => props.addImgSize == "S" ? '3rem' : '8rem'};


  return (
     <StyledPlate innerRef={drag} size={size} onContextMenu={(e) => e.preventDefault() } onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <StyledPlateFigure>
	  <StyledPlateImageContainer>
	  { !showText && (<StyledPlateImage draggable={draggable} nohover={nohover} size={size} src={plate.thumbnail} alt={plate.text} /> )  }
	  { showText && (<StyledPlateText size={size} over={over}>({plate.text.split(" ").join("")})</StyledPlateText>) }
	  { handlePlates && (<StyledAddPlate addImgSize={addImgSize} src={plate.thumbnail} alt={plate.text} over={over} showText={showText} onClick={handlePlates.bind(this,plate)}><img src="/static/img/add.svg"/></StyledAddPlate>)}
	  </StyledPlateImageContainer>
	  { !showText && (<StyledPlateCaption>{plate.text}</StyledPlateCaption>) }
      </StyledPlateFigure>
     </StyledPlate>
  )
}

Plate.defaultProps = {
  size: "M",
}

export default Plate
