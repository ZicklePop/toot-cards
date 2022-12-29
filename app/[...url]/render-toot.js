'use client'
import Toot from '../../ui/toot'

const isBrowser = typeof window !== 'undefined'

export default function RenderToot() {
  if (!isBrowser) return null
  const json = window.toot || {}
  return <Toot {...json} />
}
