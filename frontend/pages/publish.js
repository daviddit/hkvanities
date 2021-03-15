import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'

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
        setLoading(false)
        setUrl(poem.url)
        setThumb(poem.thumb)
      },
      (err) => {
        console.error(err)
        setError("Failed to generate poem")
        setLoading(false)
      },
    )
  }, [router.query.plates])


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
      {url && ( <Poem poem={{ text: plates.join(' | '), video: url, thumb: thumb }} autoPlay handleMouseEnter={handleMouseEnter} handleMouseOut={handleMouseOut} />)}
    </PoemContainer>
    <ButtonsContainer>
	  { url && <PublishControls controls="false" autoPlay="true" video={url} thumb={thumb} /> }
    </ButtonsContainer>
  </>
  )
}


const ErrorText = styled.p`
  color: red;
`

export default Publish
