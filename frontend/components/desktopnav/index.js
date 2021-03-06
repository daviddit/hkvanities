import { Component } from 'react'
import Link from 'next/link'
import { StyledMenu,  StyledMenu2, StyledLink, StyledA } from './styles'
import { useRouter } from 'next/router'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { hk_instagram , hk_facebook } from '../../config.js'

export default function DesktopNav() {

const router = useRouter()


return (
  <>
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
    {/*<StyledA active={router.pathname === "/follow" ? true : null }>
	<Link href="/follow">
      Follow
    </Link>
    </StyledA> */}
  </StyledMenu>
  <StyledMenu2>
    <StyledA>
    <a href={hk_instagram} title="HKVanities' Instragram" target="_blank">
      <InstagramIcon style={{ fontSize: '3rem'}}/>
    </a>
    </StyledA>
    <StyledA>
    <a href={hk_facebook} title="HKVanities' Facebook" target="_blank">
      <FacebookIcon style={{ fontSize: '3rem'}}/>
    </a>
    </StyledA>
  </StyledMenu2>
  </>
)
}
