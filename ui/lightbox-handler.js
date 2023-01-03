'use client'

import Lightbox from './lightbox'
import Portal from './portal'
import useToggle from 'react-use/esm/useToggle'
import { Children, cloneElement } from 'react'
import { useCallback, useMemo, useState } from 'react'

export default function LightboxHandler({
  currentAttachment,
  attachments,
  children,
}) {
  const [current, setCurrent] = useState(() => currentAttachment)
  const [show, toggle] = useToggle(false)
  const hasNext = useMemo(() => {
    const index = attachments.findIndex(a => a.id === current.id)
    return index < attachments.length - 1
  }, [attachments, current.id])
  const hasPrevious = useMemo(() => {
    const index = attachments.findIndex(a => a.id === current.id)
    return index > 0
  }, [attachments, current.id])
  const hasAttachments = attachments.length > 1

  const handleNext = useCallback(() => {
    const index = attachments.findIndex(a => a.id === current.id)
    const next = hasNext ? attachments[index + 1] : attachments[0]
    setCurrent(next)
  }, [attachments, current.id, hasNext])

  const handlePrevious = useCallback(() => {
    const index = attachments.findIndex(a => a.id === current.id)
    const previous = hasPrevious
      ? attachments[index - 1]
      : attachments[attachments.length - 1]
    setCurrent(previous)
  }, [attachments, current.id, hasPrevious])

  const handleShow = e => {
    e.preventDefault()
    toggle()
  }

  const handleClose = () => {
    toggle(false)
  }

  return (
    <>
      {Children.map(children, (child, i) =>
        cloneElement(child, { key: i, onClick: handleShow })
      )}
      {show && (
        <Portal>
          <Lightbox
            current={current}
            onClose={handleClose}
            onNext={hasAttachments && handleNext}
            onPrevious={hasAttachments && handlePrevious}
          />
        </Portal>
      )}
    </>
  )
}
