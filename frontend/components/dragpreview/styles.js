import styled from 'styled-components'
import { device } from '../../lib/device'

export const Preview = styled.article`
  margin: 1rem 0 0 0;
  cursor: pointer;
`

export const StyledImage = styled.img`
  width: calc(((100vw - 5rem) / 2) - .5rem);
  height: calc(((100vw - 5rem) / 2) - .5rem);
`

export const StyledImage3 = styled.img`
  width: calc(((100vw - 5rem) / 2) - 1rem);
  height: calc(((100vw - 5rem) / 2) - 1rem);
  object-fit: cover;

  @media ${device.laptop} {
    max-width: 300px;
    max-height: 300px;
    width: calc(((100vw - 20rem) / 4) - 2rem);
    height: calc(((100vw - 20rem) / 4) - 2rem);
  }

  &:hover {
    outline: .5rem solid hsl(46, 100%, 50%);
  }
`

