import DefaultTags from '../../ui/default-tags'
import Script from 'next/script'
import getStatusFromParams from '../../lib/get-status-from-params'
import sanitizeHtml from 'sanitize-html'

const devPort = parseInt(process.env.PORT, 10) || 3000
const imageHost =
  process.env.NODE_ENV !== 'production'
    ? `http://localhost:${devPort}`
    : `https://${process.env.VERCEL_URL}`

function btoa(str) {
  if (typeof window !== 'undefined') {
    return window.btoa(str)
  }
  return Buffer.from(str).toString('base64')
}

export default async function Head({ params: { url } }) {
  const json = await getStatusFromParams(url)
  const {
    account,
    content,
    created_at,
    favourites_count,
    media_attachments,
    reblogs_count,
    replies_count,
  } = json

  const { avatar, display_name, url: profileUrl, username } = account
  const host = profileUrl.split('/')[2]
  const fullUsername = `@${username}@${host}`
  const title = `${display_name} (${fullUsername})`
  const description = sanitizeHtml(
    content?.replaceAll('</p>', ' \n \n').replaceAll('<br />', ' \n'),
    {
      allowedTags: [],
      allowedAttributes: {},
    }
  )
  const altText = media_attachments[0]?.description
  const detailedDescription = `${description}💬${replies_count} 🚀${reblogs_count} ⭐️${favourites_count}`

  const imgJson = {
    account: {
      avatar,
      display_name,
      url: profileUrl,
      username,
    },
    content: description.slice(0, 200),
    created_at,
    favourites_count,
    reblogs_count,
    replies_count,
  }
  const imgData = encodeURIComponent(btoa(JSON.stringify(imgJson)))
  const image = media_attachments[0]?.url || `${imageHost}/api/img/${imgData}`

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
      <Script id="toot">{`window.toot = ${JSON.stringify(json)}`}</Script>
    </>
  )
}
