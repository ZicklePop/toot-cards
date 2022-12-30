import DefaultTags from '../../ui/default-tags'
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

  const mediaAlt = media_attachments[0]?.description
  const mediaType = media_attachments[0]?.type
  const mediaUrl =
    media_attachments[0]?.url || `${imageHost}/api/img/${imgData}`
  const mediaWidth = media_attachments[0]?.meta?.original?.width
  const mediaHeight = media_attachments[0]?.meta?.original?.height

  return (
    <>
      <DefaultTags />
      <meta name="title" content={title} />
      <meta name="description" content={detailedDescription} />
      <meta property="og:description" content={detailedDescription} />
      <meta property="og:site_name" content={fullUsername} />
      <meta property="og:title" content={title} />
      <meta property="twitter:creator" content={fullUsername} />
      <meta property="twitter:description" content={detailedDescription} />
      <meta property="twitter:site" content={fullUsername} />
      <meta property="twitter:title" content={title} />
      {mediaType === 'image' && (
        <>
          <meta property="og:image" content={mediaUrl} />
          <meta property="og:image:alt" content={mediaAlt} />
          <meta property="og:image:height" content={mediaHeight} />
          <meta property="og:image:width" content={mediaWidth} />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:image" content={mediaUrl} />
          <meta property="twitter:image:alt" content={mediaAlt} />
        </>
      )}
      {mediaType === 'video' && (
        <>
          <meta name="twitter:card" content="player" />
          <meta name="twitter:player" content={mediaUrl} />
          <meta name="twitter:player:height" content={mediaHeight} />
          <meta name="twitter:player:width" content={mediaWidth} />
          <meta property="og:type" content="video.other" />
          <meta property="og:video:height" content={mediaHeight} />
          <meta property="og:video:type" content="video/mp4" />
          <meta property="og:video:url" content={mediaUrl} />
          <meta property="og:video:width" content={mediaWidth} />
        </>
      )}
      {!mediaType && (
        <>
          <meta property="og:image" content={mediaUrl} />
          <meta property="og:image:alt" content={description} />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:width" content="1200" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:image" content={mediaUrl} />
          <meta property="twitter:image:alt" content={description} />
        </>
      )}
      <title>{`${title}: ${description}`}</title>
    </>
  )
}
