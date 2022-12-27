import DefaultTags from '../../../ui/default-tags'
import getStatusFromParams from '../../../lib/get-status-from-params'
import sanitizeHtml from 'sanitize-html'

export default async function Head({ params: { url } }) {
  const {
    account,
    content,
    media_attachments,
    url: statusUrl,
  } = await getStatusFromParams(url)

  const { display_name, url: profileUrl, username } = account
  const host = profileUrl.split('/')[2]
  const fullUsername = `@${username}@${host}`
  const title = `${display_name} (${fullUsername})`
  const description = sanitizeHtml(content, {
    allowedTags: [],
    allowedAttributes: {},
  }).replace(/\n/g, ' ')
  const image = media_attachments[0]?.url
  const altText = media_attachments[0]?.description

  return (
    <>
      <DefaultTags />
      <meta property="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={fullUsername} />
      <meta property="og:title" content={title} />
      <meta
        property="twitter:card"
        content={
          media_attachments.length === 0 ? 'tweet' : 'summary_large_image'
        }
      />
      <meta property="twitter:creator" content={fullUsername} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:image:alt" content={altText} />
      <meta property="twitter:site" content={fullUsername} />
      <meta property="twitter:title" content={title} />
      <title>{`${title}: ${description}`}</title>
      <meta httpEquiv="refresh" content={`0;url=${statusUrl}`} />
    </>
  )
}
