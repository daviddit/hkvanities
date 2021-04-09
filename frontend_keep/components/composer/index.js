import { Component } from 'react'
import styled from 'styled-components'

import Selection from '../selection'
import SelectionControls from '../selection-controls'
import DragPreview from '../dragpreview'

import { StyledComposer } from './styles'

export default function Composer({plates, setPlates, showText, size, handlePlateSize, handleShowText, handlePlates }) {
 return (
  <StyledComposer>
    <DragPreview />
    <Selection plates={plates} setPlates={setPlates} showText={showText} size={size} handlePlateSize={handlePlateSize} handleShowText={handleShowText} handlePlates={handlePlates} />
  </StyledComposer>
)

}
