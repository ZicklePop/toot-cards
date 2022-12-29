'use client'

import getHandle from '../lib/get-handle'

export default function Form({ children, ...props }) {
  function handleSubmit(e) {
    e.preventDefault()
    const shorthand = getHandle(e.target.url.value)
    window.location.assign(shorthand)
  }

  return (
    <form onSubmit={handleSubmit} {...props}>
      {children}
    </form>
  )
}
