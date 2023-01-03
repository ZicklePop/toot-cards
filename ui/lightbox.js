import LightboxControls from './lightbox-controls'
import LightboxImage from './lightbox-image'
import LightboxVideo from './lightbox-video'

export default function Lightbox({ current, ...controls }) {
  const isImage = current.type === 'image'
  const isVideo = current.type === 'video' || current.type === 'gifv'
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm dark:bg-black/50">
      <div className="relative flex h-full items-center justify-center">
        {isImage && <LightboxImage {...current} />}
        {isVideo && <LightboxVideo {...current} />}
        <LightboxControls isVideo={isVideo} {...controls} />
      </div>
    </div>
  )
}
