import styled from 'styled-components'

export const StyledControls = styled.nav`
  display: ${props => props.slide ?  'flex' : 'none' };
  //border: 1px solid pink;
  flex-grow: 1;
  margin: 0rem 0;
  max-width: 80%;
`

export const StyledControl = styled.button`
  background-color: white;
  font-size: 1.5rem;
  letter-spacing: .5px;
  border: 1.5px solid black;
  border-radius: 10px;
  padding: .7rem 3rem;
  margin: 0 .5rem .5rem 0;
  text-transform: uppercase;
  white-space: nowrap;
  list-style: none;
  cursor: ${props => props.notAllowed ? 'not-allowed' : 'pointer' };
  outline: 0;

  &:active 
  {
   border: 1.5px solid hsl(46,100%,50%);
   background-color: hsl(46,100%,50%);
  }

`
