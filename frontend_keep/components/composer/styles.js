import styled from 'styled-components'
import { device } from '../../lib/device'

export const StyledComposer = styled.section`
  background-color: white;
  position: -webkit-sticky;
  position: sticky;
  z-index: 1999;
  padding: 1rem 1rem .5rem 1rem;
  top: 0;

  @media ${device.laptop} {
  padding: 1rem 2rem .5rem 2rem;
  }
`
