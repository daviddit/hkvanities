import styled from 'styled-components'
import { device } from '../../lib/device'

export const StyledHeader = styled.header`
  display: flex;
  //justify-content: space-between;
  flex-wrap: wrap;
  margin: 1rem 2rem;

  @media ${device.laptop} {
    margin: 1rem 2rem;
  }
`

export const StyledLogo = styled.a`
  font-size: 3rem;
  line-height: 4rem;
  cursor: pointer;
  z-index: 1500;
  letter-spacing: 0px;
  margin-top: .5rem;
  margin-bottom: .5rem;
  margin-right: 2rem;

  @media ${device.laptop} {
    margin-right: 2.5rem;
    font-size: 3rem;
    line-height: 2rem;
  }
`
