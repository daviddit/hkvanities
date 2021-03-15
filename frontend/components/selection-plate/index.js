import Link from 'next/link'
import styled from 'styled-components'
import { useDrag, useDrop } from 'react-dnd';
import { TouchBackend } from 'react-dnd-touch-backend'
import { ItemTypes } from '../../lib/ItemTypes';
import { StyledSelectionPlate, StyledSelectionImage, StyledSelectionCaption, StyledDeletePlate } from './styles'
import Cancel from '@material-ui/icons/Cancel';

const SelctionPlate = ({ index, plate, onMove, onRemove }) => {
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



  return (
    <StyledSelectionPlate innerRef={ref} data-handler-id={handlerId} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <StyledDeletePlate src={plate.thumbnail} alt={plate.text} over={over} onClick={onDelete.bind(this,index)}><Cancel style={{fontSize: '4rem', fill: 'black' }}/></StyledDeletePlate>
      <StyledSelectionImage src={plate.thumbnail} alt={plate.text}/>
        <StyledSelectionCaption>{plate.text}</StyledSelectionCaption>
    </StyledSelectionPlate>
  )
}

export default SelctionPlate