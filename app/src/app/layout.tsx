'use client'

import {
  ReactNode,
  FunctionComponent
} from 'react'

import {
  Footer,
  Header
} from '@/component'

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
          <div>
            <Header />
            {children}
            <Footer />
          </div>
        </Provider>
      </body>
    </html>
  )
}

export default Layout
