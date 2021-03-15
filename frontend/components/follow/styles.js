import styled from 'styled-components'
import { device } from '../../lib/device'

export const FollowButton = styled.button`
  border-color: transparent;
  border: 2px solid black;
  border-radius: 1rem;
  width: 15rem;
  height: 5rem;
  text-align: center;
  font-size: 2rem;
  line-height: initial;
  //text-transform: uppercase;
  letter-spacing: .6px;
  cursor: pointer;
  background: none;
  color: black;

  @media ${device.laptop} {
    margin: 5rem 2rem 6rem 2rem;
    border: 1px solid black;
  }

  &:hover{
    color: white;
    background-color: hsl(46, 100%, 50%);
    border: none;
  }
`

export const FollowButtons = styled.div`
 display: flex;
 flex-grow: column;
 justify-content: center;
 align-items: center;
 height: 92vh;
 margin: 0 auto;

  @media ${device.laptop} {
  }

`
