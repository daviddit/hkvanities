import styled from 'styled-components'
import { device } from '../../lib/device'

export const StyledSelectionPlate = styled.article`
  margin: 2rem 1rem .5rem .5rem;
  cursor: grab;
  position: relative;

  @media ${device.laptop} {
  margin: 2rem 2rem .5rem .5rem;
  }
`

export const StyledSelectionImage = styled.img`
  width:  calc(((100vw - 3rem) / 3) - 2rem);
  height: calc(((100vw - 3rem) / 3) - 2rem);
  background-color: lightgrey;
  object-fit: cover;

  @media ${device.laptop} {
    width:  calc(((100vw - 5rem) / 4) - 5rem);
    height: calc(((100vw - 5rem) / 4) - 5rem);
    max-width: 15rem;
    max-height: 15rem;
  }

  &:hover {
    outline: .3rem solid hsl(46, 100%, 50%);
  }
`
export const StyledSelectionCaption = styled.figcaption`
  text-transform: uppercase;
`

export const StyledDeletePlate = styled.div`
  padding: 0;
  //background-color: white;
  //border-radius: 100%;
  top: -1.5rem;
  right: -1.5rem;
  opacity: ${props => props.over ? 1 : 0 };
  position: absolute;
  //display: ${props => props.over ? 'block' : 'none' };
  z-index: 1505;
  cursor: pointer;
  transition: opacity .5s ease-in-out;


  & img
  {
   width: 3rem;
  }
`
