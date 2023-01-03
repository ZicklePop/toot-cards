import Image from 'next/image'

export default function LightboxImage({ description, url }) {
  return (
    <Image
      alt={description || 'Image attachment'}
      className="object-contain drop-shadow-2xl"
      fill
      src={url}
    />
  )
}
