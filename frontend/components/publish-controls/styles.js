import styled from 'styled-components'
import { device } from '../../lib/device'

export const StyledControls = styled.nav`
  display: block;
  margin: 0;
  //max-width: 80%;
  max-width: 100%;
  text-align: center;

  @media ${device.laptop} {
   display: flex;
   margin: 2rem 0;
  }
`

export const StyledControl = styled.button`
  background-color: white;
  font-size: 1.5rem;
  letter-spacing: .5px;
  border: 1.5px solid black;
  border-radius: 10px;
  padding: 1.2rem 3rem;
  margin: 0 .5rem 2rem .5rem;
  text-transform: uppercase;
  white-space: nowrap;
  cursor: pointer;
  outline: 0;

  @media ${device.laptop} {
  margin: 0 .5rem 0 .5rem ;
  }

  &:active{
   transform: translateX(1px),translateY(-2px)
  }
`
