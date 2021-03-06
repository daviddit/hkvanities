import { site_name, GA_TRACKING_ID } from '../../config.js'

const Analytics = () => (
<>
 <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
  <script
    dangerouslySetInnerHTML={{
      __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
        `,
    }}
  />
</>)

export default Analytics
