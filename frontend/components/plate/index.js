import Link from 'next/link'
import styled from 'styled-components'
import { StyledPlate, StyledPlateFigure, StyledPlateImage, StyledPlateImageContainer, StyledPlateCaption, StyledPlateImageNoHover, StyledPlateText, StyledAddPlate } from './styles'
import { useDrag } from 'react-dnd'

const Plate = ({ plate, showText, nohover, size, handlePlates }) => {
const [ over , setOver ] =  React.useState(false)

let draggable = null

  let [, drag] = useDrag({
    item: {
      id: plate.image,
      value: plate,
      type: 'plate',
    },
  })


//TODO: test to deactivate drag and drop
nohover = true
if(nohover)
{
 drag = null
 draggable = "false"
}

  const handleMouseLeave = () => {
	  //console.log(0,'leave => over:',over)
	setOver(false)
	  //console.log(1,'leave => over:',over)
  }


  const handleMouseEnter = () => {
	 // console.log(0,'enter => over:',over)
	setOver(true)
	//  console.log(1,'enter => over:',over)
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
 

/*
  const handleScroll = () => {setOver(false)}
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
   });
*/

  const handleClick= (t,plate) => {
	//console.log(0,'click',over)
	handlePlates(t,plate)
	//setTimeout(() => setOver(false),500)
	//setOver(false)
	//console.log(1,'click',over)
  }

  return (
     <StyledPlate innerRef={drag} size={size} onContextMenu={(e) => e.preventDefault() } onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <StyledPlateFigure>
	  <StyledPlateImageContainer over={over}>
	  { !showText && (<StyledPlateImage draggable={draggable} nohover={nohover} size={size} src={plate.thumbnail} alt={plate.text} /> )  }
	  { showText && (<StyledPlateText size={size} over={over}>({plate.text.split(" ").join("")})</StyledPlateText>) }
	  { handleClick && (<StyledAddPlate addImgSize={addImgSize} src={plate.thumbnail} alt={plate.text} over={over} showText={showText}><img src="/static/img/add.svg" draggable="false" onClick={handleClick.bind(this,plate)}/></StyledAddPlate>)}
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
