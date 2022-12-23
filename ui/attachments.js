/* eslint-disable @next/next/no-img-element */
export default function Attachments({ attachments }) {
  if (!attachments) return null

  return (
    <div>
      {attachments?.map(attachment => (
        <div key={attachment.id}>
          <a href={attachment.url}>
            <img src={attachment.preview_url} alt={attachment.description} />
          </a>
        </div>
      ))}
    </div>
  )
}
