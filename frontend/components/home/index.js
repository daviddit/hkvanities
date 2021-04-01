import React from 'react'

import Intro from '../intro'
import HomePlates from '../homeplates'
import Button from '../button'
import Buttons from '../buttons'
import {HomeStyled} from './styles'
import WebMetadata from '../webmetadata'

const Home = props => (
  <HomeStyled>
    <WebMetadata/>
    <Intro />
      <HomePlates />
  </HomeStyled>
)

export default Home
