import Image from 'next/image'

export default function LightboxImage({
  id,
  description,
  url,
  meta: {
    original: { width, height },
  },
}) {
  return (
    <Image
      alt={description || 'Image attachment'}
      className="max-h-[100svh] object-contain drop-shadow-2xl"
      height={height}
      id={id}
      onClick={e => e.stopPropagation()}
      src={url}
      width={width}
    />
  )
}
