'use client'

import formatDate from 'lib/format-date'

export default function StatusTime({ time, ...rest }) {
  return (
    <>
      <time className="hidden md:block" dateTime={time} {...rest}>
        {formatDate(time)}
      </time>
      <time className="block md:hidden" dateTime={time} {...rest}>
        {formatDate(time, true)}
      </time>
    </>
  )
}
