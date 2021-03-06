import ThemeProvider from 'providers/ThemeProvider'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import {
  faSun,
  faMoon,
  faBorderAll,
  faList,
  faSortNumericDown,
  faSortNumericUp
} from '@fortawesome/free-solid-svg-icons';

library.add(faList, faBorderAll, faSortNumericDown, faSortNumericUp, faSun, faMoon);
config.autoAddCss = false;
//import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'highlight.js/styles/monokai.css'
import "react-toggle/style.css"
import 'styles/index.scss'

function MyApp({ Component, pageProps }) {
  return <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
}
export default MyApp


