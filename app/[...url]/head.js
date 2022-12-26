import DefaultTags from '../../ui/default-tags'
import getStatusFromParams from '../../lib/get-status-from-params'

export default async function Page({ params: { url } }) {
  const { account, content, media_attachments } = await getStatusFromParams(url)
  const { display_name, url: profileUrl, username } = account
  const host = profileUrl.split('/')[2]
  const fullUsername = `@${username}@${host}`
  const title = `${display_name} (${fullUsername})`
  const description = content // strip html tags
  const image = media_attachments[0]?.url // check type?
  const altText = media_attachments[0]?.description // default to empty string?

  return (
    <>
      <DefaultTags />
      <meta property="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={fullUsername} />
      <meta property="og:title" content={title} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:creator" content={fullUsername} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:image:alt" content={altText} />
      <meta property="twitter:site" content={fullUsername} />
      <meta property="twitter:title" content={title} />
      <title>
        {title} - {description}
      </title>
    </>
  )
}
