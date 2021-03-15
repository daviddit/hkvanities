import React, { Component } from 'react'
import { StyledImageControls, StyledImageTextControl, StyledImageControl, StyledImageControlGrid } from './styles'


const ImageControls = ({ showText, size, handlePlateSize , handleShowText }) => (
  <StyledImageControls>
    <StyledImageTextControl button onClick={handleShowText.bind(this)}>{showText ? "View as images" : "View as text"}</StyledImageTextControl>
    <StyledImageControlGrid>Grid:</StyledImageControlGrid>
    <StyledImageControl button onClick={handlePlateSize.bind(this,'S')} active={size == 'S' ? true : false }>S</StyledImageControl>
    <StyledImageControl button onClick={handlePlateSize.bind(this,'M')} active={size == 'M' ? true : false }>M</StyledImageControl>
    <StyledImageControl button onClick={handlePlateSize.bind(this,'L')} active={size == 'L' ? true : false }>L</StyledImageControl>
  </StyledImageControls>
)

export default ImageControls
