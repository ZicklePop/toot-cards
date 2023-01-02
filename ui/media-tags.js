export default function MediaTags({ media_attachments = [] }) {
  return media_attachments.map(
    ({
      description,
      type,
      url,
      meta: {
        original: { width, height },
      },
    }) => {
      if (type === 'image') {
        return (
          <>
            <meta property="og:image" content={url} />
            <meta property="og:image:alt" content={description} />
            <meta property="og:image:height" content={height} />
            <meta property="og:image:width" content={width} />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:image" content={url} />
            <meta property="twitter:image:alt" content={description} />
          </>
        )
      }
      if (type === 'video' || type === 'gifv') {
        return (
          <>
            <meta name="twitter:card" content="player" />
            <meta name="twitter:player" content={url} />
            <meta name="twitter:player:height" content={height} />
            <meta name="twitter:player:width" content={width} />
            <meta property="og:type" content="video.other" />
            <meta property="og:video:height" content={height} />
            <meta property="og:video:type" content="video/mp4" />
            <meta property="og:video:url" content={url} />
            <meta property="og:video:width" content={width} />
          </>
        )
      }
    }
  )
}
