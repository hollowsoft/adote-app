import * as env from 'dotenv'

env.config()

const Layout = ({ children }: any) => {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  )
}

export default Layout
