export default function LightboxVideo({
  description,
  preview_url,
  url,
  meta: {
    original: { width, height },
  },
}) {
  return (
    <video
      aria-label={description || 'Video attachment'}
      autoPlay
      className="max-h-screen max-w-full drop-shadow-2xl"
      controls
      height={height}
      loop
      playsInline
      poster={preview_url}
      preload="auto"
      role="button"
      src={url}
      width={width}
    ></video>
  )
}
