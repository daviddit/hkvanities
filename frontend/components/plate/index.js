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


//TODO: test to deactivate drag and drop
nohover = true
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
 

/*
  const handleScroll = () => {setOver(false)}
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
   });
*/

  const handleClick= (t,plate) => {
	handlePlates(t,plate)
	//setTimeout(() => setOver(false),500)
	setOver(false)
	  //console.log('click',over)
  }

  const showAddPlate = handlePlates && over


  return (
     <StyledPlate innerRef={drag} size={size} onContextMenu={(e) => e.preventDefault() } onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <StyledPlateFigure>
	  <StyledPlateImageContainer over={over}>
	  { !showText && (<StyledPlateImage draggable={draggable} nohover={nohover} size={size} src={plate.thumbnail} alt={plate.text} /> )  }
	  { showText && (<StyledPlateText size={size} over={over}>({plate.text.split(" ").join("")})</StyledPlateText>) }
	  { showAddPlate && (<StyledAddPlate addImgSize={addImgSize} src={plate.thumbnail} alt={plate.text} over={over} showText={showText} onClick={handleClick.bind(this,plate)}><img src="/static/img/add.svg" draggable="false" /></StyledAddPlate>)}
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
