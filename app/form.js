'use client'

import { useRouter } from 'next/navigation'

export default function Form({ children, ...props }) {
  const router = useRouter()

  function handleSubmit(e) {
    e.preventDefault()
    router.push(e.target.url.value)
  }

  return (
    <form onSubmit={handleSubmit} {...props}>
      {children}
    </form>
  )
}
