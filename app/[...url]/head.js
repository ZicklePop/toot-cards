import DefaultTags from '../../ui/default-tags'
import FallbackHead from '../head'
import MediaTags from '../../ui/media-tags'
import getHeadData from '../../lib/get-head-data'

export default async function Head({ params: { url } }) {
  let data

  try {
    data = await getHeadData(url)
  } catch (e) {
    return <FallbackHead />
  }

  const isImessage = await shouldUseImessageHack()

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
      <meta property="og:url" content="https://twitter.com/a/status/a" />
      <meta property="twitter:creator" content={fullUsername} />
      <meta property="twitter:description" content={detailedDescription} />
      <meta property="twitter:site" content={fullUsername} />
      <meta property="twitter:title" content={title} />
      <MediaTags media_attachments={media_attachments} />
      <title>{`${title}: ${description}`}</title>
    </>
  )
}
