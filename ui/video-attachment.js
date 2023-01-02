import Image from 'next/image'
import PlayIcon from '@heroicons/react/24/outline/PlayIcon'

export default function VideoAttachment({
  description,
  preview_url,
  meta: {
    original: { width, height },
  },
  onlyAttachment,
}) {
  const imageProps = onlyAttachment
    ? {
        width,
        height,
        className: 'w-full',
      }
    : {
        fill: true,
        className: 'object-cover',
      }
  return (
    <>
      <Image alt={description} src={preview_url} {...imageProps} />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="rounded-lg border-2 border-white bg-black/60 px-8 py-4 text-white shadow-md ring-2 ring-black backdrop-blur-sm hover:scale-110 hover:bg-black/50 active:scale-95 active:bg-black/70 motion-safe:transition-all ">
          <PlayIcon className="h-6 w-6" />
        </div>
      </div>
    </>
  )
}
