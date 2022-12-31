import sanitizeHtml from 'sanitize-html'

export default function Content({ content }) {
  return (
    <div
      className="prose break-words text-xl dark:prose-invert"
      dangerouslySetInnerHTML={{ __html: sanitizeHtml(content) }}
    />
  )
}
