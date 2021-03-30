import styled from 'styled-components'
import { device } from '../../lib/device'

export const StyledPlates = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: ${props => props.showText ? "flext-start" : "space-between" };
  margin: 2rem 0;
  background-color: ${props => props.showText && "hsl(46, 100%, 50%)" };
  padding: 1rem ;

  @media ${device.laptop} {
  padding: 2rem ;
  //justify-content: space-between;
  justify-content: flex-start;
  }
`
