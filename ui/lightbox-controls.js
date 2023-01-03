'use client'

import ArrowLeft from '@heroicons/react/24/outline/ArrowLeftIcon'
import ArrowRight from '@heroicons/react/24/outline/ArrowRightIcon'
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon'
import useKey from 'react-use/esm/useKey'

export default function LightboxControls({ onNext, onPrevious, onClose }) {
  useKey(e => e.key === 'ArrowLeft' || e.key === 'j', onPrevious)
  useKey(e => e.key === 'ArrowRight' || e.key === 'k', onNext)
  useKey('Escape', onClose)

  return (
    <>
      {onPrevious && (
        <div className="absolute inset-y-0 left-0 flex items-center justify-start">
          <button
            onClick={onPrevious}
            className="m-4 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-black/60 text-white shadow-md ring-2 ring-black backdrop-blur-sm hover:scale-110 hover:bg-black/50 active:scale-95 active:bg-black/70 motion-safe:transition-all"
            title="Previous"
          >
            <ArrowLeft />
          </button>
        </div>
      )}
      {onNext && (
        <div className="absolute inset-y-0 right-0 flex items-center justify-end">
          <button
            onClick={onNext}
            className="m-4 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-black/60 text-white shadow-md ring-2 ring-black backdrop-blur-sm hover:scale-110 hover:bg-black/50 active:scale-95 active:bg-black/70 motion-safe:transition-all"
            title="Next"
          >
            <ArrowRight />
          </button>
        </div>
      )}
      <div className="absolute top-0 right-0 flex items-start justify-end">
        <button
          onClick={onClose}
          className="m-4 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-black/60 text-white shadow-md ring-2 ring-black backdrop-blur-sm hover:scale-110 hover:bg-black/50 active:scale-95 active:bg-black/70 motion-safe:transition-all"
          title="Close"
        >
          <XMarkIcon />
        </button>
      </div>
    </>
  )
}
