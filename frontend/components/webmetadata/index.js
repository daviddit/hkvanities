import Head from 'next/head'
import { hostname, site_name } from '../../config.js'

const url = hostname
const url_img = hostname + "/static/img/web_portrait.jpg"

const WebMetadata = props => (
    <Head>
	<meta name="og:locale" content="en_HK" />
	<meta name="og:type" content="website" />
	<meta name="og:title" content={site_name} />
	<meta name="og:description" content="" />
	<meta name="og:url" content={url} />
	<meta name="og:site_name" content="{site_name}" />
	<meta name="og:image" content={url_img} />
	<meta name="og:image:width" content="600" />
	<meta name="og:image:height" content="600" />
	<meta name="twitter:card" content="summary_large_image" />
    </Head>
)

export default WebMetadata

