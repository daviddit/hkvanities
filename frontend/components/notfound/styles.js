import styled from 'styled-components'
import { device } from '../../lib/device'

 //style={{ width: '100vw', maxWidth: '100%', height: 'calc(100vh - 9rem)', position: 'relative', border: '1px solid pink'}}>
export const StyledNotFound = styled.div`
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    max-width: 100%;
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

//style={{  display: 'inline' ,position: 'absolute', top: '50%', left: '50%', fontSize: '40rem', transform: 'translate(-50%,-50%)', fontFamily: 'HKVPlatesWhite-Regular', backgroundColor: 'hsl(46,100%,50%)' }}
export const StyledNotFoundHeader = styled.h1`
    font-family: 'HKVPlatesWhite-Regular';
    font-weight: normal;
    margin: 0 auto; 
    color: black;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 6.5rem;
    z-index: 1503;
    cursor: pointer;

  @media ${device.laptop} {
    font-size: 20rem;
  }
`
