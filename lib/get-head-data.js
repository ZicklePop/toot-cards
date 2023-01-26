import getStatusFromParams from './get-status-from-params'
import sanitizeHtml from 'sanitize-html'

export default async function getHeadData(url) {
  const json = await getStatusFromParams(url)
  const {
    account,
    content,
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
  const detailedDescription = `${description} \n💬${replies_count} 🚀${reblogs_count} ⭐️${favourites_count}`

  return {
    avatar,
    description,
    detailedDescription,
    fullUsername,
    media_attachments,
    title,
  }
}
