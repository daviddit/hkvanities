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
        <StyledIntro>The Hong Kong Vanities project is a poetic exploration of Hong Kong. Vanity plates are the ultimate nonessential car accessory for owners who want to highlight their status, wealth, humour, desires, beliefs or superstitions. This gave me the idea of creating a new style of poetry – using images of the thousands of vanity plates in Hong Kong, I reached out to poets and encouraged them to mix and match the plates into their own unique poems. The project consists of a huge collection of vanity plate images, a gallery of poems by Hong Kong-based and international artists, and a poetry game enabling people to compose and share their own Hong Kong vanity poems.
        </StyledIntro>

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

