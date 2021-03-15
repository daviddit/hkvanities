import styled from 'styled-components'
import { device } from '../../lib/device'

export const StyledIntro = styled.p`
  margin: 0 0 2rem 0;

  @media ${device.laptop} {
    font-size: 3rem;
    line-height: 3rem;
    letter-spacing: -1px;
    margin: 7rem auto 4rem auto;
    text-align: left;
  }
`

//max-width: 600px;
