import Link from 'next/link'
import styled from 'styled-components'
import { StyledIntro, IntroVideoContainer, IntroVideo, IntroVideoImg, IntroVideoPlayButton } from './styles'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

/*
                onClick={handleMouseEnter}
                onMouseEnter={handleMouseEnter}
                onMouseOut={handleMouseOut}
		*/

export default function Intro()
{
const [showVideo,setShowVideo] =  React.useState(false)

const introVideo =  React.useRef()

	const handleImgClick = () => {
		setShowVideo(true)
		//introVideo.current.play()
	}

	const handleEnded= () => {
		setShowVideo(false)
		//introVideo.current.play()
	}

return (
        <>
        <StyledIntro><h1>HKVANIT1ES | Poetry in Motion</h1>
Vanity plates are the ultimate nonessential car accessory used by their owners to highlight their status, wealth, humour, desires, beliefs or superstitions – and in Hong Kong they can be seen everywhere. Each plate is like a line of poetry racing through the bustling streets of the city. It is poetry in motion.<br/>
This project presents an exhaustive image collection of vanity plates, a gallery of poems by Hong Kong and international artists, and a game where you can compose and share your own Hong Kong vanity poems.<br/>
HKVANIT1ES is a project by <u><a href="https://www.michelesalati.it/" target="_blank">Michele Salati</a></u>, an Italian Creative Director in Advertising and Artist living in Hong Kong.</StyledIntro>

    <IntroVideoContainer>
    {!showVideo && (<>
	    	    <IntroVideoImg src="/static/intro/HK%20Vanities%20feat%20DoughBoy-high.gif" onClick={handleImgClick} />
	            <IntroVideoPlayButton onClick={handleImgClick}><img src="/static/img/play.svg" /></IntroVideoPlayButton>
	    	    </>)}
    {showVideo && (
    <IntroVideo 
	        ref={introVideo}
	        autoPlay
	        onEnded={handleEnded}
          >
      <source media="all and (min-width:768px)" src="/static/intro/HK%20Vanities%20feat%20DoughBoy%20HD.mp4" type="video/mp4"/>
      <source src="/static/intro/HK%20Vanities%20feat%20DoughBoy.mp4" type="video/mp4"/>
      Your browser does not support HTML5 video.
    </IntroVideo>)}
	    	
    </IntroVideoContainer>

        </>)
}

                //controls="false"

