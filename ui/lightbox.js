'use client'

import LightboxAttachment from './lightbox-attachment'
import LightboxControls from './lightbox-controls'
import Portal from './portal'
import { useEffect } from 'react'

export default function Lightbox({ attachments, selected, show, onClose }) {
  useEffect(() => {
    if (selected) {
      const target = document.getElementById(selected)
      target.scrollIntoView()
    }
  }, [selected])

  return (
    <>
      {show && (
        <Portal>
          <div
            className="fixed inset-0 flex snap-x snap-mandatory flex-row items-center gap-8 overflow-x-auto overflow-y-hidden bg-black bg-black/80 backdrop-blur-sm dark:bg-black/50"
            onClick={onClose}
          >
            {attachments.map(current => (
              <LightboxAttachment current={current} key={current.id} />
            ))}
          </div>
          <LightboxControls onClose={onClose} />
        </Portal>
      )}
    </>
  )
}
