import DefaultTags from '../../../ui/default-tags'
import getStatusFromParams from '../../../lib/get-status-from-params'
import sanitizeHtml from 'sanitize-html'

export const devPort = parseInt(process.env.PORT, 10) || 3000
export const imageHost =
  process.env.NODE_ENV !== 'production'
    ? `http://localhost:${devPort}`
    : `https://${process.env.VERCEL_URL}`

export default async function Head({ params: { url } }) {
  const {
    account,
    content,
    media_attachments,
    url: statusUrl,
    favourites_count,
    reblogs_count,
    replies_count,
  } = await getStatusFromParams(url)

  const { display_name, url: profileUrl, username } = account
  const host = profileUrl.split('/')[2]
  const fullUsername = `@${username}@${host}`
  const title = `${display_name} (${fullUsername})`
  const description = sanitizeHtml(
    content?.replaceAll('</p>', '\n \n ').replaceAll('<br />', '\n '),
    {
      allowedTags: [],
      allowedAttributes: {},
    }
  )
  const image =
    media_attachments[0]?.url || `${imageHost}/api/img/${url.join('/')}`
  const altText = media_attachments[0]?.description

  const detailedDescription = `${description}💬${replies_count} 🚀${reblogs_count} ⭐️${favourites_count}`

  return (
    <>
      <DefaultTags />
      <meta property="description" content={detailedDescription} />
      <meta property="og:description" content={detailedDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={fullUsername} />
      <meta property="og:title" content={title} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:creator" content={fullUsername} />
      <meta property="twitter:description" content={detailedDescription} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:image:alt" content={altText} />
      <meta property="twitter:site" content={fullUsername} />
      <meta property="twitter:title" content={title} />
      <title>{`${title}: ${description}`}</title>
      <meta httpEquiv="refresh" content={`0;url=${statusUrl}`} />
    </>
  )
}
