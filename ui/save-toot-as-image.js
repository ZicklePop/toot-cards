'use client'

import { useState } from 'react'
import { toPng } from 'html-to-image'

export default function SaveTootAsImage({ children, ...props }) {
  const [shouldHide, setShouldHide] = useState(false)

  const handleClick = e => {
    e.preventDefault()
    setShouldHide(true)
    const toot = document.getElementById('toot')
    toPng(toot)
      .then(dataUrl => {
        const link = document.createElement('a')
        link.download = 'toot.png'
        link.href = dataUrl
        link.click()
      })
      .finally(() => {
        setShouldHide(false)
      })
  }

  return (
    <a
      href="#"
      onClick={handleClick}
      className={`cursor-pointer ${shouldHide ? 'outline-none' : ''}`}
      {...props}
    >
      {children}
    </a>
  )
}
