
import '../styles/globals.css'
import type { AppProps } from 'next/app'

import network from '../utils/network'
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={network}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  )
}

export default MyApp
