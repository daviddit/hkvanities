import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import { StyledPoems, StyledError, ButtonsContainer, PoemContainer } from './styles'
import { ControlsContainer } from '../control/styles'
import PublishControls from '../publish-controls'
import Control from '../control'
import Button from '../button'
import Poem from '../poem'


function Poems() {
  const [poems, setPoems] = React.useState([])
  const [error, setError] = React.useState()
  const [cursor, setCursor] = React.useState(0)
  const handleRand= () => {
    setCursor((i) => Math.floor(Math.random() * Math.floor(poems.length)))
  }
  const handlePrevPrev = () => {
    setCursor((i) => Math.max(i - 5, 0))
  }
  const handlePrev = () => {
    setCursor((i) => Math.max(i - 1, 0))
  }
  const handleNextNext = () => {
    setCursor((i) => Math.min(i + 5, poems.length))
  }
  const handleNext = () => {
    setCursor((i) => Math.min(i + 1, poems.length))
  }
  React.useEffect(() => {
    fetchPoems().then(
      setPoems,
      (err) => {
        console.error(err)
        setError('Failed to load poems')
      }
    )
  }, [])
  const hasNext = (cursor+1) < poems.length
  const hasPrevious = cursor > 0
  const currentPage = cursor+1+' / '+poems.length
  return (
    <StyledPoems>
      {error && (
        <StyledError>{error}</StyledError>
      )}
      <PoemContainer>
        {poems[cursor] && (
          <Poem poem={poems[cursor]} />
        )}
      </PoemContainer>
    <PoemContainer>
      <PublishControls nosave noback url={poems[cursor]}/>
    </PoemContainer>
      <ControlsContainer>
        <Control disabled={!hasPrevious} onClick={handlePrevPrev} text="&lt;&lt;"/>
        <Control disabled={!hasPrevious} onClick={handlePrev} text='&lt;'/>
        <Control pages disabled={false} onClick={handleRand} text={currentPage} />
        <Control disabled={!hasNext} onClick={handleNext} text='&gt;'/>
        <Control disabled={!hasNext} onClick={handleNextNext} text='&gt;&gt;'/>
      </ControlsContainer>
    </StyledPoems>
  )
}


const fetchPoems = async (ctx) => {
  const res = await fetch("/api/gallery")
  if (!res.ok) throw new Error("Server returned an error")
  const body = await res.json()
  return body.poems
}

export default Poems
