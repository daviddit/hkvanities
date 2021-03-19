import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { hostname } from '../config.js'
import Selection from '../components/selection'
import PublishControls from '../components/publish-controls'
import Plates from '../components/plates'
import Poem from '../components/poem'
import {PoemContainer , ButtonsContainer } from '../components/poems/styles'

const Publish = props => {
  const router = useRouter()
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(null)
  const [url, setUrl] = React.useState(null)
  const [video, setVideo] = React.useState(null)
  const [thumb, setThumb] = React.useState(null)
  const plates = (router.query.plates || '').split(',')


const generatePoem = async (plates) => {
  const res = await fetch('/api/video', {
    method: 'POST',
    body: JSON.stringify({ plates }),
    headers: {
      'Content-Type': 'application/json',
    }
  })
  if (!res.ok) {
    throw new Error('Failed to generate poem')
  }
  const body = await res.json()
  return body
}


  React.useEffect(() => {
    if (!plates.length || !plates[0]) {
      return
    }
    generatePoem(plates).then(
      (poem) => {
//	      console.log(poem)
        setLoading(false)
        setUrl(hostname + poem.slug)
        setThumb(poem.thumb)
        setVideo(poem.video)
      },
      (err) => {
        console.error(err)
        setError("Failed to generate poem")
        setLoading(false)
      },
    )

	console.log("share1",url,video,thumb)
  }, [])
  //}, [router.query.plates])


  const handleMouseEnter = () => {}
  const handleMouseOut = () => {}

  return (
  <>
    <PoemContainer>
      {error && (
        <ErrorText>
          {error}
        </ErrorText>
      )}
      {loading && (
        'Loading...'
      )}
      { video && ( <Poem poem={{ text: 'Your poem', url: video, thumb: thumb }} autoPlay handleMouseEnter={handleMouseEnter} handleMouseOut={handleMouseOut} />)}
    </PoemContainer>
    <ButtonsContainer>
	  { url && <PublishControls controls="false" autoPlay="true" url={url} video={video} thumb={thumb} /> }
    </ButtonsContainer>
  </>
  )
}


const ErrorText = styled.p`
  color: red;
`

export default Publish
