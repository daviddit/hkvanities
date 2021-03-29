import styled from 'styled-components'
import { device } from '../../lib/device'

export const StyledHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background-color: white;
  box-shadow: 0px 0.5rem 1rem lightgrey;
  width: 100vw;
  max-width: 100%;
  z-index: ${props => props.state ? "3000" : "500"  };

  @media ${device.laptop} {
    position: static;
    padding: 1rem 2rem 1rem 1rem;
    box-shadow: none;
  }
`

export const StyledLogo = styled.a`
  font-size: 3.5rem;
  line-height: 4rem;
  cursor: pointer;
  z-index: 1500;
  letter-spacing: 1px;
  margin: 0rem 0rem 1rem 1rem;

  @media ${device.tablet} {
    margin-bottom: 1rem;
    margin-right: 2.5rem;
    font-size: 3rem;
    line-height: 3rem;
  }

  @media ${device.laptop} {
    margin-bottom: 1rem;
    margin-right: 2.5rem;
    font-size: 3rem;
    line-height: 3rem;
  }
`
