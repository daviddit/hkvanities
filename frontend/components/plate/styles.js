import styled from 'styled-components'
import { device } from '../../lib/device'

export const StyledPlate = styled.article`
  margin: 0;
  cursor: pointer;

  @media ${device.laptop} {
  margin: 1rem ${props => props.size == "S" ? '1.6rem' : '1.3rem'} 0 0;
  }
`

export const StyledPlateFigure = styled.figure`
  margin: 0;
`

export const StyledPlateImageContainer = styled.div`
  position: relative;
`

export const StyledPlateImage = styled.img`
  width: calc(((100vw - 3rem) / 2));
  height: calc(((100vw - 3rem) / 2));
  background-color: transparent;
  object-fit: cover;

  @media ${device.laptop} {
    //max-width: 300px;
    //max-height: 300px;
    ${props => props.size == "S" ? 'width:  calc(((100vw - 2rem) / 10) - 2rem);' : null}
    ${props => props.size == "S" ? 'height: calc(((100vw - 2rem) / 10) - 2rem);' : null}

    ${props => props.size == "M" ? 'width:  calc(((100vw - 2.5rem) / 5) - 2rem);' : null}
    ${props => props.size == "M" ? 'height: calc(((100vw - 2.5rem) / 5) - 2rem);' : null}

    ${props => props.size == "L" ? 'width:  calc(((100vw - 5rem) / 3) - 2rem);' : null}
    ${props => props.size == "L" ? 'height: calc(((100vw - 5rem) / 3) - 2rem);' : null}
  }

  //${props => props.nohover ? "cursor: initial":  "&:hover { outline: .5rem solid hsl(46, 100%, 50%);}" }
  ${props => props.nohover ? "cursor: initial": null }
`

export const StyledPlateCaption = styled.figcaption`
  text-transform: uppercase;
  font-size: 1rem;
  line-height: 1rem;
  color: black;
  padding-bottom: 1.5rem;
`

export const StyledPlateText = styled.div`
  background-color: hsl(46, 100%, 50%);
  font-family: ${props => props.over ? 'HKVPlatesBlack-Regular' : 'HKVPlatesWhite-Regular' };
  text-transform: uppercase;
  font-size: 4.8rem;
  margin: 0.2rem;
  display: inline;
  line-height: 6rem;
  color: black;
  letter-spacing: .6px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;


  @media ${device.laptop} {
  font-size: 10rem;
  ${props => props.size == "S" ? 'font-size: 5rem' : null};
  ${props => props.size == "S" ? 'line-height: 4.5rem' : null};

  ${props => props.size == "M" ? 'font-size: 10rem' : null};
  ${props => props.size == "M" ? 'line-height: 10.5rem' : null};

  ${props => props.size == "L" ? 'font-size: 15rem' : null};
  ${props => props.size == "L" ? 'line-height: 16rem' : null};
  margin: 0rem;
  }

// trick to avoid div displacement on font change
  &:after
  {
   content: '';
   font-family: "HKVPlatesWhite-Regular";
   visibility: hidden;
  }

  &:before
  {
   content: '';
   font-family: "HKVPlatesBlack-Regular";
   visibility: hidden;
  }
`

export const StyledAddPlate = styled.div`
  padding: 0;
  top: 50%;
  right: 50%;
  //opacity: ${props => props.over ? 0.95 : 0 };
  display: ${props => props.over ? 'block' : 'none' };
  //background-color: white;
  //display: ${props => props.over ? 'block' : 'none' };
  position: absolute;
  //z-index: 1505;
  cursor: pointer;
  //transition: opacity .1s ease-in-out;
  transform: translate(50%,-50%);

  & img
  {
    ${props => props.showText ? 'width: 3.5rem;' : props.addImgSize };
    //width: ${props => props.addImgSize == "S" ? '3rem' : '8rem'};
  }

  @media ${device.laptop} {
   & img
   {
    width: ${props => props.addImgSize};
   }
  }
`
