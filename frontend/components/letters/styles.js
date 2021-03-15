import styled from 'styled-components'
import { device } from '../../lib/device'

export const StyledLetters = styled.section`
  display: flex;
  justify-content: ${props => props.showText ? "start" : "space-between" };
  flex-wrap: wrap;
  flex-direction: row;
  padding: 0 2rem ;

  @media ${device.laptop} {

  }
`

export const StyledLetter = styled.button`
  font-size: 4rem;
  cursor: pointer;
  //border: 1px solid transparent;
  border: 1px solid  ${props => props.isLetter ? "black" : "transparent"};
  width: 5rem;
  height: 5rem;
  background-color: white;
  border-radius: 50%;
  outline: 0;
  //transform: ${props => props.isLetter ? "scale(1.5)" : "initial" };
  //font-weight: ${props => props.isLetter ? "bold": "normal"};
  //transition: all 0.3s ease-in-out;

  &:hover
  {
     border: 1px solid black;
  }


  &:active
  {
    border: 1px solid black;
    background-color: hsl(46,100%,50%);
  }


  @media ${device.laptop} {
   width: 4.25rem;
   height: 4.25rem;
   font-size: 2rem;
   padding: 1rem;

	  &:hover
	  {
	    border: 1px solid black;
	  }

  }
`
