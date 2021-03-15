import { Component } from 'react'
import Link from 'next/link'
import { slide as Menu  } from 'react-burger-menu'
import { StyledBurger } from './styles'

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    right: '1rem',
    top: '1rem',
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    width: '24px',
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
  },
  bmMenu: {
    background: 'white',
    fontSize: '1.15em',
    margin: '0',
    width: '100vw',
    position: 'fixed',
    top: '0'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0 2rem',
    margin: '5rem 0',
  },
  bmItem: {
    display: 'block',
    width: '100%',
    fontSize: '4rem',
    outline: '0',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

class Nav extends Component {


    render() {
      //console.log(this.props.open);
      return(
        <Menu
          styles={ styles }
          isOpen={this.props.open}
          onStateChange={(props) => this.props.onStateChange(props)}
          right
          width={ '100%' }
        >
          <a href="/home" >Home</a>
          <a href="/create">Create your poem</a>
          <a href="/see">Poems</a>
          <a href="/follow">Follow</a>
        </Menu>
  )}
}

export default Nav
