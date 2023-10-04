import { NextResponse } from 'next/server'
import jsonfeedToRss from 'jsonfeed-to-rss'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const server = searchParams.get('s') || 'nyan.lol'
  const format = searchParams.get('f') === 'rss' ? 'rss' : 'jsonfeed'

  const jsonFeed = {
    version: 'https://jsonfeed.org/version/1',
    title: `${server} public timeline`,
    description: `the public timeline of the mastodon instance ${server}`,
    icon: 'https://toot.cards/apple-touch-icon.png',
    home_page_url: `https://${server}/public/local`,
    feed_url: request.url,
    items: [],
  }

  const data = await fetch(
    `https://${server}/api/v1/timelines/public?local=true`
  ).then(res => res.json())

  jsonFeed.items = data.map(
    ({
      id,
      created_at: date_published,
      url,
      content,
      card,
      media_attachments,
      account,
      replies_count,
      reblogs_count,
      favourites_count,
    }) => {
      const { avatar, username, display_name: name, url: profile_url } = account
      const title = `${name} @${username}@${server}`
      const image = media_attachments[0]?.url || card?.image || undefined
      const external_url = card?.url || undefined
      const attachments = media_attachments.map(attachment => {
        const { description = '', preview_url = '', type, url } = attachment
        const isImage = type === 'image'
        const isVideo = type === 'video' || type === 'gifv'

        if (isVideo) {
          return `<video aria-label="${
            description || 'Video attachment'
          }" controls="true" plays-inline="true" poster="${preview_url}" preload="auto" src="${url}"></video>`
        }

        if (isImage) {
          return `<img alt="${
            description || 'Image attachment'
          }" src="${url}" />`
        }

        return
      })
      const content_html = `${content}${attachments.join(
        '<br/>'
      )}<br/>💬${replies_count} 🚀${reblogs_count} ⭐️${favourites_count}`

      return {
        content_html,
        date_published,
        external_url,
        id,
        image,
        title,
        url,
        author: {
          name,
          avatar,
          url: profile_url,
        },
      }
    }
  )

  if (format === 'rss') {
    return new Response(jsonfeedToRss(jsonFeed), {
      headers: {
        'content-type': 'application/rss+xml; charset=utf-8',
      },
    })
  }

  return NextResponse.json(jsonFeed, {
    status: 200,
    headers: {
      'content-type': 'application/feed+json; charset=utf-8',
    },
  })
}
