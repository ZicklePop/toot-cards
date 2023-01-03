'use client'

import ArrowLeft from '@heroicons/react/24/outline/ArrowLeftIcon'
import ArrowRight from '@heroicons/react/24/outline/ArrowRightIcon'
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon'
import useKey from 'react-use/esm/useKey'

const cx = {
  buttonContainer: 'h-full pointer-events-auto',
  buttonInner:
    'm-4 inline-flex h-7 w-7 items-center justify-center rounded-full border-2 border-transparent bg-black/60 text-white shadow-md ring-2 ring-white/75 backdrop-blur-sm hover:scale-110 hover:bg-black/50 active:scale-95 active:bg-black/70 motion-safe:transition-all',
  icon: 'h-6 w-6',
}

export default function LightboxControls({
  isVideo,
  onClose,
  onNext,
  onPrevious,
}) {
  useKey(e => e.key === 'ArrowLeft' || e.key === 'j', onPrevious)
  useKey(e => e.key === 'ArrowRight' || e.key === 'k', onNext)
  useKey('Escape', onClose)

  return (
    <>
      {onPrevious && (
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center justify-start">
          <button
            className={`pointer-events-auto ${
              isVideo ? '' : cx.buttonContainer
            }`}
            onClick={onPrevious}
            title="Previous"
          >
            <div className={cx.buttonInner}>
              <ArrowLeft className={cx.icon} />
            </div>
          </button>
        </div>
      )}
      {onNext && (
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center justify-end">
          <button
            className={`pointer-events-auto ${
              isVideo ? '' : cx.buttonContainer
            }`}
            onClick={onNext}
            title="Next"
          >
            <div className={cx.buttonInner}>
              <ArrowRight className={cx.icon} />
            </div>
          </button>
        </div>
      )}
      <div className="absolute top-0 right-0 flex items-start justify-end">
        <button
          className="flex h-24 items-start"
          onClick={onClose}
          title="Close"
        >
          <div className={cx.buttonInner}>
            <XMarkIcon className={cx.icon} />
          </div>
        </button>
      </div>
    </>
  )
}
