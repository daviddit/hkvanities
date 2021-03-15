import { Component } from 'react'
import styled from 'styled-components'

import Selection from '../selection'
import SelectionControls from '../selection-controls'
import DragPreview from '../dragpreview'

import { StyledComposer } from './styles'

export default function Composer({showText, size, handlePlateSize, handleShowText}) {
 return (
  <StyledComposer>
    <DragPreview />
    <Selection showText={showText} size={size} handlePlateSize={handlePlateSize} handleShowText={handleShowText} />
  </StyledComposer>
)

}
