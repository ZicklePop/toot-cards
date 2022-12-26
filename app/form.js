'use client'

import getHandle from '../lib/get-handle'
import { useRouter } from 'next/navigation'

export default function Form({ children, ...props }) {
  const router = useRouter()

  function handleSubmit(e) {
    e.preventDefault()
    const shorthand = getHandle(e.target.url.value)
    router.push(shorthand)
  }

  return (
    <form onSubmit={handleSubmit} {...props}>
      {children}
    </form>
  )
}
