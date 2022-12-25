/* eslint-disable @next/next/no-img-element */
import PlayIcon from './icons/play'

export default function Attachments({ attachments }) {
  if (!attachments || attachments.length === 0) return null
  const hasMultipleAttachments = attachments.length > 1

  return (
    <div className="pt-3">
      {attachments?.map(({ description, id, preview_url, type, url }) => (
        <a
          key={id}
          href={url}
          className={`relative ${
            hasMultipleAttachments ? 'inline-block w-1/2' : 'block'
          }`}
        >
          {(type === 'video' || type === 'gifv') && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-lg border-2 bg-black/10 px-8 py-4 text-white shadow-md backdrop-blur-sm hover:scale-110 hover:bg-black/30 active:scale-95 active:bg-black/40 motion-safe:transition-all">
                <PlayIcon />
              </div>
            </div>
          )}
          <img
            className="mx-auto max-h-96"
            src={preview_url}
            alt={description}
          />
        </a>
      ))}
    </div>
  )
}
