import styled from 'styled-components'
import { device } from '../../lib/device'

const size = '5rem'

export const StyledSelection = styled.section`
  margin: ${props => props.slide ?  '2rem 0' : '0'} ;
  overflow: auto;

  max-height: ${props => props.slide ?  'calc((((100vw - 1rem) / 3) + 1rem) * 2 )' : '0'} ;
  //max-height: calc((((100vw - 1rem) / 3) + 1rem) * 2 ) ;

    @media ${device.laptop} {
      max-height: calc(((((100vw - 8rem) / 8)) * 2 ) + 3rem);
      overflow: auto;
    }
`

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

    @media ${device.laptop} {
      //max-height: 40vh;
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
  width:  calc(((100vw - 3rem) / 3) - 2rem);
  height: calc(((100vw - 3rem) / 3) - 2rem);
  max-width: 15rem;
  max-height: 15rem;
  //background: ${props => props.active ? 'hsl(46, 100%, 50%)' : 'transparent'};
  //background: lightgrey;
  background: url('/static/img/drop.svg') center;
  background-size: 100%;
  display: flex;
  text-align: center;
  position: relative;

  @media ${device.laptop} {
    width: calc(((100vw - 5rem) / 4) - 5rem);
    height: calc(((100vw - 5rem) / 4) - 5rem);
    max-width: 15rem;
    max-height: 15rem;
  }

`

export const StyledPlaceholderDropZone = styled.div`
  @media ${device.laptop} {
  //display: flex;
  }
`

export const StyledSelectionNote = styled.div`
  //border: 2px solid pink;
  font-size: 1.9rem;
  line-height: initial;
  color: #393939;

  @media ${device.mobileM} {
  font-size: 1.9rem;
  }

  @media ${device.laptop} {
    margin-top: 1rem;
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

