import {
  ReactNode,
  FunctionComponent
} from 'react'

import { Provider } from './provider'

type LayoutProps = {
  children: ReactNode
}

const Layout: FunctionComponent<LayoutProps> = (props: LayoutProps) => {
  const { children } = props

  return (
    <html lang='pt'>
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}

export default Layout
