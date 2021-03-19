import styled from 'styled-components'
import { device } from '../../lib/device'

export const StyledIntro = styled.p`
  margin: 0.8rem 0 2rem 0;
  font-size: 1.7rem;
  line-height: 1.7rem;
  letter-spacing: 1.2px;

  @media ${device.laptop} {
    font-size: 3rem;
    line-height: 3rem;
    margin: 7rem auto 4rem auto;
    text-align: left;
  }
`

//max-width: 600px;
