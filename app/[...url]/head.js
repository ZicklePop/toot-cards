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
    hasMedia,
    imageUrl,
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
      {!hasMedia && (
        <>
          <meta property="og:image" content={imageUrl} />
          <meta property="og:image:alt" content={description} />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:width" content="1200" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:image" content={imageUrl} />
          <meta property="twitter:image:alt" content={description} />
        </>
      )}
      <title>{`${title}: ${description}`}</title>
    </>
  )
}
