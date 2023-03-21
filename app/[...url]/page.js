import ArrowDownIcon from '@heroicons/react/24/outline/ArrowDownIcon'
import ArrowUpIcon from '@heroicons/react/24/outline/ArrowUpIcon'
import Error from '../error'
import LoadMore from './load-more'
import Toot from '../../ui/toot'
import getStatusFromParams from '../../lib/get-status-from-params'

export async function generateMetadata({ params: { url } }) {
  const data = await getStatusFromParams(url)
  console.log(data)
  const {
    avatar,
    description,
    detailedDescription,
    fullUsername,
    media_attachments,
    title,
  } = data

  const images = []
  const videos = []
  media_attachments.forEach(
    ({
      description,
      type,
      url,
      meta: {
        original: { width, height },
      },
    }) => {
      if (type === 'image') {
        images.push({
          alt: description,
          height,
          url,
          width,
        })
      }
      if (type === 'video' || type === 'gifv') {
        videos.push({
          height,
          type: 'video/mp4',
          url,
          width,
        })
      }
    }
  )

  return {
    title: `${title}: ${description}`,
    description: detailedDescription,
    icons: {
      apple: avatar,
    },
    openGraph: {
      description: detailedDescription,
      images,
      siteName: fullUsername,
      title,
      type: videos.length ? 'video.other' : 'website',
      url: `https://twitter.com/a/status/a`,
      videos,
    },
  }
}

export default async function Page({ params: { url } }) {
  let json = {}
  try {
    json = await getStatusFromParams(url)
  } catch (error) {
    return <Error error={error.messsage} />
  }

  return (
    <div className="my-3 flex w-full flex-col">
      <LoadMore toots={json?._context?.ancestors}>
        <ArrowUpIcon className="inline-block h-5 w-5" />
        {' show replied to'}
      </LoadMore>
      <div id="toot">
        <Toot {...json} />
      </div>
      <LoadMore toots={json?._context?.descendants}>
        <ArrowDownIcon className="inline-block h-5 w-5" />
        {' show replies'}
      </LoadMore>
    </div>
  )
}
