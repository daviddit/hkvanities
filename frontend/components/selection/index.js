import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import SelectionPlate from '../selection-plate'
import { StyledSelection, StyledSelectionPlates, StyledSelectionImage, StyledDropZone, StyledDropZoneInner , StyledSelectionNote, StyledPlaceholderDropZone, StyledSelectionControls } from './styles'
import SelectionControls from '../selection-controls'
import ImageControls from '../image-controls'
import { useDrop } from 'react-dnd'
//import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
const Selection  = ({plates, setPlates, handlePlates, showText, size, handlePlateSize, handleShowText }) => {
const router = useRouter()

  const [{ canDrop }, drop] = useDrop({
    accept: 'plate',
    drop: (item) => {
  	//scrollSmoothToBottom ('dropZone') 
      if (item.value.id) return

      handlePlates(item)
      /*
      setPlates([
        ...plates,
        {
          id: uuid(),
          ...item.value,
        }
      ])
      */
    },
    collect: (monitor) => ({
      canDrop: monitor.canDrop(),
    })
  })



  function scrollSmoothToBottom (id) {
	var div = document.getElementById(id);
	  console.log(0,div)
	  /*
	$('#' + id).animate({
		scrollTop: div.scrollHeight - div.clientHeight
	}, 500);
	*/

	  console.log(1,div.scrollTop,' = ',div.scrollHeight,' - ',div.clientHeight)
	  console.log(2,div.scrollTop)
          div.scrollTop = div.clientHeight;
	  console.log(3,div.scrollTop)
  }


  const handleReset = () => {
    setPlates([])
  }

  const handleContinue = () => {
	  if(plates.length>0)
	  {
	    router.push({
	      pathname: '/publish',
	      query: { plates: plates.map((p) => p.text).join(',') },
	    })
	  }
  }

  const handleMove = (item, oldIndex, newIndex) => {

    const newPlates = [...plates]
    if (typeof oldIndex === 'number') {
      newPlates.splice(oldIndex, 1)
    }
    newPlates.splice(newIndex, 0, item)
    setPlates(newPlates)
  }

  const handleRemove = (index) => {
    const newPlates = [...plates]
    newPlates.splice(index, 1)
    setPlates(newPlates)
  }

  return (
    <React.Fragment>
      <StyledSelection>
        <StyledSelectionPlates>
          {plates.length ? (
            <React.Fragment>
              {plates.map((plate, i) => (
                <SelectionPlate key={plate.id} index={i} onMove={handleMove} onRemove={handleRemove} dropable plate={plate}/>
              ))}
              <StyledDropZone id="dropZone" innerRef={drop} active={canDrop}></StyledDropZone>
            </React.Fragment>
          ) : (
            <StyledPlaceholderDropZone innerRef={drop} active={canDrop}>
              <StyledSelectionNote>{'Drag the images and create your own poem, then share or save on your device.'}</StyledSelectionNote>
              <StyledDropZone innerRef={drop} active={canDrop}></StyledDropZone>
            </StyledPlaceholderDropZone>
          )}
        </StyledSelectionPlates>
      </StyledSelection>

      <StyledSelectionControls>
      <SelectionControls onReset={handleReset} onContinue={handleContinue} platesLength={plates.length} />
       <ImageControls showText={showText} size={size} handlePlateSize={handlePlateSize} handleShowText={handleShowText} />
      </StyledSelectionControls>
    </React.Fragment>
  )
}

//<StyledDropZoneInner><AddCircleOutlineIcon style={{ fontSize: '3em' }}/></StyledDropZoneInner>
//<StyledDropZone innerRef={drop} active={canDrop}><StyledDropZoneInner><AddCircleOutlineIcon style={{ fontSize: '3em' }}/></StyledDropZoneInner></StyledDropZone>

export default Selection
