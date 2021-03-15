import styled from 'styled-components'
import { device } from '../../lib/device'

export const StyledButton = styled.div`
  border-color: transparent;
  border: 2px solid black;
  border-radius: 1rem;
  width: 15rem;
  height: 5rem;
  text-align: center;
  line-height: 4.5rem;
  text-transform: uppercase;
  letter-spacing: .6px;
  margin: auto;
  cursor: pointer;
  background: none;

  @media ${device.laptop} {
    margin: 5rem auto 6rem auto;
    border: 1px solid black;
  }

  &:hover{
    color: white;
    background-color: hsl(46, 100%, 50%);
    border: none;
  }
`

export const StyledControl = styled.div`
  border-color: transparent;
  border: 0px solid black;
  border-radius: 1rem;
  width: 15rem;
  height: 5rem;
  text-align: center;
  line-height: 4.5rem;
  text-transform: uppercase;
  letter-spacing: .6px;
  margin: auto;
  cursor: pointer;
  background: none;

  @media ${device.laptop} {
    margin: 5rem auto 6rem auto;
    border: 1px solid black;
  }

  &:hover{
    color: white;
    background-color: hsl(46, 100%, 50%);
    border: none;
  }
`
