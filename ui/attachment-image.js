import Image from 'next/image'

export default function ImageAttachment({
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
        className: 'w-full object-contain',
      }
    : {
        fill: true,
        className: 'object-cover',
      }
  return (
    <Image
      alt={description || 'Image attachment'}
      src={preview_url}
      {...imageProps}
    />
  )
}
