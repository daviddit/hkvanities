import styled from 'styled-components'
import { device } from '../../lib/device'

export const StyledLoading = styled.div`
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    background-color: hsl(46, 100%, 50%);
    position: fixed;
    top: 0;
    left: 0;
    display: block;
    opacity: 1;
    z-index: 1501;

  @media ${device.laptop} {
     
  }
`

export const StyledLoadingHeader = styled.h1`
    font-family: 'HKVPlatesWhite-Regular';
    font-weight: normal;
    margin: 0 auto; 
    color: black;
    position: relative;
    top: 45%;
    font-size: 6.5rem;
    text-align: center;
    line-height: 3.6rem;
    font-display: block;
    z-index: 1503;

  @media ${device.laptop} {
    font-size: 20rem;
    top: 50%;
  }

  & a
  {
   color: black;
  }
`
