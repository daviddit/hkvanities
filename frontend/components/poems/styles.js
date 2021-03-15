import styled from 'styled-components'

export const StyledPoems = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 2rem 0;
`

export const StyledError = styled.p`
  color: red;
`

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const PoemContainer = styled.div`
  width: 100hv;
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: ${props => props.poemsLength > 0 ? 'flext-start' : 'center' };
  margin: 2rem 0 0 0;
  padding: 2rem ;
`
