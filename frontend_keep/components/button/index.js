import { Component } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { StyledButton } from './styles'

const Button = ({ text, href, button, ...props }) => {
  let Button = StyledButton
  if (button) {
    Button = StyledButton.withComponent('button')
  }
  return (
    <Button {...props}>
      {href ? (
        <Link href={href}>
          {text}
        </Link>
      ) : (
        text
      )}
    </Button>
  )
}

export default Button
