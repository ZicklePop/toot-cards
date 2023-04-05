import DefaultTags from '../ui/default-tags'

const title = 'toot cards'
const description = 'pretty cards and embeds for toots'

export default function Head() {
  return (
    <>
      <DefaultTags />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <meta name="description" content={description} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/cover.png" />
      <meta name="twitter:image:alt" content="logo for toot cards" />
      <meta name="twitter:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/cover.png" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <title>{title}</title>
    </>
  )
}
