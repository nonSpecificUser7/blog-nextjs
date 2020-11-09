import { library, config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faBorderAll, faList } from '@fortawesome/free-solid-svg-icons'

library.add(faBorderAll, faList)
config.autoAddCss = false;
//import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'highlight.js/styles/monokai.css'
import 'styles/index.scss'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
