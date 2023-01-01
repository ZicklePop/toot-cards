import '../styles/global.css'

const cx = {
  body: 'max-w-xl min-h-[100svh] flex items-center justify-center mx-auto',
}

const Layout = ({ children }) => (
  <html lang="en">
    <body className={cx.body}>{children}</body>
  </html>
)

export default Layout
