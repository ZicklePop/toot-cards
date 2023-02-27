'use client'

import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon'
import useKey from 'react-use/esm/useKey'

export default function LightboxControls({ onClose }) {
  useKey('Escape', onClose)

  return (
    <>
      <div className="absolute top-0 right-0 z-10 flex items-start justify-end">
        <button
          className="flex h-24 items-start"
          onClick={onClose}
          title="Close"
        >
          <div className="m-4 inline-flex h-7 w-7 items-center justify-center rounded-full border-2 border-transparent bg-black/60 text-white shadow-md ring-2 ring-white/75 backdrop-blur-sm hover:scale-110 hover:bg-black/50 active:scale-95 active:bg-black/70 motion-safe:transition-all">
            <XMarkIcon className="h-6 w-6" />
          </div>
        </button>
      </div>
    </>
  )
}
