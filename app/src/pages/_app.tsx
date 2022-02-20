import type { AppProps } from 'next/app'

const App = ({ pageProps, Component }: AppProps) => (
  <Component {...pageProps} />
)

export default App
