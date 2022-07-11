import Backtohome from '../lib/backtohome'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='fragment'>
      <Component {...pageProps} />
      <Backtohome />
    </div>
  )
}

export default MyApp
