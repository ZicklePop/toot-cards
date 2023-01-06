import LightboxImage from './lightbox-image'
import LightboxVideo from './lightbox-video'

export default function LightboxAttachment({ current }) {
  const isImage = current.type === 'image'
  const isVideo = current.type === 'video' || current.type === 'gifv'

  return (
    <div className="flex w-full shrink-0 snap-center items-center justify-center">
      {isImage && <LightboxImage {...current} />}
      {isVideo && <LightboxVideo {...current} />}
    </div>
  )
}
