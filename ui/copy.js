'use client'

import { useEffect, useState } from 'react'
import useCopyToClipboard from 'react-use/esm/useCopyToClipboard'

export default function Copy({ children, content, ...rest }) {
  const [state, copy] = useCopyToClipboard()
  const [showCopied, setShowCopied] = useState(false)

  useEffect(() => {
    let timeout
    if (!state.error && !!state.value) {
      setShowCopied(true)
      timeout = setTimeout(() => setShowCopied(false), 1000)
    }
    return () => clearTimeout(timeout)
  }, [state])

  const handleCopy = e => {
    e.preventDefault()
    copy(content)
  }

  return (
    <div className="relative inline-block" onClick={handleCopy} {...rest}>
      {children}
      <span
        className={`${
          showCopied
            ? 'opacity-1 scale-100 blur-none'
            : 'scale-0 opacity-0 blur-sm'
        } absolute left-3 -top-2.5 -translate-y-full select-none rounded-lg bg-neutral-700 px-2 py-0 text-center text-white drop-shadow-md after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-neutral-700 after:content-[''] motion-safe:transition-all`}
      >
        Copied
      </span>
    </div>
  )
}
