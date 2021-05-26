import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import Awwwards from '../components/awwwards'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html>
        <Head>{this.props.styleTags}</Head>
        <body>
        <Awwwards/>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
