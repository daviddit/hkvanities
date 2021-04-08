import styled from 'styled-components'
import { device } from '../../lib/device'

export const StyledIntro = styled.p`
  margin: 1rem 0 2rem 0;
  font-size: 1.7rem;
  line-height: 1.7rem;
  //letter-spacing: 1.2px;
  
  & h1
  {
    font-size: 1.7rem;
    line-height: 1.7rem;
    font-weight: normal;
    margin: 0;
  }


  @media ${device.laptop} {
    font-size: 3rem;
    line-height: 3rem;
    margin: 7rem 1rem 4rem auto;
    text-align: left;

	& h1
	{
	font-size: 3rem;
	line-height: 3rem;
	font-weight: normal;
	margin: 0;
	}
  }

`

export const IntroVideoContainer = styled.div`
//border: 1px solid pink;
margin: 1rem 0 1rem 0;
position: relative;

  @media ${device.laptop} {
    margin: 0 1rem 2rem 0;
  }
`

export const IntroVideoImg = styled.img`
 align-self: flex-start;
 width: 100%;
 min-height: auto;
 cursor: pointer;
`

export const IntroVideoPlayButton = styled.div`
 //border: 2px solid pink;
 display: flex;
 position: absolute;
 top: 50%;
 right: 50%;
 height: 100%;
 align-items: center;
 justify-content: center;
 width: 100%;
 transform: translate(50%,-50%);
 cursor: pointer;

 & svg
 {
  color: hsl(46,100%,50%);
  font-size: 15rem;
 }

 & img
 {
  width: 8rem;
 }

  @media ${device.laptop} {
	 & svg
	 {
	  font-size: 25rem;
	 }

	 & img
	 {
  	   width: 8rem;
	 }

  }
`

export const IntroVideo = styled.video`
  width: 100%;
  height: auto;
  //display: ${props => props.showVideo ? "block" : "none" };
  margin: 0;

  @media ${device.laptop} {
  }
`
