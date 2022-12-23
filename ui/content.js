export default function Content({ content }) {
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}
