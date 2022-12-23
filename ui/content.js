export default function Content({ content }) {
  return (
    <div
      className="prose text-xl dark:prose-invert"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
