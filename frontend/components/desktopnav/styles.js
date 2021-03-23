import styled from 'styled-components'
import { device } from '../../lib/device'

export const StyledMenu = styled.menu`
  //border: 2px solid pink;
  line-height: 4rem;
  margin: .5rem .5rem;

  @media ${device.laptop} {
    font-size: 3rem;
    line-height: 2rem;
  }
`

export const StyledA = styled.span`
  margin: 0 1rem 0 1rem;
  font-size: 3rem;
  opacity: ${props  => props.active ? '1' : '0.2'};
  transition: opacity .25s ease-in-out;

  @media ${device.laptop} {
    font-size: 3rem;
  }

  &:hover {
  opacity: 1;
  }
`

export const StyledMenu2 = styled.menu`
  //border: 1px solid pink;
  margin: .5rem .5rem;
  margin-left: auto;
  font-size: 3rem;
  line-height: 2rem;
`
