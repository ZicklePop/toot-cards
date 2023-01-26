import getStatusFromParams from './get-status-from-params'
import sanitizeHtml from 'sanitize-html'

const devPort = parseInt(process.env.PORT, 10) || 3000
const imageHost =
  process.env.NODE_ENV !== 'production'
    ? `http://localhost:${devPort}`
    : `https://${process.env.VERCEL_URL}`

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
    avatar,
    content: description.slice(0, 200),
    created_at,
    display_name,
    favourites_count,
    reblogs_count,
    replies_count,
    url: profileUrl,
    username,
  }
  const imgUri = Object.keys(imgJson).reduce(
    (prev, curr) => `${prev}&${curr}=${encodeURIComponent(imgJson[curr])}`,
    '?'
  )
  const imageUrl = `${imageHost}/api/img/${imgUri}`

  return {
    avatar,
    description,
    detailedDescription,
    fullUsername,
    hasMedia,
    imageUrl,
    media_attachments,
    title,
  }
}
