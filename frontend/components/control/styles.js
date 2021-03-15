import styled from 'styled-components'
import { device } from '../../lib/device'

export const StyledControl = styled.div`
  border: 0;
  border-radius: 1rem;
  width: 15rem;
  height: 5rem;
  text-align: center;
  line-height: 4.5rem;
  text-transform: uppercase;
  letter-spacing: .6px;
  margin: 1rem;
  cursor: pointer;
  color: black;
  background: none;

  @media ${device.laptop} {
  font-size: 4rem;
  }

  &:active{
    border: 0;
  }

  &:hover{
    color: hsl(46, 100%, 50%);
  }
`

export const StyledControlPages = styled.div`
  border: 0;
  border-radius: 1rem;
  width: 15rem;
  height: 5rem;
  text-align: center;
  line-height: 4.5rem;
  text-transform: uppercase;
  letter-spacing: .6px;
  margin: 1rem;
  cursor: pointer;
  color: black;
  background: none;

  @media ${device.laptop} {
  font-size: 2.5rem;
  }

  &:active{
    border: 0;
  }

  &:hover{
    color: hsl(46, 100%, 50%);
  }
`

export const ControlsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`
