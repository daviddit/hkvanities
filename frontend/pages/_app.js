import App from 'next/app'
//import App, { Container  } from 'next/app'
import Page from '../components/page/'
import React from 'react'
import { TouchBackend } from 'react-dnd-touch-backend'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider  } from 'react-dnd-multi-backend'
//import HTML5ToTouch from 'react-dnd-multi-backend/dist/cjs/HTML5toTouch'
//import styles from '../components/shimmer/styles.css'
import HTML5ToTouch from '../components/HTML5toTouch'


class MyApp extends App {
  render() {
    const { Component, ...pageProps  } = this.props

    return (
        <Page>
          <DndProvider options={HTML5ToTouch}>
	    <Component {...pageProps} />
          </DndProvider>
        </Page>
    )
  }
}

export default MyApp
