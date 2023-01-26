'use client'

import formatDate from 'lib/format-date'
import { useState, useEffect } from 'react'

export default function StatusTime({ time, ...rest }) {
  const [showLocalTime, setShowLocalTime] = useState(false)
  useEffect(() => {
    setShowLocalTime(true)
  }, [])

  return (
    <>
      <time className="hidden md:block" dateTime={time} {...rest}>
        {showLocalTime && formatDate(time)}
      </time>
      <time className="block md:hidden" dateTime={time} {...rest}>
        {showLocalTime && formatDate(time, true)}
      </time>
    </>
  )
}
