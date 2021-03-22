import { Component } from 'react'
import Link from 'next/link'
import { slide as Menu  } from 'react-burger-menu'
import { StyledBurger } from './styles'

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '3rem',
    height: '3rem',
    right: '1rem',
    top: '1rem',
  },
  bmBurgerBars: {
    height: '1px',
    background: '#373a47',
   '&:nth-child(1)': {
	  top: '30%',
	  background:  'pink !important',
   }
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    background: 'white',
    top: 0,
    right: '10px',
    width: '4rem',
    height: '4rem',
	  //border: '1px solid pink',
  },
  bmCross: {
    //background: '#bdc3c7',
    background: 'black',
    width: '1px',
    height: '3.5rem',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
  },
  bmMenu: {
    background: 'transparent',
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
    padding: '0',
    margin: '5rem 0',
    position: 'fixed',
    width: '100vw',
    maxWidth: '100%',
  },
  bmItem: {
    display: 'block',
    width: '100%',
    fontSize: '4rem',
    outline: '0',
    padding: '0 1rem',
    boxShadow: '0 5px 15px lightgrey',
    background: 'white',
    lineHeight: 'initial',
    padding: '0rem 1rem 0.5rem 1rem',
    zIndex: 2000,
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0)'
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
