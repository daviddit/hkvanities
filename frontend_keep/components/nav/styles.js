import styled from 'styled-components'
import { device } from '../../lib/device'

export const StyledbmBurgerButton = styled.header`
  position: 'fixed',
  width: '36px',
  height: '30px',
  right: '1rem',
  top: '1rem'

  @media ${device.laptop} {
    display: none;
  }
`

export const StyledbmBurgerBars = styled.div`
  background: '#373a47'
`

export const StyledbmBurgerBarsHover = styled.div`
  background: '#a90000'
`
export const StyledbmCrossButton = styled.div`
  height: '24px',
  width: '24px'
`

export const StyledbmCross = styled.div`
  background: '#bdc3c7'
`

export const StyledbmMenuWrap = styled.div`
   position: 'fixed',
   height: '100%',
`

export const StyledbmMenu = styled.div`
  background: 'white',
  fontSize: '1.15em',
  margin: '0',
  width: '100vw'
`

export const StyledbmMorphShape = styled.div`
  fill: '#373a47'
`

export const StyledbmItemList = styled.div`
  color: '#b8b7ad',
  padding: '0.8em',
  margin: '5rem 0',
  position: 'fixed',
  top: '0'
`

export const StyledbmItem = styled.div`
  display: 'block',
  width: '100%'
`

export const StyledOverlay = styled.div`
  background: 'rgba(0, 0, 0, 0.3)'
`
