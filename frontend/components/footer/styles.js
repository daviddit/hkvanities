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
  margin-top: 1rem;

  @media ${device.laptop} {
  }

  & a:hover
  {
   color: #0088AA;
   font-weight: 700;
   text-shadow: 2px 2px 3px lightgrey;
  }
`
