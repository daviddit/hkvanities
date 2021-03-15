import styled from 'styled-components'
import { device } from '../../lib/device'

const size = '5rem'

export const StyledSelection = styled.section`
  margin: 2rem 0;
  overflow: auto;
  max-height: 23vh;
  //max-height: 30vh;

    @media ${device.laptop} {
      max-height: 38vh;
      overflow: auto;
    }
`


/*
 // !important is needed sometimes 
 ::-webkit-scrollbar {
    width: 12px !important;
 }

 // Track 
::-webkit-scrollbar-track {
   -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3) !important;
   -webkit-border-radius: 10px !important;
   border-radius: 10px !important;
 }

 // Handle 
 ::-webkit-scrollbar-thumb {
   -webkit-border-radius: 10px !important;
   border-radius: 10px !important;
   background: #41617D !important;
   -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5) !important;

 }
 ::-webkit-scrollbar-thumb:window-inactive {
   background: #41617D !important;
 }
*/


export const StyledSelectionPlates = styled.section`
  font-size: 1rem;
  line-height: 1rem;
  color: black;
  padding-bottom: 1.5rem;
  margin: 0;

  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  width: 100vw;
  max-width: 100%;

  opacity: 0.3;
  transition: opacity .5s ease-in-out;

  &:hover {
    opacity: 1;
  }


    @media ${device.laptop} {
      max-height: 40vh;
      overflow: auto;
    }

`

export const StyledSelectionPlate = styled.article`
  margin: 0rem 0rem 0 0;

  @media ${device.laptop} {
  margin: 1rem 1rem 0 0;
  }
`

export const StyledDropZone = styled.div`
  margin: 2rem 1rem .5rem 0;
  /*
  width: calc(((100vw - 5rem) / 4) - 5rem);
  height: calc(((100vw - 5rem) / 4) - 5rem);
  max-width: 10rem;
  max-height: 10rem;
  */
    width:  calc(((100vw - 3rem) / 3) - 2rem);
    height: calc(((100vw - 3rem) / 3) - 2rem);
    max-width: 15rem;
    max-height: 15rem;
  //background: ${props => props.active ? 'hsl(46, 100%, 50%)' : 'transparent'};
  background: lightgrey;
  display: flex;
  text-align: center;
  position: relative;

/*
  @media ${device.mobile} {
    width:  calc(((100vw - 3rem) / 3) - 2rem);
    height: calc(((100vw - 3rem) / 3) - 2rem);
    max-width: 15rem;
    max-height: 15rem;
  }
*/

  @media ${device.laptop} {
    width: calc(((100vw - 5rem) / 4) - 5rem);
    height: calc(((100vw - 5rem) / 4) - 5rem);
    max-width: 15rem;
    max-height: 15rem;
  }



 /* !important is needed sometimes */
::-webkit-scrollbar {
    width: 12px !important;
 }

 /* Track */
::-webkit-scrollbar-track {
   -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3) !important;
   -webkit-border-radius: 10px !important;
   border-radius: 10px !important;
 }

 /* Handle */
::-webkit-scrollbar-thumb {
   -webkit-border-radius: 10px !important;
   border-radius: 10px !important;
   background: #41617D !important;
   -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5) !important;

 }
::-webkit-scrollbar-thumb:window-inactive {
   background: #41617D !important;
 }

`

export const StyledDropZoneInner = styled.div`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%,-50%);
 font-size: 16px;

  @media ${device.laptop} {
    justify-content: space-between;
    font-size: 25px;
  }
`

export const StyledPlaceholderDropZone = styled.div`
  @media ${device.laptop} {
  display: flex;
  }
`

export const StyledSelectionNote = styled.div`
  //border: 2px solid pink;
  margin-top: 1rem;
  font-size: 2rem;
  line-height: initial;

  @media ${device.mobile} {
   //left: 10rem;
  }

  @media ${device.laptop} {
    font-size: 3rem;
    padding: 0;
  }
`

export const StyledSelectionControls = styled.div`
 display: flex;
 flex-wrap: wrap;
 justify-content: flex-start;

  @media ${device.laptop} {
    justify-content: space-between;
  }
`

