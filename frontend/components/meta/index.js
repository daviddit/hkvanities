import Head from 'next/head'
import { site_name } from '../../config.js'

const Meta = () => (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no" />
      <meta charSet="utf-8" />
      <link rel="shortcut icon" href="/static/favicon.ico" />
      <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
      <title>{site_name}</title>
    </Head>

)

export default Meta
