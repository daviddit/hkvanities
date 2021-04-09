import * as React from 'react'
import { Preview } from 'react-dnd-multi-backend';
import styled from 'styled-components'
import { StyledImage } from './styles'

const DragPreview = ({}) => (
  <Preview>
    {({ item, style }) => (
      <StyledImage src={item.value.image} style={style}/>
    )}
  </Preview>
)

export default DragPreview
