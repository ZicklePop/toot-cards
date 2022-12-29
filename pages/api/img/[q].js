import OGToot from '../../../ui/og-toot'
import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge',
}

export default async function handler(req) {
  try {
    const { searchParams } = new URL(req.url)
    const imgData = searchParams.get('q')
    // Using the deprecated atob because NextJS
    // Edge functions don't support Buffer
    const json = JSON.parse(atob(imgData))
    return new ImageResponse(<OGToot {...json} />, {
      width: 1200,
      height: 630,
    })
  } catch (e) {
    return new ImageResponse(
      (
        <div tw="text-3xl bg-white h-full w-full flex text-center items-center justify-center">
          <p>{`Failed to generate image with error: ${e.message}`}</p>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  }
}
