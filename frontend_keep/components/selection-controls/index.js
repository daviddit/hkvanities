import React, { Component } from 'react'
import Link from 'next/link'

import { StyledControls, StyledControl } from './styles'

const SelectionControls = ({ onContinue, onReset, platesLength, slide }) => (
  <StyledControls slide={slide}>
    <StyledControl button onClick={onContinue} notAllowed={ platesLength ? null : true }>Continue</StyledControl>
    <StyledControl onClick={onReset}>Reset all</StyledControl>
  </StyledControls>
)

export default SelectionControls
