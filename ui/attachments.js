'use client'

import AttachmentImage from './attachment-image'
import AttachmentVideo from './attachment-video'
import Lightbox from './lightbox'
import useToggle from 'react-use/esm/useToggle'
import { useState } from 'react'

export default function Attachments({ attachments }) {
  const [show, toggle] = useToggle(false)
  const [selected, setSelected] = useState()

  if (!attachments || attachments.length === 0) {
    return null
  }

  const handleSelect = (e, id) => {
    e.preventDefault()
    setSelected(id)
    toggle(true)
  }

  return (
    <div className="mt-3 grid w-full grid-flow-row grid-cols-2 gap-0">
      {attachments?.map((attachment, i) => {
        const firstInOdds = i === 0 && attachments.length % 2
        const isImage = attachment.type === 'image'
        const isVideo =
          attachment.type === 'video' || attachment.type === 'gifv'
        const onlyAttachment = i === 0 && attachments.length === 1

        const anchorCx = `${onlyAttachment ? 'col-span-2' : ''} ${
          firstInOdds ? 'row-span-2' : ''
        }`
        const innerCx = `w-full h-full relative ${
          firstInOdds && !onlyAttachment ? 'aspect-vertical-video' : ''
        } ${!firstInOdds && !onlyAttachment ? 'aspect-square' : ''}`

        return (
          <a key={attachment.id} href={attachment.url} className={anchorCx}>
            <div
              className={innerCx}
              onClick={e => handleSelect(e, attachment.id)}
            >
              {isVideo && (
                <AttachmentVideo
                  {...attachment}
                  onlyAttachment={onlyAttachment}
                />
              )}
              {isImage && (
                <AttachmentImage
                  {...attachment}
                  onlyAttachment={onlyAttachment}
                />
              )}
            </div>
          </a>
        )
      })}
      <Lightbox
        attachments={attachments}
        onClose={() => toggle(false)}
        selected={selected}
        show={show}
      />
    </div>
  )
}
