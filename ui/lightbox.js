import LightboxControls from './lightbox-controls'
import LightboxImage from './lightbox-image'
import LightboxVideo from './lightbox-video'

export default function Lightbox({ current, ...controls }) {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm dark:bg-black/50">
      <div className="relative flex h-full items-center justify-center">
        {current.type === 'image' && <LightboxImage {...current} />}
        {(current.type === 'video' || current.type === 'gifv') && (
          <LightboxVideo {...current} />
        )}
        <LightboxControls {...controls} />
      </div>
    </div>
  )
}
