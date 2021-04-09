import styled from 'styled-components'
import { device } from '../../lib/device'

export const HomeStyled = styled.div`
  padding: 0 1rem;

  @media ${device.laptop} {
  padding: 0 1rem 0 2rem;
  }
`
