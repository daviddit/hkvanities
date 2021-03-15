import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import SelectionPlate from '../selection-plate'
import { StyledSelection, StyledSelectionPlates, StyledSelectionImage, StyledDropZone, StyledDropZoneInner , StyledSelectionNote, StyledPlaceholderDropZone, StyledSelectionControls } from './styles'
import SelectionControls from '../selection-controls'
import ImageControls from '../image-controls'
import { useDrop } from 'react-dnd'
import { v4 as uuid } from 'uuid'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const Selection  = ({showText, size, handlePlateSize, handleShowText }) => {
  const router = useRouter()
  let pp = []
  if(router.query.plates)
  {
	const pla = router.query.plates.split(',');
	pla.map((p) => { pp = [...pp, { id: uuid(), type: "plates" , text: p, image: "/static/plates/"+p+".jpg", thumbnail: "/static/plates/thumbnails/"+p+".jpg" }]  })
	//router.query.plates.split(',').map((p) => { pp = [...pp,{ id: uuid(), value: p}]  })
  }
  const [plates, setPlates] = React.useState(pp)

  const [{ canDrop }, drop] = useDrop({
    accept: 'plate',
    drop: (item) => {
	    console.log("item",item)
      if (item.value.id) return
      setPlates([
        ...plates,
        {
          id: uuid(),
          ...item.value,
        }
      ])
    },
    collect: (monitor) => ({
      canDrop: monitor.canDrop(),
    })
  })


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
                <SelectionPlate key={plate.id} index={i} onMove={handleMove} onRemove={handleRemove}  dropable plate={plate}/>
              ))}
              <StyledDropZone innerRef={drop} active={canDrop}><StyledDropZoneInner><AddCircleOutlineIcon style={{ fontSize: '3em' }}/></StyledDropZoneInner></StyledDropZone>
            </React.Fragment>
          ) : (
            <StyledPlaceholderDropZone innerRef={drop} active={canDrop}>
              <StyledDropZone innerRef={drop} active={canDrop}><StyledDropZoneInner><AddCircleOutlineIcon style={{ fontSize: '3em' }}/></StyledDropZoneInner></StyledDropZone>
              <StyledSelectionNote>{'Drag the images and create your own poem, then share or save on your device.'}</StyledSelectionNote>
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

export default Selection
