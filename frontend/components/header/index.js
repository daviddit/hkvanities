import { Component, useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import NProgress from 'nprogress'
import Router from 'next/router'
import MediaQuery from "react-responsive"
import { slide as Menu  } from 'react-burger-menu'
import Nav from '../nav'
import DesktopNav from '../desktopnav'
import { StyledHeader, StyledLogo, StyledNav, StyledNavList, StyledNavToggle } from './styles'

Router.onRouteChangeStart = () => {
    NProgress.start();
}
Router.onRouteChangeComplete = () => {
    NProgress.done();
}

Router.onRouteChangeError = () => {
    NProgress.done();
}

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = { menuOpen: false }
  }

	// This keeps your state in sync with the opening/closing of the menu
	// via the default means, e.g. clicking the X, pressing the ESC key etc.
	handleStateChange (state) {
		this.setState({menuOpen: state.isOpen})
	}

	// This can be used to close the menu, e.g. when a user clicks a menu item
	closeMenu () {
		this.setState({menuOpen: false})
	}

	// This can be used to toggle the menu, e.g. when using a custom icon
	// Tip: You probably want to hide either/both default icons if using a custom icon
	// See https://github.com/negomi/react-burger-menu#custom-icons
	toggleMenu () {
		this.setState(state => ({menuOpen: !state.menuOpen}))
	}

  render() {
    return(
      <StyledHeader state={this.state.menuOpen}>
        <Link href="/">
        <StyledLogo onClick={() => this.closeMenu()}>HKVANIT1ES</StyledLogo>
        </Link>
        <MediaQuery maxDeviceWidth={1024}>
          <Nav
            open={this.state.menuOpen}
            onClose={() => this.closeMenu()}
            onStateChange={(props) => this.handleStateChange(props)}
          />
        </MediaQuery>
        <MediaQuery minDeviceWidth={1024}>
          <DesktopNav
            open={this.state.menuOpen}
            onClose={() => this.closeMenu()}
            handleStateChange={() => this.stateChange(props)}
          />
        </MediaQuery>
      </StyledHeader>
    )}
}

export default Header
