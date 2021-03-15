import letters from '../../data/lettersData.json'
import styled from 'styled-components'
import { StyledLetters, StyledLetter } from './styles'

export function Letter({handleLetter, letter, isLetter}) {

  return (
      <StyledLetter onClick={handleLetter.bind(this,letter)} isLetter={isLetter}>{letter}</StyledLetter>
  )

}


export default function Letters({ letter, handleLetter}) {

  return (
  <StyledLetters>
      {letters.map((l, i) => ( 
	      	<Letter key={i} handleLetter={handleLetter} letter={l.text} isLetter={letter == l.text ? true: false} />)
      )}
  </StyledLetters>)

}
