import styled from 'styled-components'
import { device } from '../../lib/device'

export const StyledPlates = styled.section`
  display: flex;
  //justify-content: ${props => props.showText ? "start" : "flex-start" };
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 2rem 0;
  padding: 2rem ;
  background-color: ${props => props.showText && "hsl(46, 100%, 50%)" };

  @media ${device.laptop} {
  //justify-content: ${props => props.showText ? "space-around" : "space-between" };
  }
`
