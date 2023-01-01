import getStatusFromParams from './get-status-from-params'
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

export default async function getHeadData(url) {
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
    content
      ?.replaceAll('</p>', ' \n \n')
      .replaceAll('<br />', ' \n')
      .replaceAll(/[\s\n]*?$/g, ''),
    {
      allowedTags: [],
      allowedAttributes: {},
    }
  )
  const hasMedia = media_attachments.length > 0
  const detailedDescription = `${description} \n💬${replies_count} 🚀${reblogs_count} ⭐️${favourites_count}`
  const imgJson = {
    account: {
      avatar,
      display_name,
      url: profileUrl,
      username,
    },
    content: description
      .slice(0, 200)
      .replaceAll(/[“”]/g, '"')
      .replaceAll(/[‘’]/g, "'")
      .replaceAll('…', '...'),
    created_at,
    favourites_count,
    reblogs_count,
    replies_count,
  }
  const imgData = encodeURIComponent(btoa(JSON.stringify(imgJson)))
  const imageUrl = `${imageHost}/api/img/${imgData}`

  return {
    title,
    detailedDescription,
    fullUsername,
    media_attachments,
    hasMedia,
    imageUrl,
    description,
  }
}
