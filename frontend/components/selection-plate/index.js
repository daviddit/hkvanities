import Link from 'next/link'
import styled from 'styled-components'
import { useDrag, useDrop } from 'react-dnd';
import { TouchBackend } from 'react-dnd-touch-backend'
import { ItemTypes } from '../../lib/ItemTypes';
import { StyledSelectionPlate, StyledSelectionImage, StyledSelectionCaption, StyledDeletePlate, StyledNextPlate, StyledPrevPlate } from './styles'
import Cancel from '@material-ui/icons/Cancel';

const SelectionPlate = ({ index, plate, plates, onMove, onRemove, handlePrevPlate, handleNextPlate }) => {
  const ref = React.useRef()
  const [over,setOver] =  React.useState(false)

  const [ {handlerId}, drop] = useDrop({
    accept: 'plate',
    drop: (item) => {
	    if (!ref.current) { return; }
      onMove(item.value, item.index, index)
    },
   collect(monitor){
	   return { handlerId: monitor.getHandlerId(), };
    },
    hover (item,monitor)
    {
	    if (!ref.current) { return; }

            const dragIndex = item.index;
            const hoverIndex = index;
            if (dragIndex === hoverIndex) {
                return;
            }
            onMove(item.value,dragIndex, hoverIndex);
            item.index = hoverIndex;
     }
  })
  const [ {isDragging }, drag] = useDrag({
    item: {
      index: index,
      id: plate.image,
      value: plate,
      type: 'plate',
    },
   collect: (monitor) => ({ isDragging: monitor.isDragging(), }),
   end: (dropResult,monitor) => { 
	    const i = monitor.getItem();
            const didDrop = monitor.didDrop();
            if (!didDrop) { onRemove(i.index) }
   },
  });

  drop(drag(ref))

  const handleMouseLeave = () => {
	setOver(false)
  }


  const handleMouseEnter = () => {
	setOver(true)
  }


  const onDelete = (i) => {
	onRemove(i)
  }


     // <StyledDeletePlate src={plate.thumbnail} alt={plate.text} over={over} onClick={onDelete.bind(this,index)}><Cancel style={{fontSize: '4rem', fill: 'black' }}/></StyledDeletePlate>

  return (
    <StyledSelectionPlate innerRef={ref} data-handler-id={handlerId} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  onContextMenu={(e) => e.preventDefault()}>
      <StyledDeletePlate src={plate.thumbnail} alt={plate.text} over={over} onClick={onDelete.bind(this,index)}><img src="/static/img/delete.svg"/></StyledDeletePlate>
          { index < plates.length-1 && (<StyledNextPlate src={plate.thumbnail} alt={plate.text} over={over} onClick={handleNextPlate.bind(this,index)}><img src="/static/img/prev.svg"/></StyledNextPlate>)}
	  { index > 0 && (<StyledPrevPlate src={plate.thumbnail} alt={plate.text} over={over} onClick={handlePrevPlate.bind(this,index)}><img src="/static/img/next.svg"/></StyledPrevPlate>)}
      <StyledSelectionImage src={plate.thumbnail} alt={plate.text}/>
        <StyledSelectionCaption>{plate.text}</StyledSelectionCaption>
    </StyledSelectionPlate>
  )
}

export default SelectionPlate
