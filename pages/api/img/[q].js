import OGToot from '../../../ui/og-toot'
import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge',
}

const font = fetch(
  new URL('../../../public/IBMPlexSans-Medium.ttf', import.meta.url)
).then(res => res.arrayBuffer())
const boldFont = fetch(
  new URL('../../../public/IBMPlexSans-Bold.ttf', import.meta.url)
).then(res => res.arrayBuffer())

export default async function handler(req) {
  const fontData = await font
  const boldFontData = await boldFont
  const config = {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: 'IBM Plex',
        data: fontData,
        style: 'normal',
      },
      {
        name: 'IBM Plex Bold',
        data: boldFontData,
        style: 'normal',
      },
    ],
  }

  try {
    const { searchParams } = new URL(req.url)
    const imgData = searchParams.get('q')
    // Using the deprecated atob because NextJS
    // Edge functions don't support Buffer
    const json = JSON.parse(atob(decodeURIComponent(imgData)))
    return new ImageResponse(<OGToot {...json} />, config)
  } catch (e) {
    return new ImageResponse(
      (
        <div tw="text-3xl bg-white h-full w-full flex text-center items-center justify-center">
          <p
            style={{
              fontFamily: '"IBM Plex"',
            }}
          >{`Failed to generate image with error: ${e.message}`}</p>
        </div>
      ),
      config
    )
  }
}
