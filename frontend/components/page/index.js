import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Header from '../header/'
import Footer from '../footer/'
import Meta from '../meta/'

const theme = {
  yellow: 'hsl(46, 100%, 50%)',
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

// maxWidth: '1000px',

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;


// max-width: ${props => props.theme.maxWidth};
const Inner = styled.div`
  margin: 0 auto;
  padding: 0;
`;
  //padding: 2rem;

injectGlobal`
  @font-face {
    font-family: 'KunstGrotesk-Regular';
    src: url('/static/fonts/KunstGrotesk-Regular.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }
  @font-face {
    font-family: 'HKVPlatesBlack-Regular';
    src: url('/static/fonts/HKVPlatesBlack-Regular.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }
  @font-face {
    font-family: 'HKVPlatesWhite-Regular';
    src: url('/static/fonts/HKVPlatesWhite-Regular.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'KunstGrotesk-Regular';
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
`

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
          <Footer />
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page
