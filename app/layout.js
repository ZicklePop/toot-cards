import Link from 'next/link'
import '../styles/global.css'

const cx = {
  body: 'max-w-5xl mx-auto',
}

const Layout = ({ children }) => (
  <html lang="en">
    <head />
    <body className={cx.body}>{children}</body>
  </html>
)

export default Layout
