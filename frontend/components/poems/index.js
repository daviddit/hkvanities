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

  const noShare = poems.length > 1 ? null : true;

  React.useEffect(() => {
    fetchPoems().then(
      setPoems,
      (err) => {
        console.error(err)
        setError('Failed to load poems')
      }
    )
  }, [])


      //{poems.sort((a,b) => (a.text > b.text) ? 1 : ((b.text > a.text) ? -1 : 0)).map((p, i) => (
  return (
    <StyledPoems>
      {error && (
        <StyledError>{error}</StyledError>
      )}
      <PoemContainer poemsLength={poems.length}>
      {poems.sort((a,b) => (parseInt(a.id)> parseInt(b.id)) ? 1 : ((parseInt(b.id) > parseInt(a.id)) ? -1 : 0)).map((p, i) => (
        <Poem key={i} poem={p} noShare={noShare} />
      ))}

      </PoemContainer>
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
