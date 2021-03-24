import styled from 'styled-components'
import { device } from '../../lib/device'

export const StyledLetters = styled.section`
  display: flex;
  //justify-content: ${props => props.showText ? "start" : "start" };
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 0 2rem ;

  @media ${device.laptop} {
  justify-content: space-between;
  }
`

export const StyledLetter = styled.button`
  font-size: 3rem;
  cursor: pointer;
  //border: 1px solid transparent;
  border: 1px solid  ${props => props.isLetter ? "black" : "transparent"};
  padding: 0;
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
   width: 3rem;
   height: 3rem;
   font-size: 2rem;

	  &:hover
	  {
	    border: 1px solid black;
	  }

  }
`
