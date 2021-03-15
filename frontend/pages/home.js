import React from 'react'
import Link from 'next/link'

import Intro from '../components/intro'
import HomePlates from '../components/homeplates'
import Button from '../components/button'
import Buttons from '../components/buttons'

const Home = props => (
  <div style={{ padding: '0 2rem'}}>
    <Intro />
      <HomePlates />
  </div>
)

      //<Button text="Let's poetise!" href="/create" style={{margin: '0 auto'}} />

export default Home
