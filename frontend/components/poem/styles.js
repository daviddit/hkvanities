import styled from 'styled-components'
import { device } from '../../lib/device'

export const StyledPoem = styled.video`
  width: 90vw;
  height: auto;
  //background-color: lightgrey;
  background-color: transparent;
  bottom: 0;
  opacity: ${props => props.autoPlay ? "1" : "0.5" };
  //${props => props.autoPlay ? null : "filter: blur(2px);" }
  //object-fit: cover;
  margin: 0;

  @media ${device.laptop} {
    width: calc(((100vw - 6rem) / 4) - 2rem);
    height: calc(((100vw - 6rem) / 4) - 2rem);
    margin: 0;
  }

 &:hover
 {
  filter: blur(0);
  opacity: 1;
 }

`

export const StyledPoemCaption = styled.figcaption`
  text-transform: uppercase;
  font-size: 1.3rem;
  line-height: 1rem;
  color: black;
  padding-bottom: 1.5rem;
  margin: 0;

  &:hover
  {
   ${props => props.hasSlug ? 'text-decoration: underline;' : null }
  }
`

export const StyledPoemFigure = styled.figure`
  margin: 0;
  margin-bottom: 2rem;
`

    //height: calc(((100vw - 5rem) / 4) - 5rem);
