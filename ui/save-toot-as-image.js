'use client'

import { toPng } from 'html-to-image'

export default function SaveTootAsImage({
  children,
  filename = 'toot.png',
  ...props
}) {
  const handleClick = () => {
    if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      // Temporary using to share url
      // until I get Safari to work
      // with downloading an image.
      // Sorry :(
      navigator
        .share({
          url: window.location.href,
        })
        .catch(() => {})
    } else {
      toPng(document.getElementById('toot'), { quality: 1 }).then(dataUrl => {
        const link = document.createElement('a')
        link.download = filename
        link.href = dataUrl
        link.click()
      })
    }
  }

  return (
    <button className="cursor-pointer" onClick={handleClick} {...props}>
      {children}
    </button>
  )
}
