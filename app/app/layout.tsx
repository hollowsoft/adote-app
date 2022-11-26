import * as env from 'dotenv'

env.config()

const Layout = ({ children }: any) => {
  return (
    <html>
      <head>
        <title>Adote</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}

export default Layout
