import { Component } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { StyledControl,StyledControlPages } from './styles'
const Control = ({ text, href, pages, alt, ...props }) => {
  //let Control = StyledControl
  let Control = pages ? StyledControlPages  : StyledControl

  //Control = StyledControl.withComponent('button')

  return (
    <Control {...props}>
      {href ? (
        <Link href={href} title={alt}>
          {text}
        </Link>
      ) : (
        text 
      )}
    </Control>
  )
}

export default Control
