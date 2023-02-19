'use client'

import Toot from '../../ui/toot'
import { useState } from 'react'

export default function LoadMore({ children, toots }) {
  const [shouldShowMore, setShouldShowMore] = useState(false)

  if (toots.length === 0) {
    return null
  }

  if (shouldShowMore) {
    return (
      <div className="mx-4">
        {toots.map(props => (
          <Toot key={props.id} kind={'reply'} {...props} />
        ))}
      </div>
    )
  }

  return (
    <button
      onClick={() => setShouldShowMore(true)}
      className={`mx-auto my-3 block rounded-md bg-neutral-100 px-5 py-3 font-medium opacity-50 shadow-lg hover:bg-neutral-50 hover:opacity-100 active:bg-neutral-200 motion-safe:transition-colors dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:active:bg-neutral-900`}
    >
      {children}
    </button>
  )
}
