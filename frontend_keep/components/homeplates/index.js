import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import plates from '../../data/homePlatesData.json'
import Button from '../button'

import { StyledPlates } from './styles'
import Plate from '../plate'
import Loading from '../loading'

  export default function HomePlates() {
  const [randomSlice, setRandomSlice] = React.useState([plates])
  const [randomTimes, setRandomTimes] = React.useState(0)
  //const [isLoading, setIsLoading] = React.useState(true)

  let random = plates.slice() // clone array
	
  const pixPerPage = 20
  const timeToChange = 1000

React.useEffect(() => {

  setRandomSlice(randomPlates(random,pixPerPage))
	
}, [])


React.useEffect(() => {

 const id = setTimeout(() => {

   setRandomSlice(randomPlate(randomSlice,random))

   setRandomTimes(randomTimes+1)

  //}, timeToChange+(randomTimes*10)); // increases time to refresh, the more the time spends on the page the more to reload (to avoid fetching forever)
  }, timeToChange); 

 return () => clearInterval(id);
})


  return (
    <StyledPlates>
      {/* isLoading && <Loading time="2500" /> */}
      { randomSlice && randomSlice.map((p, i) => (
        <Plate nohover key={i} plate={p} />
      ))}
    </StyledPlates>
  )
}

function randomPlates(random,pixPerPage)
{
  return  random.sort(() => .5 - Math.random()).slice(0,pixPerPage)
}

function randomPlate(randomSlice,random)
{
	const randomSliceRand = Math.floor(Math.random() * Math.floor(randomSlice.length))
	const randomRand = Math.floor(Math.random() * Math.floor(random.length))

	//console.log(randomSliceRand,'/',randomSlice.length, '::', randomRand,'/',random.length)
	//console.log(randomSlice[0])

	let newRandom = [...randomSlice]
        let newItem = random[randomRand]

	//console.log(newRandom)
	newRandom[randomSliceRand] = newItem;
	//console.log(newRandom)
	
	//console.log('SET: ',new Set(newRandom).size !== newRandom.length) // avoid duplicate plates on same screen

	//return newRandom 
	return new Set(newRandom).size !== newRandom.length ? randomPlate(randomSlice,random) : newRandom 
}
