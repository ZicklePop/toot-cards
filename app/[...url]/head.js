import DefaultTags from '../../ui/default-tags'
import MediaTags from '../../ui/media-tags'
import getHeadData from '../../lib/get-head-data'
import FallbackHead from '../head'

export default async function Head({ params: { url } }) {
  let data

  try {
    data = await getHeadData(url)
  } catch (e) {
    return <FallbackHead />
  }

  const {
    avatar,
    description,
    detailedDescription,
    fullUsername,
    media_attachments,
    title,
  } = data

  return (
    <>
      <DefaultTags />
      <link rel="apple-touch-icon" href={avatar} />
      <meta name="title" content={title} />
      <meta name="description" content={detailedDescription} />
      <meta property="og:description" content={detailedDescription} />
      <meta property="og:site_name" content={fullUsername} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content="https://twitter.com/0/status/0" />
      <meta property="twitter:creator" content={fullUsername} />
      <meta property="twitter:description" content={detailedDescription} />
      <meta property="twitter:site" content={fullUsername} />
      <meta property="twitter:title" content={title} />
      <MediaTags media_attachments={media_attachments} />
      <title>{`${title}: ${description}`}</title>
    </>
  )
}
