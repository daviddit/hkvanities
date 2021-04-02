import styled from 'styled-components'
import { device } from '../../lib/device'

export const StyledImageControls = styled.nav`
  display: flex;
  margin: 0;
  min-width: 100%;
  justify-content: space-between;

  @media ${device.laptop} {
    //border: 1px solid pink;
    justify-content: flex-end;
    min-width: 20%;
  }
`

export const StyledImageControl = styled.button`
  font-size: 1.5rem;
  border: ${props => props.active ? "1px solid black" : "1px solid transparent"};
  border-radius: 50%;
  background-color: white;
  padding: 0rem;
  width: 2.5rem;
  height: 2.5rem;
  margin: 1rem;
  margin-right: 4rem;
  margin-left: 4rem;
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

  &:nth-child(3) // S
  {
   margin-left: 2rem;
  }

  &:nth-child(5) // L
  {
   margin-right: 0;
  }

`

export const StyledImageTextControl = styled.a`
  //width: 40%;
  font-size: 1.8rem;
  background-color: transparent;
  border: 0;
  //line-height: 0.5rem;
  white-space: nowrap;
  cursor: pointer;
  width: 15rem;

  @media ${device.laptop} {
  font-size: 1.5rem;
  padding: 0rem 1.5rem;
  margin: .5rem .5rem .5rem 2rem;
  display: block;
  text-align: center;
  }

  &:hover 
  {
   text-decoration: underline;
  }
`

export const StyledImageControlGrid = styled.a`
  font-size: 1.5rem;
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

export const StyledImageControlSlider = styled.button`
  border: 1px solid white;
  background-color: white;
  outline: 0;

  &:active
  {
   background-color: white;
  }

  @media ${device.laptop} {
   display: none;
  }
`
