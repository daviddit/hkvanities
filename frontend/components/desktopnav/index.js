import { Component } from 'react'
import Link from 'next/link'
import { StyledMenu, StyledLink, StyledA } from './styles'
import { useRouter } from 'next/router'

export default function DesktopNav() {

const router = useRouter()


return (
  <StyledMenu>
    <StyledA active={router.pathname === "/create" ? true : null }>
    <Link href="/create">
      Create your poem
    </Link>
    </StyledA>
    <StyledA active={router.pathname === "/see" ? true : null }>
    <Link href="/see">
      Poems
    </Link>
    </StyledA>
    <StyledA active={router.pathname === "/follow" ? true : null }>
    <Link href="/follow">
      Follow
    </Link>
    </StyledA>
  </StyledMenu>
)
}
