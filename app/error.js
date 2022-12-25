'use client'

import WarningIcon from '../ui/icons/warning'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <span className="m-3 text-rose-500">
          <WarningIcon />
        </span>
        Toot not found
      </div>
      <div className="flex w-full justify-center py-3">
        <Link
          href="/"
          className="rounded border-2 border-indigo-600 bg-indigo-500 px-5 py-3 font-medium text-white shadow-lg hover:bg-indigo-600 active:bg-indigo-700 motion-safe:transition-colors"
        >
          Home
        </Link>
      </div>
    </div>
  )
}
