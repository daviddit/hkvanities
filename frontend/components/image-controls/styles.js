import styled from 'styled-components'
import { device } from '../../lib/device'

export const StyledImageControls = styled.nav`
  display: flex;
  margin: 0;
  min-width: 40%;
  //vertical-align: middle;
  //border: 1px solid pink;
  justify-content: space-around;
`

export const StyledImageControl = styled.button`
  font-size: 1.2rem;
  //letter-spacing: .5px;
  border: ${props => props.active ? "1px solid black" : "1px solid transparent"};
  border-radius: 50%;
  background-color: white;
  padding: 0rem 0.9rem;
  margin: .5rem;
  text-transform: uppercase;
  white-space: nowrap;
  list-style: none;
  cursor: pointer;
  outline: 0;
  display: none;

  @media ${device.laptop} {
  display: inline;
  }

  &:hover 
  {
  border: 1px solid black;
  }

  &:active
  {
   border: 1.5px solid hsl(46,100%,50%);
   background-color: hsl(46,100%,50%);
  }
`

export const StyledImageTextControl = styled.a`
  //width: 40%;
  font-size: 1.2rem;
  border: 1px solid black;
  background-color: transparent;
  border: 0;
  padding: 0rem 1.5rem;
  //line-height: 0.5rem;
  margin: .5rem;
  margin: .5rem .5rem .5rem 2rem;
  white-space: nowrap;
  cursor: pointer;

  @media ${device.laptop} {
  display: block;
  }

  &:hover 
  {
   text-decoration: underline;
  }
`

export const StyledImageControlGrid = styled.a`
  font-size: 1.2rem;
  border: 1px solid black;
  background-color: white;
  border: 0;
  padding: 0rem 1.5rem;
  //line-height: 0.5rem;
  margin: .5rem;
  white-space: nowrap;
  display: none;

  @media ${device.laptop} {
  display: block;
  }


`
