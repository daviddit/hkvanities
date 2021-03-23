import Link from 'next/link'
import styled from 'styled-components'
import { StyledPoemFigure, StyledPoem, StyledPoemCaption } from './styles'
import { hostname } from '../../config.js'


    //<StyledPoem autoPlay muted loop id={poem.text} key={poem.video}>
const Poem = ({ poem, controls, autoPlay }) => {

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

/*
<meta property="og:title" content="How to change the address bar color in Chrome, Firefox, Opera, Safari" />
<meta property="og:description" content="How to change the address bar color in Chrome, Firefox, Opera, Safari" />
<meta property="og:url" content="http://webdevelopmentscripts.com/64-how-to-change-the-address-bar-color-in-chrome-firefox-opera-safari" />
<meta property="og:image" content="http://webdevelopmentscripts.com/post-images/685b-change-browser-address-bar-color-chrome-android.jpeg" />


	<meta property="og:locale" content="ca_ES" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content="La CUP confirma que proposa Pau Juvillà per presidir el parlament" />
	<meta property="og:description" content="Riera diu que JxCat i ERC s&#039;han de pronunciar sobre la seva proposta i veure si hi ha candidats alternatius" />
	<meta property="og:url" content="https://www.vilaweb.cat/noticies/cup-confirma-pau-juvilla-candidat-presidencia-parlament/" />
	<meta property="og:site_name" content="VilaWeb" />
	<meta property="article:modified_time" content="2021-03-10T08:32:42+00:00" />
	<meta property="og:image" content="https://imatges.vilaweb.cat/nacional/wp-content/uploads/2021/02/h_3759144.jpg" />
	<meta property="og:image:width" content="1024" />
	<meta property="og:image:height" content="682" />
	<meta name="twitter:card" content="summary_large_image" />

	<meta property="og:player" content={url_video} />
	<meta property="og:player:width" content="300" />
	<meta property="og:player:height" content="300" />
	<meta property="og:player:stream" content={url_video} />
*/

  ////const url = "https://" + 'hkvanities.dieres.com'+ poem.slug;
  ////const url_img = poem.thumb ? "https://" + 'hkvanities.dieres.com'+ poem.thumb.replace('/ /g','+') : null
  //const url_video = poem.thumb ? "https://" + 'hkvanities.dieres.com'+ poem.video.replace('/ /g','+') : null

  const url = poem.slug ? hostname + poem.slug.replace('/ /g','%20') : poem.url
  const url_img = hostname + poem.thumb.replace('/ /g','%20')
  const url_video = hostname + poem.video.replace('/ /g','%20')
  const poem_text = poem.text ? poem.text : 'HKVANIT1ES Poem' 

  return (
  <StyledPoemFigure>

	<meta property="og:locale" content="en_HK" />
	<meta property="og:type" content="video.other" />
	<meta property="og:title" content={poem_text} />
	<meta property="og:description" content="" />
	<meta property="og:url" content={url} />
	<meta property="og:site_name" content="HKVANIT1ES" />
	<meta property="og:image" content={url_img} />
	<meta property="og:image:width" content="300" />
	<meta property="og:image:height" content="300" />
	<meta property="og:video" content={url_video} />
	<meta property="og:video:width" content="300" />
	<meta property="og:video:height" content="300" />
	<meta property="twitter:card" content="summary_large_image" />

    <StyledPoem id={poem.text}
	  	key={poem.video}
	  	poster={poem.thumb} 
	  	controls={controls}
	  	preload={preload}
	  	autoPlay={autoplay}
	  	muted
	  	loop
	  	ratio="1:1"
	  	width="100%"
	  	height="100%"
	  	onMouseEnter={handleMouseEnter}
	  	onMouseOut={handleMouseOut}
	  >
      <source src={poem.video} type="video/mp4"/>
      Your browser does not support HTML5 video.
    </StyledPoem>
    { poem.text && (<StyledPoemCaption hasSlug={poem.slug ? true : null}>
	     { poem.slug ? (<Link href={poem.slug}>{poem.text}</Link>) : (<>{poem.text}</>)}
	    </StyledPoemCaption>) }
  </StyledPoemFigure>
  )

}


Poem.defaultProps = {
  controls: false,
  autoPlay: false,
}


export default Poem
