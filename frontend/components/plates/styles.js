import styled from 'styled-components'
import { device } from '../../lib/device'

export const StyledPlates = styled.section`
  display: flex;
  //justify-content: ${props => props.showText ? "start" : "flex-start" };
  flex-wrap: wrap;
  flex-direction: row;
  margin: 2rem 0;
  background-color: ${props => props.showText && "hsl(46, 100%, 50%)" };
  padding: 1rem ;
  justify-content: space-between;

  @media ${device.laptop} {
  padding: 2rem ;
  justify-content: flex-start;
  //justify-content: ${props => props.showText ? "space-around" : "space-between" };
  }
`
