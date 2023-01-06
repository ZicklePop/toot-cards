export default function LightboxVideo({ id, description, preview_url, url }) {
  return (
    <video
      aria-label={description || 'Video attachment'}
      autoPlay
      className="max-h-[100svh] object-contain drop-shadow-2xl"
      controls
      id={id}
      loop
      onClick={e => e.stopPropagation()}
      playsInline
      poster={preview_url}
      preload="auto"
      src={url}
    ></video>
  )
}
