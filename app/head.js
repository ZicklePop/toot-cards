const title = 'toot embed'
const description = 'embed your toots'

export default function Head() {
  return (
    <>
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="mask-icon" sizes="any" href="/mask-icon.svg" color="#fa3a8e" />
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta name="keywords" content="mastodon, toot, post, status" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/cover.png" />
      <meta name="twitter:image:alt" content="logo for toot-embed" />
      <meta name="twitter:title" content={title} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
