import React, { Component } from 'react'
import { StyledImageControls, StyledImageTextControl, StyledImageControl, StyledImageControlGrid, StyledImageControlSlider } from './styles'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const ImageControls = ({ showText, size, handlePlateSize , handleShowText, slide, handleSlide }) => (
  <StyledImageControls>
    <StyledImageTextControl button onClick={handleShowText.bind(this)}>{showText ? "View as images" : "View as text"}</StyledImageTextControl>
    <StyledImageControlGrid>Grid:</StyledImageControlGrid>
    <StyledImageControl button onClick={handlePlateSize.bind(this,'S')} active={size == 'S' ? true : false }>S</StyledImageControl>
    <StyledImageControl button onClick={handlePlateSize.bind(this,'M')} active={size == 'M' ? true : false }>M</StyledImageControl>
    <StyledImageControl button onClick={handlePlateSize.bind(this,'L')} active={size == 'L' ? true : false }>L</StyledImageControl>
    <StyledImageControlSlider button onClick={handleSlide}>{slide ? (<ExpandLessIcon fontSize="large"/>) : (<ExpandMoreIcon fontSize="large"/>)}</StyledImageControlSlider>
  </StyledImageControls>
)

export default ImageControls
