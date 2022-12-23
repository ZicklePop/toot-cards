import '../styles/global.css'

const cx = {
  body: 'max-w-2xl min-h-screen flex items-center justify-center mx-auto font-sans',
}

const Layout = ({ children }) => (
  <html lang="en">
    <head />
    <body className={cx.body}>{children}</body>
  </html>
)

export default Layout
