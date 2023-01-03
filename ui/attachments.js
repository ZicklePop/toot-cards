import AttachmentImage from './attachment-image'
import AttachmentVideo from './attachment-video'
import LightboxHandler from './lightbox-handler'

export default function Attachments({ attachments }) {
  if (!attachments || attachments.length === 0) {
    return null
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
          <LightboxHandler
            key={attachment.id}
            currentAttachment={attachment}
            attachments={attachments}
          >
            <a href={attachment.url} className={anchorCx}>
              <div className={innerCx}>
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
          </LightboxHandler>
        )
      })}
    </div>
  )
}
