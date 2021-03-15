import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import plates from '../../data/platesData.json'
import { ButtonsContainer } from '../poems/styles'
//import { ControlsContainer } from '../control/styles'
import Button from '../button'
import Control from '../control'
import Letters from '../letters'

import { StyledPlates } from './styles'
import Plate from '../plate'

  export default function Plates({size, showText}) {
  const [page, setPage] = React.useState(0)
  const [letter, setLetter] = React.useState("A")

//  const [plates, setPlates] = React.useState([])
//
//  React.useEffect(() => {
//    fetchPlates(page).then(
//      setPlates,
//      (err) => {
//        console.error(err)
//      //setError('Failed to load plates')
//      }
//    )
//  }, [])
	

  const pixPerPage = 100
  const totalPages = Math.ceil((plates.length / pixPerPage))
  //const totalPages = plates.length
  const hasNext = (page+1) < totalPages
  const hasPrevious = page > 0
  const currentPage = page + 1 +'/'+ totalPages

  const handleRand = () => {
    setPage((i) => Math.floor(Math.random() * Math.floor(totalPages)))
  }

  const handlePrev = () => {
    setPage((i) => Math.max(i - 1, 0))
  }

  const handlePrevPrev = () => {
    setPage((i) => Math.max(i - 5, 0))
  }

  const handleNext = () => {
    setPage((i) => Math.min(i + 1, totalPages-1))
  }

  const handleNextNext = () => {
    setPage((i) => Math.min(i + 5, totalPages-1))
  }

  const handleLetter = (l) => {
	setLetter(l)
  }

  //const subPlates = plates.slice(page*pixPerPage,(page*pixPerPage)+pixPerPage)
  const letterFilter = (p) => { 

	  if( letter === "#") // for all number starting plates
	  {
	   return parseInt(p.text[0])>=0
	  }
	  else
	  {
	   return p.text.toUpperCase().startsWith(letter)
	  }

  } 

	  /*
  const letterFilter = (p) => { 

	   return p.text.toUpperCase().includes(letter)
  } 
  */


  const subPlates = plates.filter(letterFilter)

  return (
  <>

    <StyledPlates showText={showText}>
      {subPlates.map((p, i) => (
        <Plate key={i} plate={p} size={size} showText={showText}/>
      ))}
    </StyledPlates>

    <Letters handleLetter={handleLetter} letter={letter}/>

  </>
  )
}


/*
      <ControlsContainer>
        <Control disabled={!hasPrevious} onClick={handlePrevPrev} text="&#8647;"/>
        <Control disabled={!hasPrevious} onClick={handlePrev} text='&larr;'/>
        <Control pages disabled={false} onClick={handleRand} text={currentPage} />
        <Control disabled={!hasNext} onClick={handleNext} text='&rarr;'/>
        <Control disabled={!hasNext} onClick={handleNextNext} text='&#8649;' alt='5 forward'/>
      </ControlsContainer>

*/


//const fetchPlates = async (page) => {
//  const res = await fetch(`/api/plates`)
//  //const res = await fetch("/api/plates?",{ method: 'POST', body: JSON.stringify(req), headers: { 'Content-Type': 'application/json'} })
//  if (!res.ok) throw new Error("Server returned an error")
//  const body = await res.json()
//  return body
//}

