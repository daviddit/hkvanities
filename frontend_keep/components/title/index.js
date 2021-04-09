import Head from 'next/head'
import { site_name } from '../../config.js'

const Title = ({ title }) => (
    <Head>
      <title>{title}{ title && " | "}{site_name}</title>
    </Head>
)

export default Title
