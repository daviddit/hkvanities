import styled from 'styled-components'
import { device } from '../../lib/device'

export const StyledFooter = styled.footer`
  font-family: 'kunst grotesk', 'arial', sans-serif;
  font-size: 1rem;
  line-height: 2rem;
  background: rgba(255,255,255,.25);
  display: flex;
  bottom: 0;
  height: 2.5rem;
  justify-content: center;
  width: 100vw;
  max-width: 100%;
  margin: 0;

  @media ${device.laptop} {
  }
`
