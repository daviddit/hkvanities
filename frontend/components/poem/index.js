import Link from 'next/link'
import styled from 'styled-components'
import { StyledPoemFigure, StyledPoem, StyledPoemCaption } from './styles'
import Title from '../title'
import { hostname, site_name } from '../../config.js'
import Head from 'next/head'


const Poem = ({ poem, controls, autoPlay, showTitle }) => {

 const autoplay = autoPlay ? true : null
 const preload = autoPlay ? null : "metadata"

 const handleMouseEnter = (e) => 
{
	if(!autoplay)
	{
		e.target.play()
	}
}

 const handleMouseOut = (e) => 
 {
	if(!autoplay)
	{
	     e.target.pause()
	     e.target.currentTime = 0
	}
 }

  const url = poem.slug ? hostname + poem.slug.replace('/ /g','%2520') : poem.url
  const url_img = hostname + poem.thumb.replace('/ /g','%2520')
  const url_video = hostname + poem.video.replace('/ /g','%2520')
  const poem_text = poem.text ? poem.text : 'HKVANIT1ES Poem' 

  return (
  <StyledPoemFigure>
    <Head>
	{ showTitle && (<Title title={poem_text}/>)}
	<meta name="og:locale" content="en_HK" />
	<meta name="og:type" content="video.other" />
	<meta name="og:title" content={poem_text} />
	<meta name="og:description" content="" />
	<meta name="og:url" content={url} />
	<meta name="og:site_name" content="{site_name}" />
	<meta name="og:image" content={url_img} />
	<meta name="og:image:width" content="300" />
	<meta name="og:image:height" content="300" />
	<meta name="og:video" content={url_video} />
	<meta name="og:video:width" content="300" />
	<meta name="og:video:height" content="300" />
	<meta name="twitter:card" content="summary_large_image" />
    </Head>
    <StyledPoem id={poem.text}
	  	key={poem.video}
		preload={preload}
	  	controls={controls}
	  	autoPlay={autoplay}
	  	playsInline={autoplay}
	  	muted
	  	loop
	  	ratio="1:1"
	  	width="100%"
	  	height="100%"
	  	onClick={handleMouseEnter}
	  	onMouseEnter={handleMouseEnter}
	  	onMouseOut={handleMouseOut}
	  >
      <source src={poem.video+'#t=0.1'} type="video/mp4"/>
      Your browser does not support HTML5 video.
    </StyledPoem>
    { poem.text && (<StyledPoemCaption hasSlug={poem.slug ? true : null}>
	     { poem.slug ? (<Link href={poem.slug}>{poem.text}</Link>) : (<>{poem.text}</>)}
	    </StyledPoemCaption>) }
  </StyledPoemFigure>
  )

}

Poem.defaultProps = {
  controls:  false,
  autoPlay:  false,
  showTitle: false,
}


export default Poem
